"use client";

import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { motion } from "framer-motion";
import type { ArticleSummary } from "@/lib/seodashboard";
import { formatArticleDate } from "@/lib/seodashboard";

type Props = {
  article: ArticleSummary;
  locale: string;
};

export function ArticleCard({ article, locale }: Props) {
  return (
    <motion.div whileHover={{ y: -8 }} transition={{ duration: 0.3 }} className="h-full">
      <Link
        href={{ pathname: "/articles/[slug]", params: { slug: article.slug } }}
        locale={locale}
        className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-white/10 bg-[#27354CB2] transition-colors duration-300 hover:border-accent hover:bg-[#2A3D5B]"
      >
        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#1b2c46]">
          {article.coverImageUrl ? (
            <Image
              src={article.coverImageUrl}
              alt={article.coverImageAlt || article.title}
              fill
              sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="h-full w-full bg-gradient-to-br from-[#233a5c] via-[#3a5488] to-[#8fa8ff]" />
          )}
        </div>

        <div className="flex flex-1 flex-col gap-3 px-6 py-6">
          <h3 className="line-clamp-2 text-[17px] font-bold leading-[1.4] text-white">
            {article.title}
          </h3>

          {article.excerpt && (
            <p className="line-clamp-2 text-[14px] leading-[1.7] text-white/60">
              {article.excerpt}
            </p>
          )}

          <div className="mt-auto flex items-center border-t border-white/10 pt-4 text-[12.5px] text-white/45">
            <span>{formatArticleDate(article.date, locale)}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
