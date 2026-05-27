import Link from "next/link";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

import { createClient } from "@/prismicio";
import { Button } from "@/components/Button";

function ChevronDown({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  );
}

export async function Header() {
  const client = createClient();
  const header = await client.getSingle("header");

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className="w-full"
        style={{ background: "var(--gradient-top)" }}
      >
        <div className="mx-auto max-w-480 px-6 py-2 flex justify-end items-center gap-3">
          {header.data.top_links.map((link, i) => (
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

      <div className="w-full bg-white shadow-sm">
        <div className="mx-auto max-w-480 px-8 py-6 flex items-center justify-between gap-6">
          <div className="flex items-center gap-16">
            <Link href="/" className="flex-shrink-0">
              <PrismicNextImage
                field={header.data.logo}
                className="h-8 w-auto"
              />
            </Link>

            <nav className="hidden md:flex items-center gap-6">
              {header.data.navigation_links.map((item, i) => (
                <button
                  key={i}
                  type="button"
                  className="flex items-center gap-1 text-(--brand-text) hover:text-(--brand-primary) transition-colors"
                >
                  {item.label}
                  <ChevronDown />
                </button>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-[#EFEFEF] rounded-lg px-4 py-3">
              <SearchIcon className="text-gray-500" />
              <input
                type="text"
                placeholder="Search"
                className="bg-transparent outline-none text-md text-[#26262c] placeholder:text-[#26262c] w-24"
              />
            </div>

            <button
              type="button"
              className="flex items-center gap-2 text-(--brand-text) font-medium"
            >
              <span aria-hidden="true">🇬🇧</span>
              <span>EN</span>
              <ChevronDown />
            </button>

            {header.data.ctas.map((cta, i) => (
              <Button key={i} field={cta} />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
