"use client";

import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaXTwitter,
  FaSnapchat,
  FaWhatsapp,
} from "react-icons/fa6";

import { motion, Variants } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { IconImage } from "@/components/ui/IconImage";
import { useLocale } from "@/hooks/useLocale";

// Animation variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.25, 0.1, 0.25, 1],
    },
  },
};

export function Footer() {
  const { isArabic, locale } = useLocale();

  return (
    <footer className="pt-8 sm:pt-10">
      <div className="rounded-[24px] border border-white/10 bg-[#14263D] px-4 py-8 sm:rounded-[32px] sm:px-8 sm:py-10 md:px-10 lg:px-14 lg:py-14">
        <Container>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="
              grid
              gap-8
              sm:grid-cols-2
              sm:gap-10
              lg:grid-cols-[1.3fr_1fr_1fr_1fr_0.8fr]
            "
          >
            {/* Brand */}
            <motion.div
              variants={itemVariants}
              className={isArabic ? "text-right" : ""}
            >
              <Link href="/" className="flex items-center gap-3">
                <IconImage name="logoAbout" width={42} height={42} />

                <span className="text-lg font-bold text-white sm:text-xl">
                  {isArabic ? "رواد القمة" : "Rowad Al Qimma"}
                </span>
              </Link>

              <p className="mt-4 max-w-[280px] text-sm leading-[1.8] text-white/55 sm:mt-5">
                {isArabic
                  ? "نبني الأسس القانونية لمستقبل التجارة والابتكار داخل المملكة العربية السعودية."
                  : "Building the legal foundations for the future of trade and innovation in Saudi Arabia."}
              </p>
            </motion.div>

            {/* Services */}
            <motion.div
              variants={itemVariants}
              className={isArabic ? "text-right" : ""}
            >
              <h3 className="text-base font-bold text-white sm:text-lg">
                {isArabic ? "الخدمات" : "Services"}
              </h3>

              <div className="mt-4 flex flex-col gap-3 sm:mt-5">
                <Link
                  href={`/${locale}/services/company-formation`}
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {isArabic ? "تأسيس الشركات" : "Company Formation"}
                </Link>

                <Link
                  href={`/${locale}/services/corporate-legal-advisory`}
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {isArabic
                    ? "الاستشارات القانونية للشركات"
                    : "Corporate Legal Advisory"}
                </Link>

                <Link
                  href={`/${locale}/services/marketing-strategic-consulting`}
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {isArabic
                    ? "الاستشارات التسويقية والاستراتيجية"
                    : "Marketing & Strategic Consulting"}
                </Link>

                <Link
                  href={`/${locale}/services/administrative-consulting`}
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {isArabic
                    ? "الاستشارات الإدارية للشركات"
                    : "Administrative Consulting for Companies"}
                </Link>
              </div>
            </motion.div>

            {/* Links */}
            <motion.div
              variants={itemVariants}
              className={isArabic ? "text-right" : ""}
            >
              <h3 className="text-base font-bold text-white sm:text-lg">
                {isArabic ? "روابط سريعة" : "Links"}
              </h3>

              <div className="mt-4 flex flex-col gap-3 sm:mt-5">
                <Link
                  href={`/${locale}/`}
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {isArabic ? "الرئيسية" : "Home"}
                </Link>

                <Link
                  href={`/${locale}/about`}
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {isArabic ? "من نحن" : "About Us"}
                </Link>

                <Link
                  href={`/${locale}/services`}
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {isArabic ? "الخدمات" : "Services"}
                </Link>

                <Link
                  href={`/${locale}/projects`}
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {isArabic ? "المشاريع" : "Projects"}
                </Link>

                <Link
                  href={`/${locale}/contact-us`}
                  className="text-sm text-white/55 transition hover:text-white"
                >
                  {isArabic ? "تواصل معنا" : "Contact"}
                </Link>
              </div>
            </motion.div>

            {/* Legal */}
            <motion.div
              variants={itemVariants}
              className={isArabic ? "text-right" : ""}
            >
              <h3 className="text-base font-bold text-white sm:text-lg">
                {isArabic ? "سياسات الموقع" : "Legal"}
              </h3>

              <div className="mt-4 flex flex-col gap-3 sm:mt-5">
                {[
                  {
                    en: "Privacy Policy",
                    ar: "سياسة الخصوصية",
                  },
                  {
                    en: "Terms of Service",
                    ar: "شروط الخدمة",
                  },
                ].map((item) => (
                  <a
                    key={item.en}
                    href="#"
                    className="text-sm text-white/55 transition hover:text-white"
                  >
                    {isArabic ? item.ar : item.en}
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Social */}
            <motion.div
              variants={itemVariants}
              className={isArabic ? "text-right" : ""}
            >
              <h3 className="text-base font-bold text-white sm:text-lg">
                {isArabic ? "وسائل التواصل" : "Social"}
              </h3>

              <div
                className={`mt-4 flex flex-wrap gap-3 sm:mt-5 ${
                  isArabic ? "justify-start sm:justify-start" : ""
                }`}
              >
                {[
                  {
                    href: "https://www.facebook.com/share/18aWrmRnDH/",
                    icon: <FaFacebookF size={16} />,
                  },
                  {
                    href: "https://www.instagram.com/rowadalqimmaa?igsh=YjFkZjJvdTUwbm5s",
                    icon: <FaInstagram size={16} />,
                  },
                  {
                    href: "https://www.tiktok.com/@rowadalqimma",
                    icon: <FaTiktok size={16} />,
                  },
                  {
                    href: "https://x.com/Rowadalqimmaa",
                    icon: <FaXTwitter size={16} />,
                  },
                  {
                    href: "https://www.snapchat.com/add/rowadrlqimmaa?share_id=IpvW_LbkMGQ&locale=en-US",
                    icon: <FaSnapchat size={16} />,
                  },
                  {
                    href: "https://wa.me/966554008202",
                    icon: <FaWhatsapp size={16} />,
                  },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      h-[44px]
                      w-[44px]
                      items-center
                      justify-center
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      text-white
                      transition
                      duration-300
                      hover:-translate-y-1
                      hover:border-white/20
                      hover:bg-white/[0.06]
                      sm:h-[46px]
                      sm:w-[46px]
                    "
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Bottom */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
              mt-10
              border-t
              border-white/10
              pt-5
              text-center
              sm:mt-12
              sm:pt-6
            "
          >
            <p className="text-xs font-semibold text-white/70 sm:text-sm">
              {isArabic
                ? "© 2026 شركة رواد القمة. جميع الحقوق محفوظة."
                : "© 2026 Rowad Al Qimma. All rights reserved."}
            </p>
          </motion.div>
        </Container>
      </div>
    </footer>
  );
}

