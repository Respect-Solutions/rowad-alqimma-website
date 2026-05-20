/**
 * JsonLd component for inserting structured data (JSON-LD) into the <head>.
 * This component is safe to use in Server Components.
 *
 * @see https://json-ld.org/
 *
 * @example
 * <JsonLd data={{
 *   "@context": "https://schema.org",
 *   "@type": "Organization",
 *   name: "Rowad Alqimma"
 * }} />
 */
interface JsonLdProps {
  /** A valid JSON-LD object. Must not be empty. */
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  // Validate that data is a non-empty object in development to catch issues early
  if (process.env.NODE_ENV === "development") {
    if (!data || typeof data !== "object" || Object.keys(data).length === 0) {
      console.warn(
        "[JsonLd] The `data` prop is empty or invalid. Structured data will not be rendered correctly. Please provide a valid JSON-LD object.",
      );
    }
  }

  // If data is empty or invalid at runtime (production safety), render nothing
  if (!data || Object.keys(data).length === 0) {
    return null;
  }

  // Serialize with formatting for better readability in source (optional, no SEO impact)
  const json = JSON.stringify(data, null, 2);

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: json,
      }}
    />
  );
}
