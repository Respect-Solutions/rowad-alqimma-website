import { Link } from "@/i18n/navigation";

type Props = {
  locale: string;
  currentPage: number;
  totalPages: number;
  isArabic: boolean;
};

export function ArticlePagination({ currentPage, totalPages, isArabic }: Props) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);
  const pageHref = (page: number) =>
    page > 1 ? { pathname: "/articles" as const, query: { page } } : "/articles";

  const arrow = (direction: "prev" | "next") => {
    const forward = direction === "next" ? !isArabic : isArabic;
    return forward ? "›" : "‹";
  };

  const arrowLinkClass = (disabled: boolean) =>
    `flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition ${
      disabled
        ? "pointer-events-none border-white/10 text-white/25"
        : "border-white/15 text-white/70 hover:border-accent hover:text-white"
    }`;

  return (
    <nav
      aria-label={isArabic ? "ترقيم الصفحات" : "Pagination"}
      className="flex items-center justify-center gap-2"
    >
      <Link
        href={pageHref(Math.max(1, currentPage - 1))}
        aria-disabled={currentPage === 1}
        className={arrowLinkClass(currentPage === 1)}
      >
        {arrow("prev")}
      </Link>

      {pages.map((page) => (
        <Link
          key={page}
          href={pageHref(page)}
          aria-current={page === currentPage ? "page" : undefined}
          className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold transition ${
            page === currentPage
              ? "border-accent bg-accent text-main"
              : "border-white/15 text-white/70 hover:border-accent hover:text-white"
          }`}
        >
          {page}
        </Link>
      ))}

      <Link
        href={pageHref(Math.min(totalPages, currentPage + 1))}
        aria-disabled={currentPage === totalPages}
        className={arrowLinkClass(currentPage === totalPages)}
      >
        {arrow("next")}
      </Link>
    </nav>
  );
}
