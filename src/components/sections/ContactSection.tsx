"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, Variants } from "framer-motion";
import { useLocale } from "@/hooks/useLocale";
import Turnstile from "react-turnstile";

import {
  FaFacebookF,
  FaInstagram,
  FaSnapchat,
  FaTiktok,
  FaWhatsapp,
  FaXTwitter,
  // FaSnapchatGhost,
} from "react-icons/fa6";

// ─── Schema ────────────────────────────────────────────────────────────────────

const contactSchema = z.object({
  fullName: z.string().min(3, "Please enter your full name"),
  company: z.string().min(2, "Please enter company name"),
  email: z.string().email("Please enter a valid email"),
  vision: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

// ─── Types ─────────────────────────────────────────────────────────────────────

type SubmitStatus = "idle" | "loading" | "success" | "error";

// ─── Animation Variants ───────────────────────────────────────────────────────

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
};

const cardHoverVariants: Variants = {
  hover: {
    y: -4,
    borderColor: "rgba(185, 199, 228, 0.3)",
    transition: { duration: 0.2, ease: "easeOut" },
  },
  tap: { scale: 0.98 },
};

const buttonHoverVariants: Variants = {
  hover: {
    scale: 1.02,
    transition: { duration: 0.2, ease: "easeOut" },
  },
  tap: { scale: 0.98 },
};

// ─── Component ─────────────────────────────────────────────────────────────────

export function ContactSection() {
  const { isArabic } = useLocale();

  const [captchaToken, setCaptchaToken] = useState("");
  const [turnstileId, setTurnstileId] = useState("");
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [showPopup, setShowPopup] = useState(false);

  const popupTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  // ─── Helpers ──────────────────────────────────────────────────────────────────

  const triggerPopup = (status: "success" | "error") => {
    if (popupTimerRef.current) clearTimeout(popupTimerRef.current);

    setSubmitStatus(status);
    setShowPopup(true);

    popupTimerRef.current = setTimeout(() => {
      setShowPopup(false);
      setSubmitStatus("idle");
    }, 4000);
  };

  const resetCaptcha = () => {
    setCaptchaToken("");
    if (turnstileId) window.turnstile?.reset(turnstileId);
  };

  // ─── Submit ───────────────────────────────────────────────────────────────────

  const onSubmit = async (data: ContactFormData) => {
    if (!captchaToken) {
      alert(
        isArabic
          ? "من فضلك أكد أنك لست روبوت"
          : "Please verify that you are not a robot",
      );
      return;
    }

    setSubmitStatus("loading");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, captchaToken }),
      });

      if (!response.ok) throw new Error("Failed");

      reset();
      resetCaptcha();
      triggerPopup("success");
    } catch (_err) {
      resetCaptcha();
      triggerPopup("error");
    }
  };

  const isLoading = submitStatus === "loading";

  // ─── Render ───────────────────────────────────────────────────────────────────

  return (
    <section
      dir={isArabic ? "rtl" : "ltr"}
      className="relative overflow-hidden bg-[#14263D] px-4 py-16 sm:px-6 md:py-24"
    >
      <div className="mx-auto grid max-w-[1440px] gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-12">
        {/* ── Left Side ─────────────────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="rounded-[32px] bg-[#27354CB2] p-6 backdrop-blur-[4px] sm:p-8 md:p-10"
        >
          {/* Heading */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold leading-none text-white sm:text-4xl md:text-[42px]">
              {isArabic ? "استفسار استراتيجي" : "Strategic Inquiry"}
            </h2>

            <p className="mt-3 text-base text-white/45 sm:mt-4 sm:text-lg">
              {isArabic
                ? "ملخص سري لفريقنا التنفيذي."
                : "Confidential brief for our executive consulting team."}
            </p>
          </motion.div>

          {/* Form */}
          <motion.form
            variants={containerVariants}
            onSubmit={handleSubmit(onSubmit)}
            className="mt-8 sm:mt-10 md:mt-12"
          >
            {/* Full Name */}
            <motion.div variants={itemVariants}>
              <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                {isArabic ? "الاسم الكامل" : "Full Name"}
              </label>

              <input
                type="text"
                placeholder={isArabic ? "محمد أحمد" : "Khalid Bin Ahmed"}
                disabled={isLoading}
                {...register("fullName")}
                className={`h-[60px] w-full rounded-[16px] border bg-[#43516A] px-5 text-white placeholder:text-white/30 outline-none transition focus:border-[#B9C7E4] disabled:opacity-50 disabled:cursor-not-allowed sm:h-[64px] sm:px-6 md:h-[68px] ${
                  errors.fullName ? "border-red-500" : "border-[#B9C7E4]/40"
                }`}
              />

              {errors.fullName && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.fullName.message}
                </p>
              )}
            </motion.div>

            {/* Company + Email Row */}
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              {/* Company */}
              <motion.div variants={itemVariants}>
                <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                  {isArabic ? "الشركة" : "Company"}
                </label>

                <input
                  type="text"
                  placeholder={isArabic ? "اسم الشركة" : "Global Corp"}
                  disabled={isLoading}
                  {...register("company")}
                  className={`h-[60px] w-full rounded-[16px] border bg-[#43516A] px-5 text-white placeholder:text-white/30 outline-none transition focus:border-[#B9C7E4] disabled:opacity-50 disabled:cursor-not-allowed sm:h-[64px] sm:px-6 md:h-[68px] ${
                    errors.company ? "border-red-500" : "border-[#B9C7E4]/40"
                  }`}
                />

                {errors.company && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.company.message}
                  </p>
                )}
              </motion.div>

              {/* Email */}
              <motion.div variants={itemVariants}>
                <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                  {isArabic ? "البريد الإلكتروني" : "Email Address"}
                </label>

                <input
                  type="email"
                  placeholder="k.ahmed@corp.com"
                  disabled={isLoading}
                  {...register("email")}
                  className={`h-[60px] w-full rounded-[16px] border bg-[#43516A] px-5 text-white placeholder:text-white/30 outline-none transition focus:border-[#B9C7E4] disabled:opacity-50 disabled:cursor-not-allowed sm:h-[64px] sm:px-6 md:h-[68px] ${
                    errors.email ? "border-red-500" : "border-[#B9C7E4]/40"
                  }`}
                />

                {errors.email && (
                  <p className="mt-2 text-sm text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </motion.div>
            </div>

            {/* Textarea */}
            <motion.div variants={itemVariants} className="mt-6">
              <label className="mb-3 block text-xs font-semibold uppercase tracking-[0.2em] text-white/55">
                {isArabic ? "رؤيتك الاستراتيجية" : "Your Strategic Vision"}
              </label>

              <textarea
                placeholder={
                  isArabic
                    ? "صف أهدافك وخططك لدخول السوق..."
                    : "Describe your market entry or growth objectives..."
                }
                disabled={isLoading}
                {...register("vision")}
                className={`h-[160px] w-full resize-none rounded-[16px] border bg-[#43516A] px-5 py-4 text-white placeholder:text-white/30 outline-none transition focus:border-[#B9C7E4] disabled:opacity-50 disabled:cursor-not-allowed sm:h-[170px] sm:px-6 sm:py-5 md:h-[180px] ${
                  errors.vision ? "border-red-500" : "border-[#B9C7E4]/40"
                }`}
              />

              {errors.vision && (
                <p className="mt-2 text-sm text-red-400">
                  {errors.vision.message}
                </p>
              )}
            </motion.div>

            {/* Captcha */}
            <motion.div
              variants={itemVariants}
              className="mt-6 flex justify-center"
            >
              <Turnstile
                sitekey={process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY!}
                onLoad={(id) => setTurnstileId(id)}
                onVerify={(token) => setCaptchaToken(token)}
                onExpire={() => setCaptchaToken("")}
                onError={() => setCaptchaToken("")}
              />
            </motion.div>

            {/* Submit Button */}
            <motion.div variants={itemVariants} className="mt-8">
              <motion.button
                type="submit"
                disabled={isLoading}
                variants={buttonHoverVariants}
                whileHover="hover"
                whileTap="tap"
                className="flex h-[60px] w-full items-center justify-center gap-2 rounded-[16px] bg-[#C9D6FF] text-sm font-bold uppercase tracking-[0.08em] text-[#14263D] transition duration-300 hover:bg-[#dbe4ff] disabled:opacity-60 disabled:cursor-not-allowed sm:h-[64px] md:h-[68px]"
              >
                {isLoading ? (
                  <>
                    <svg
                      className="h-4 w-4 animate-spin"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"
                        strokeLinecap="round"
                      />
                    </svg>
                    {isArabic ? "جاري الإرسال..." : "Submitting..."}
                  </>
                ) : isArabic ? (
                  "إرسال الطلب"
                ) : (
                  "Transmit Inquiry"
                )}
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>

        {/* ── Right Side ────────────────────────────────────────────────────── */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Headquarters */}
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-white sm:text-4xl md:text-[42px]">
              {isArabic ? "المقر الرئيسي بالرياض" : "Riyadh Headquarters"}
            </h3>

            <div className="mt-8 flex flex-col gap-4 sm:mt-10 sm:gap-5">
              {/* Address */}
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="flex items-start gap-4 sm:gap-5"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.03] text-white sm:h-[54px] sm:w-[54px]"
                >
                  <Image
                    src="/assets/location.svg"
                    alt="Location"
                    width={24}
                    height={24}
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                </motion.div>
                <p className="max-w-[320px] text-base leading-[1.6] text-white/80 sm:text-lg">
                  {isArabic
                    ? "المملكة العربية السعودية - الرياض - حي قرطبة - شارع الحسن بن حسين"
                    : "Saudi Arabia, Riyadh, Qurtubah District, Al-Hassan Ibn Hussein St."}
                </p>
              </motion.div>

              {/* Phone */}
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="flex items-center gap-4 sm:gap-5"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.03] text-white sm:h-[54px] sm:w-[54px]"
                >
                  <Image
                    src="/assets/phone.svg"
                    alt="Phone"
                    width={24}
                    height={24}
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                </motion.div>
                <p className="text-base text-white/80 sm:text-lg" dir="ltr">
                  +966 55 400 8202
                </p>
              </motion.div>

              {/* Email */}
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                className="flex items-center gap-4 sm:gap-5"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[14px] border border-white/10 bg-white/[0.03] text-white sm:h-[54px] sm:w-[54px]"
                >
                  <Image
                    src="/assets/email.svg"
                    alt="Email"
                    width={24}
                    height={24}
                    className="h-5 w-5 sm:h-6 sm:w-6"
                  />
                </motion.div>
                <p className="text-base text-white/80 sm:text-lg">
                  info@rowadalqimma.com
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Global Reach */}
          <motion.div variants={itemVariants} className="mt-16 sm:mt-20">
            <h3 className="text-3xl font-bold text-white sm:text-4xl md:text-[42px]">
              {isArabic ? "موقعنا" : "Our Location"}
            </h3>

            <div className="mt-6 sm:mt-8">
              <motion.div
                variants={itemVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <motion.div
                  variants={cardHoverVariants}
                  className="
        overflow-hidden
        rounded-[28px]
        border
        border-white/10
        bg-[#27354CB2]
        backdrop-blur-[4px]
        transition-shadow
        hover:shadow-lg
      "
                >
                  {/* Map */}
                  <div className="relative h-[120px] w-full">
                    <iframe
                      src="https://www.google.com/maps?q=Saudi+Arabia,+Riyadh,+Qurtubah+District,+Al-Hassan+Ibn+Hussein+St.&output=embed"
                      width="100%"
                      height="120"
                      loading="lazy"
                    ></iframe>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div variants={itemVariants} className="mt-16  sm:mt-20">
            <h3 className="mb-8 text-3xl font-bold text-white sm:text-4xl md:text-[42px]">
              {isArabic ? "روابط التواصل" : "Social Links"}
            </h3>

            <motion.div
              variants={cardHoverVariants}
              className="
rounded-[28px]
border
border-white/10
bg-[#27354CB2]
px-6
py-6
backdrop-blur-[4px]
transition-shadow
hover:shadow-lg
sm:px-7
sm:py-7
md:px-8
md:py-8
"
            >
              {/* Social Icons */}
              <div className="flex flex-wrap items-center justify-center gap-4">
                {/* Facebook */}
                <a
                  href="https://www.facebook.com/share/18aWrmRnDH/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      flex
      h-[62px]
      w-[62px]
      items-center
      justify-center
      rounded-2xl
      border
      border-white/10
      bg-white/[0.03]
      text-white
      transition
      duration-300
      hover:-translate-y-1
      hover:border-white/20
      hover:bg-white/[0.06]
    "
                >
                  <FaFacebookF size={22} />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/rowadalqimmaa?igsh=YjFkZjJvdTUwbm5s"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      flex
      h-[62px]
      w-[62px]
      items-center
      justify-center
      rounded-2xl
      border
      border-white/10
      bg-white/[0.03]
      text-white
      transition
      duration-300
      hover:-translate-y-1
      hover:border-white/20
      hover:bg-white/[0.06]
    "
                >
                  <FaInstagram size={22} />
                </a>

                {/* TikTok */}
                <a
                  href="https://www.tiktok.com/@rowadalqimma"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      flex
      h-[62px]
      w-[62px]
      items-center
      justify-center
      rounded-2xl
      border
      border-white/10
      bg-white/[0.03]
      text-white
      transition
      duration-300
      hover:-translate-y-1
      hover:border-white/20
      hover:bg-white/[0.06]
    "
                >
                  <FaTiktok size={22} />
                </a>

                {/* X */}
                <a
                  href="https://x.com/Rowadalqimmaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      flex
      h-[62px]
      w-[62px]
      items-center
      justify-center
      rounded-2xl
      border
      border-white/10
      bg-white/[0.03]
      text-white
      transition
      duration-300
      hover:-translate-y-1
      hover:border-white/20
      hover:bg-white/[0.06]
    "
                >
                  <FaXTwitter size={22} />
                </a>

                {/* Snapchat */}
                <a
                  href="https://www.snapchat.com/add/rowadrlqimmaa?share_id=IpvW_LbkMGQ&locale=en-US"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      flex
      h-[62px]
      w-[62px]
      items-center
      justify-center
      rounded-2xl
      border
      border-white/10
      bg-white/[0.03]
      text-white
      transition
      duration-300
      hover:-translate-y-1
      hover:border-white/20
      hover:bg-white/[0.06]
    "
                >
                  <FaSnapchat size={22} />
                </a>
                {/* Whatsapp */}
                <a
                  href="https://wa.me/+966553768622"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
      flex
      h-[62px]
      w-[62px]
      items-center
      justify-center
      rounded-2xl
      border
      border-white/10
      bg-white/[0.03]
      text-white
      transition
      duration-300
      hover:-translate-y-1
      hover:border-white/20
      hover:bg-white/[0.06]
    "
                >
                  <FaWhatsapp size={22} />
                </a>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* ── Popup ──────────────────────────────────────────────────────────── */}
      {showPopup && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.2 }}
          className={`fixed bottom-6 left-1/2 z-[9999] -translate-x-1/2 rounded-2xl border px-5 py-3 text-sm font-medium shadow-2xl backdrop-blur-xl sm:px-6 sm:py-4 ${
            submitStatus === "success"
              ? "border-green-400/20 bg-green-500/10 text-green-300"
              : "border-red-400/20 bg-red-500/10 text-red-300"
          }`}
        >
          {submitStatus === "success"
            ? isArabic
              ? "تم إرسال طلبك بنجاح ✨"
              : "Your inquiry has been submitted successfully ✨"
            : isArabic
              ? "حدث خطأ أثناء الإرسال"
              : "Something went wrong"}
        </motion.div>
      )}
    </section>
  );
}
