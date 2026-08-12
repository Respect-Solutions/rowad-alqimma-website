import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { ArticleHero } from "@/components/sections/ArticleHero";
import { ArticleBody } from "@/components/sections/ArticleBody";
import { getArticleBySlug, getBodyReadingMinutes } from "@/lib/seodashboard";

type PageProps = {
  params: { locale: string; slug: string };
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  // params.slug arrives percent-encoded from Next.js; decode before passing so
  // getArticleBySlug doesn't double-encode non-ASCII (Arabic) slugs.
  const article = await getArticleBySlug(params.locale, decodeURIComponent(params.slug)).catch(() => null);

  if (!article) return {};

  return {
    title: article.title,
    description: article.metaDescription || article.excerpt || undefined,
  };
}

export default async function ArticleDetailPage({ params }: PageProps) {
  // Decode percent-encoded slug — see generateMetadata above for explanation.
  // No .catch() here: getArticleBySlug returns null for a real missing article
  // (genuine 404) and throws for network/API errors (should surface as 500,
  // not a silent fake-404 that hides real failures).
  const article = await getArticleBySlug(params.locale, decodeURIComponent(params.slug));

  if (!article) {
    notFound();
  }

  const readingMinutes = getBodyReadingMinutes(article.body ?? article.excerpt);

  return (
    <>
      <ArticleHero title={article.title} date={article.date} readingMinutes={readingMinutes} />

      {article.coverImageUrl && (
        <div className="mx-auto mb-4 max-w-[1152px] px-4 sm:px-6 lg:px-0">
          <div className="relative aspect-[21/9] w-full overflow-hidden rounded-[28px] border border-white/10 sm:rounded-[32px]">
            <Image
              src={article.coverImageUrl}
              alt={article.coverImageAlt || article.title}
              fill
              priority
              sizes="(min-width: 1152px) 1152px, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      )}

      <section className="px-4 py-10 sm:px-6 md:px-16">
        <div className="mx-auto max-w-[760px]">
          <ArticleBody body={article.body} />
        </div>
      </section>

      <CTASection />
      <Footer />
    </>
  );
}
