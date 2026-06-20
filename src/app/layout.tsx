import "./globals.css";
import type { Metadata } from "next";

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
