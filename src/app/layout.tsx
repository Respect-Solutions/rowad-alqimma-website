import "./globals.css";
import type { Metadata } from "next";
import Script from "next/script";

import { FaWhatsapp } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Rowad Al Qimma",
  description:
    "Building the legal foundations for the future of trade and innovation in Saudi Arabia.",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning>
      <body>
        {/* Google Tag Manager */}
        <Script id="gtm" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({
                'gtm.start': new Date().getTime(),
                event:'gtm.js'
              });
              var f=d.getElementsByTagName(s)[0],
                  j=d.createElement(s),
                  dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TG2QG7Q3');
          `}
        </Script>

        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TG2QG7Q3"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {children}

        {/* WhatsApp Floating Button */}
        <a
          href="https://wa.me/966553768622"
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
