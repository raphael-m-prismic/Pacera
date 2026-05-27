import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { RichText } from "@/components/RichText";
import { Button } from "@/components/Button";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  /**
   * Default (image right)
   */
  if (slice.variation === "default") {
    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="w-full py-24 px-12 box-border bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0), rgba(0,0,0,0.8)), url('/hero-bg.webp')"
        }}
      >
        <div className="mx-auto max-w-480 grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          <div className="flex flex-col items-start">
            {isFilled.keyText(slice.primary.eyebrow) && (
              <span className="inline-block bg-(--brand-primary) text-white rounded-full mb-6 px-6 py-3 text-[16px] font-medium">
                {slice.primary.eyebrow}
              </span>
            )}
            {isFilled.richText(slice.primary.title) && (
              <RichText field={slice.primary.title} />
            )}
            {isFilled.richText(slice.primary.text) && (
              <RichText
                field={slice.primary.text}
                additionalClassNames="!text-xl font-medium mb-12"
              />
            )}
            {slice.primary.ctas.length > 0 && (
              <div className="w-full md:w-fit flex flex-col md:flex-row gap-4">
                {slice.primary.ctas.map((cta, i) => (
                  <Button key={i} field={cta} className="w-full" />
                ))}
              </div>
            )}
          </div>

          {isFilled.image(slice.primary.image) && (
            <div className="w-full rounded-4xl bg-gradient-to-br from-cyan-400 via-purple-500 to-fuchsia-500 p-[8px]">
              <div className="w-full rounded-3xl overflow-hidden bg-(--brand-bg-dark)">
                <PrismicNextImage
                  field={slice.primary.image}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}
        </div>
      </section>
    );
  }

  /**
   * Image left
   */
  if (slice.variation === "imageLeft") {
    return (
      <section
        data-slice-type={slice.slice_type}
        data-slice-variation={slice.variation}
        className="w-full py-24 px-12 box-border bg-cover bg-center"
        style={{
          backgroundImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0), rgba(0,0,0,0.8)), url('/hero-bg.webp')"
        }}
      >
        <div className="mx-auto max-w-480 grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16 items-center">
          {isFilled.image(slice.primary.image) && (
            <div className="w-full rounded-4xl bg-gradient-to-br from-cyan-400 via-purple-500 to-fuchsia-500 p-[8px]">
              <div className="w-full rounded-3xl overflow-hidden bg-(--brand-bg-dark)">
                <PrismicNextImage
                  field={slice.primary.image}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          )}

          <div className="flex flex-col items-start">
            {isFilled.keyText(slice.primary.eyebrow) && (
              <span className="inline-block bg-(--brand-primary) text-white rounded-full mb-6 px-6 py-3 text-[16px] font-medium">
                {slice.primary.eyebrow}
              </span>
            )}
            {isFilled.richText(slice.primary.title) && (
              <RichText field={slice.primary.title} />
            )}
            {isFilled.richText(slice.primary.text) && (
              <RichText
                field={slice.primary.text}
                additionalClassNames="!text-xl font-medium mb-12"
              />
            )}
            {slice.primary.ctas.length > 0 && (
              <div className="w-full md:w-fit flex flex-col md:flex-row gap-4">
                {slice.primary.ctas.map((cta, i) => (
                  <Button key={i} field={cta} className="w-full" />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>
    );
  }
};

export default Hero;
