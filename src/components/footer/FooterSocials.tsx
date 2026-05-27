import { PrismicNextLink } from "@prismicio/next";
import { isFilled } from "@prismicio/client";
import type { Content } from "@prismicio/client";

import { SocialIcon } from "./SocialIcon";

type Props = {
  socials: Content.FooterDocumentData["socials"];
  className?: string;
};

export function FooterSocials({ socials, className = "" }: Props) {
  if (socials.length === 0) return null;

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      {socials.map((social, i) => {
        if (!isFilled.link(social.link) || !social.platform) return null;
        return (
          <PrismicNextLink
            key={i}
            field={social.link}
            aria-label={social.platform}
            className="text-white hover:text-(--brand-primary) transition-colors"
          >
            <SocialIcon platform={social.platform} />
          </PrismicNextLink>
        );
      })}
    </div>
  );
}
