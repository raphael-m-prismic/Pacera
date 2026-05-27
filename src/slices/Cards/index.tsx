import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import { RichText } from "@/components/RichText";

/**
 * Props for `Cards`.
 */
export type CardsProps = SliceComponentProps<Content.CardsSlice>;

/**
 * Component for "Cards" Slices.
 */
const Cards: FC<CardsProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-gradient-to-b from-black via-[#1a0a2e] to-black py-24 px-12"
    >
      <div className="mx-auto max-w-480">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-12 md:mb-16">
          {isFilled.richText(slice.primary.title) && (
            <RichText field={slice.primary.title} />
          )}
          {isFilled.richText(slice.primary.text) && (
            <RichText field={slice.primary.text} additionalClassNames="font-semibold" />
          )}
        </div>

        {slice.primary.cards.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {slice.primary.cards.map((card, i) => (
              <div
                key={i}
                className="flex flex-col bg-white rounded-xl p-8 md:p-10"
              >
                {isFilled.richText(card.title) && (
                  <RichText
                    field={card.title}
                    additionalClassNames="!text-(--brand-primary)"
                  />
                )}
                {isFilled.richText(card.text) && (
                  <RichText
                    field={card.text}
                    additionalClassNames="!text-gray-700"
                  />
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Cards;
