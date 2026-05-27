"use client";

import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { isFilled } from "@prismicio/client";
import type { Content } from "@prismicio/client";

import { FooterSocials } from "./FooterSocials";

type Props = { data: Content.FooterDocumentData };

export function FooterMobile({ data }: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="lg:hidden flex flex-col gap-8">
      {isFilled.image(data.logo) && (
        <Link href="/">
          <PrismicNextImage
            field={data.logo}
            className="h-10 w-auto object-contain"
          />
        </Link>
      )}

      <div className="flex flex-col divide-y divide-white/15">
        {data.columns.map((column, i) => {
          const isOpen = openIndex === i;
          return (
            <div key={i}>
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="text-sm font-semibold uppercase tracking-wide text-white">
                  {column.title}
                </span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={clsx(
                    "text-white transition-transform",
                    isOpen && "rotate-180",
                  )}
                  aria-hidden="true"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>
              <div
                className={clsx(
                  "overflow-hidden transition-all duration-300",
                  isOpen ? "max-h-96 pb-5" : "max-h-0",
                )}
              >
                <ul className="flex flex-col gap-3">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <PrismicNextLink
                        field={link}
                        className="text-sm text-white/80 hover:text-white transition-colors"
                      />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      {(data.careers_title ||
        data.careers_text ||
        isFilled.link(data.careers_link)) && (
        <div className="flex flex-col gap-3">
          {data.careers_title && (
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              {data.careers_title}
            </h3>
          )}
          {data.careers_text && (
            <p className="text-sm text-white/80">{data.careers_text}</p>
          )}
          {isFilled.link(data.careers_link) && (
            <PrismicNextLink
              field={data.careers_link}
              className="inline-flex items-center gap-2 text-sm font-medium text-white"
            >
              <span>{data.careers_link.text || "See open roles"}</span>
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
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </PrismicNextLink>
          )}
        </div>
      )}

      <FooterSocials socials={data.socials} />
    </div>
  );
}
