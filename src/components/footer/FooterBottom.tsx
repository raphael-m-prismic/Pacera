import { PrismicNextLink } from "@prismicio/next";
import type { Content } from "@prismicio/client";

type Props = { data: Content.FooterDocumentData };

export function FooterBottom({ data }: Props) {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-t border-white/15 pt-6 text-sm text-white/70">
      {data.bottom_links.length > 0 && (
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {data.bottom_links.map((link, i) => (
            <PrismicNextLink
              key={i}
              field={link}
              className="hover:text-white transition-colors"
            />
          ))}
        </div>
      )}
      {data.copyright && <p>{data.copyright}</p>}
    </div>
  );
}
