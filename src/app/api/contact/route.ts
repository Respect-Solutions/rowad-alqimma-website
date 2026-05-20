import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

// ─── Helpers ───────────────────────────────────────────────────────────────────

const sanitize = (str: string) =>
  str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;");

// ─── POST ──────────────────────────────────────────────────────────────────────

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { fullName, company, email, vision, captchaToken } = body;

    // ── Validate required fields ──────────────────────────────────────────────

    if (!fullName || !company || !email || !vision || !captchaToken) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 },
      );
    }

    // ── Verify Turnstile Token ────────────────────────────────────────────────

    const verifyResponse = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: process.env.TURNSTILE_SECRET_KEY!,
          response: captchaToken,
        }),
      },
    );

    const verifyData = await verifyResponse.json();

    if (!verifyData.success) {
      return NextResponse.json(
        { success: false, message: "Captcha verification failed" },
        { status: 400 },
      );
    }

    // ── Send Email ────────────────────────────────────────────────────────────

    await resend.emails.send({
      from: "Rowad Alqimma Website <onboarding@resend.dev>",
      to: "info@rowadalqimma.com",
      subject: "New Contact Request From Website",
      html: `
        <div style="font-family:sans-serif; max-width:600px; margin:0 auto;">
          <h2 style="color:#14263D;">New Contact Request From Website</h2>

          <p><strong>Name:</strong> ${sanitize(fullName)}</p>

          <p><strong>Company:</strong> ${sanitize(company)}</p>

          <p><strong>Email:</strong> ${sanitize(email)}</p>

          <p><strong>Message:</strong></p>

          <p style="white-space:pre-wrap;">${sanitize(vision)}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("[Contact API Error]", error);

    return NextResponse.json({ success: false }, { status: 500 });
  }
}
