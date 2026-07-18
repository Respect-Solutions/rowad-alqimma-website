type StreamBlock = {
  type?: string;
  value?: unknown;
};

// The seodashboard `body` field can come back either as a raw HTML string
// (RichTextField) or as a list of StreamField blocks — this renders both.
// Adjust the block-type mapping below once the real StreamField schema is known.
export function ArticleBody({ body }: { body: unknown }) {
  if (!body) return null;

  if (typeof body === "string") {
    return <div className="article-body" dangerouslySetInnerHTML={{ __html: body }} />;
  }

  if (Array.isArray(body)) {
    return (
      <div className="article-body">
        {(body as StreamBlock[]).map((block, index) => (
          <StreamBlockView key={index} block={block} />
        ))}
      </div>
    );
  }

  return null;
}

function StreamBlockView({ block }: { block: StreamBlock }) {
  const { type, value } = block;

  switch (type) {
    case "heading":
    case "heading2":
      return <h2>{textValue(value)}</h2>;

    case "heading3":
      return <h3>{textValue(value)}</h3>;

    case "paragraph":
    case "richtext":
      return <div dangerouslySetInnerHTML={{ __html: textValue(value) }} />;

    case "quote":
    case "blockquote":
      return <blockquote>{textValue(value)}</blockquote>;

    case "image": {
      const url = imageUrlValue(value);
      if (!url) return null;
      const alt = typeof value === "object" && value && "alt" in value ? String((value as { alt?: unknown }).alt ?? "") : "";
      // eslint-disable-next-line @next/next/no-img-element
      return <img src={url} alt={alt} />;
    }

    default:
      // Unknown block types with a plain string/HTML value still render.
      if (typeof value === "string") {
        return <div dangerouslySetInnerHTML={{ __html: value }} />;
      }
      return null;
  }
}

function textValue(value: unknown): string {
  if (typeof value === "string") return value;
  if (typeof value === "object" && value && "text" in value) {
    return String((value as { text?: unknown }).text ?? "");
  }
  return "";
}

function imageUrlValue(value: unknown): string | null {
  if (typeof value !== "object" || !value) return null;
  const obj = value as Record<string, unknown>;
  const nestedImage = obj.image as Record<string, unknown> | undefined;
  const url = (obj.url as string | undefined) ?? (nestedImage?.url as string | undefined);
  return url ?? null;
}
