"use client";

import { Link } from "@/i18n/navigation";
import { motion, type Variants } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa6";
import { useLocale } from "@/hooks/useLocale";
import { formatArticleDate } from "@/lib/seodashboard";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

type Props = {
  title: string;
  date: string | null;
  readingMinutes: number;
};

export function ArticleHero({ title, date, readingMinutes }: Props) {
  const { locale, isArabic } = useLocale();

  return (
    <section className="relative overflow-hidden bg-[#14263D] pb-14 pt-8 sm:pt-10">
      <div className="absolute bottom-[-620px] left-1/2 h-[1300px] w-[1600px] -translate-x-1/2 rounded-full border-t-[120px] border-[#B4C5FF] blur-[80px]" />

      <div className="relative z-10 mx-auto max-w-[1152px] px-4 sm:px-6 lg:px-0">
        <motion.div initial={false} animate="visible" variants={containerVariants}>
          <motion.div variants={itemVariants}>
            <Link
              href="/articles"
              className={`group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-5 py-3 text-white/75 backdrop-blur-xl transition-all duration-300 hover:border-white/20 hover:bg-white/10 hover:text-white ${
                isArabic ? "flex-row-reverse" : ""
              }`}
            >
              <FaArrowLeft
                className={`transition-transform duration-300 ${
                  isArabic ? "rotate-180 group-hover:translate-x-1" : "group-hover:-translate-x-1"
                }`}
              />
              <span className="text-sm font-medium sm:text-base">
                {isArabic ? "العودة للمقالات" : "Back to Articles"}
              </span>
            </Link>
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="mt-8 max-w-[820px] text-[30px] font-bold leading-[1.2] text-white sm:text-[42px] md:text-[48px]"
          >
            {title}
          </motion.h1>

          <motion.div
            variants={itemVariants}
            className="mt-5 flex items-center gap-5 text-sm text-white/55"
          >
            {date && <span>{formatArticleDate(date, locale)}</span>}
            <span>{isArabic ? `${readingMinutes} دقائق قراءة` : `${readingMinutes} min read`}</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
