"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { PrismicNextImage } from "@prismicio/next";
import type { Content } from "@prismicio/client";

import { Button } from "@/components/Button";
import { SearchInput } from "./SearchInput";
import { LanguageDropdown } from "./LanguageDropdown";

type Props = {
  navigationLinks: Content.HeaderDocumentData["navigation_links"];
  ctas: Content.HeaderDocumentData["ctas"];
  logo: Content.HeaderDocumentData["logo"];
};

export function HeaderMobileMenu({ navigationLinks, ctas, logo }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  const primaryCta =
    ctas.find((c) => c.variant === "Primary") ?? ctas[0] ?? null;

  return (
    <>
      <button
        type="button"
        aria-label="Open menu"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(true)}
        className="xl:hidden p-2 text-[#26262c] cursor-pointer"
      >
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      </button>

      <div
        role="dialog"
        aria-modal="true"
        aria-hidden={!isOpen}
        className={clsx(
          "xl:hidden fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "-translate-x-full pointer-events-none",
        )}
      >
        <div className="flex flex-col h-full w-full px-[5%] py-[5%] gap-6 overflow-y-auto">
          <div className="flex items-center justify-between">
            <Link href="/" onClick={() => setIsOpen(false)}>
              <PrismicNextImage field={logo} className="h-8 w-auto" />
            </Link>
            <div className="flex items-center gap-4">
              <LanguageDropdown />
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setIsOpen(false)}
                className="p-2 text-[#26262c] cursor-pointer"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
          </div>

          <div className="border-t border-gray-200" />

          <SearchInput />

          <nav className="flex flex-col gap-3">
            {navigationLinks.map((item, i) => (
              <button
                key={i}
                type="button"
                className="flex items-center justify-between w-full bg-gray-100 rounded-lg px-4 py-3 text-[#26262c] font-medium"
              >
                <span>{item.label}</span>
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

          <div className="mt-auto pt-4">
            {primaryCta && (
              <Button field={primaryCta} className="w-full" />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
