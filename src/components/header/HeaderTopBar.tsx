import { PrismicNextLink } from "@prismicio/next";
import type { Content } from "@prismicio/client";

type Props = {
  topLinks: Content.HeaderDocumentData["top_links"];
};

export function HeaderTopBar({ topLinks }: Props) {
  return (
    <div className="w-full" style={{ background: "var(--gradient-top)" }}>
      <div className="mx-auto max-w-480 px-10 py-2 flex justify-end items-center gap-3">
        {topLinks.map((link, i) => (
          <div key={i} className="flex items-center gap-3">
            {i > 0 && (
              <span className="text-white/40" aria-hidden="true">
                |
              </span>
            )}
            <PrismicNextLink
              field={link}
              className="text-white text-sm rounded-full px-2 py-0.5 hover:border hover:border-white transition-colors"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
