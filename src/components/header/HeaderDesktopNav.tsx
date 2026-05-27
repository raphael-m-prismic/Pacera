import type { Content } from "@prismicio/client";

import { Button } from "@/components/Button";
import { SearchInput } from "./SearchInput";
import { LanguageDropdown } from "./LanguageDropdown";

type Props = {
  navigationLinks: Content.HeaderDocumentData["navigation_links"];
  ctas: Content.HeaderDocumentData["ctas"];
};

export function HeaderDesktopNav({ navigationLinks, ctas }: Props) {
  return (
    <div className="hidden xl:flex flex-1 items-center justify-between ml-16 gap-6">
      <nav className="flex items-center gap-6">
        {navigationLinks.map((item, i) => (
          <button
            key={i}
            type="button"
            className="flex items-center gap-1 text-[#26262c] hover:text-(--brand-primary) transition-colors"
          >
            {item.label}
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        ))}
      </nav>

      <div className="flex items-center gap-4">
        <div className="w-48">
          <SearchInput />
        </div>
        <LanguageDropdown />
        {ctas.map((cta, i) => (
          <Button key={i} field={cta} />
        ))}
      </div>
    </div>
  );
}
