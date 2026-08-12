import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ArticlesHero } from "@/components/sections/ArticlesHero";
import { ArticleCard } from "@/components/sections/ArticleCard";
import { ArticlePagination } from "@/components/sections/ArticlePagination";
import { getArticles } from "@/lib/seodashboard";
import type { Metadata } from "next";

const PAGE_SIZE = 9;

export const metadata: Metadata = {
  title: "Articles",
};

type PageProps = {
  params: { locale: string };
  searchParams: { page?: string };
};

export default async function ArticlesPage({ params, searchParams }: PageProps) {
  const { locale } = params;
  const isArabic = locale === "ar";
  const currentPage = Math.max(1, Number(searchParams.page) || 1);

  let items: Awaited<ReturnType<typeof getArticles>>["items"] = [];
  let totalCount = 0;
  let hasError = false;

  try {
    const result = await getArticles({ locale, page: currentPage, pageSize: PAGE_SIZE });
    items = result.items;
    totalCount = result.totalCount;
  } catch (error) {
    console.error("Failed to load articles from seodashboard:", error);
    hasError = true;
  }

  const totalPages = Math.max(1, Math.ceil(totalCount / PAGE_SIZE));

  return (
    <>
      <ArticlesHero />

      <section className="px-4 py-10 sm:px-6 md:px-16 md:py-14">
        <div className="mx-auto max-w-[1152px]">
          {hasError ? (
            <p className="rounded-[22px] border border-white/10 bg-[#27354CB2] px-6 py-10 text-center text-white/60">
              {isArabic
                ? "تعذّر تحميل المقالات حاليًا، حاول مرة أخرى لاحقًا."
                : "We couldn't load articles right now. Please try again later."}
            </p>
          ) : items.length === 0 ? (
            <p className="rounded-[22px] border border-white/10 bg-[#27354CB2] px-6 py-10 text-center text-white/60">
              {isArabic ? "لا توجد مقالات بعد." : "No articles yet."}
            </p>
          ) : (
            <>
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {items.map((article) => (
                  <ArticleCard key={article.id} article={article} locale={locale} />
                ))}
              </div>

              <div className="mt-10">
                <ArticlePagination
                  locale={locale}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  isArabic={isArabic}
                />
              </div>
            </>
          )}
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
