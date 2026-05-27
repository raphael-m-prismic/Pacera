import Link from "next/link";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { isFilled } from "@prismicio/client";
import type { Content } from "@prismicio/client";

import { FooterSocials } from "./FooterSocials";

type Props = { data: Content.FooterDocumentData };

export function FooterDesktop({ data }: Props) {
  return (
    // <div className="hidden lg:grid grid-cols-[auto_repeat(auto-fit,minmax(0,1fr))_1fr] gap-12 items-start">
    <div className="hidden lg:grid grid-flow-col auto-cols-fr gap-12 items-start">

      {isFilled.image(data.logo) && (
        <Link href="/" className="flex-shrink-0">
          <PrismicNextImage
            field={data.logo}
            className="h-10 w-auto object-contain"
          />
        </Link>
      )}

      {data.columns.map((column, i) => (
        <div key={i} className="flex flex-col gap-4">
          {column.title && (
            <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
              {column.title}
            </h3>
          )}
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
      ))}

      <div className="flex flex-col gap-8">
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
                  className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-(--brand-primary) transition-colors"
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
    </div>
  );
}
