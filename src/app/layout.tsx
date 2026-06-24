import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { getLocale } from "next-intl/server";
import { FaWhatsapp } from "react-icons/fa6";

const ibmPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-ibm-plex",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Rowad Al Qimma | رواد القمة",
    template: "%s | Rowad Al Qimma",
  },
  description:
    "Building the legal foundations for the future of trade and innovation in Saudi Arabia.",
  metadataBase: new URL("https://rowadalqimma.com"),
  openGraph: {
    type: "website",
    siteName: "Rowad Al Qimma",
    title: "Rowad Al Qimma | رواد القمة",
    description:
      "Building the legal foundations for the future of trade and innovation in Saudi Arabia.",
    url: "https://rowadalqimma.com",
    images: [
      {
        url: "/assets/home-hero-bg.jpg",
        width: 1200,
        height: 630,
        alt: "Rowad Al Qimma",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rowad Al Qimma | رواد القمة",
    description:
      "Building the legal foundations for the future of trade and innovation in Saudi Arabia.",
    images: ["/assets/home-hero-bg.jpg"],
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getLocale();
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      suppressHydrationWarning
      className={ibmPlex.variable}
    >
      <body>
        {children}

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/966553768622"
          aria-label="Chat on WhatsApp"
          target="_blank"
          rel="noopener noreferrer"
          className="
fixed
bottom-6
left-6
z-[999]
flex
h-[64px]
w-[64px]
animate-[whatsappFloat_3s_ease-in-out_infinite]
items-center
justify-center
rounded-2xl
border
border-white/10
bg-[#27354CB2]
text-white
shadow-2xl
backdrop-blur-xl
transition
duration-300
hover:scale-[1.08]
hover:border-white/20
hover:bg-[#31425D]
"
        >
          <FaWhatsapp size={30} />
        </a>
      </body>
    </html>
  );
}
