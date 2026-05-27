import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

import { RichText } from "@/components/RichText";

/**
 * Props for `Products`.
 */
export type ProductsProps = SliceComponentProps<Content.ProductsSlice>;

/**
 * Component for "Products" Slices.
 */
const Products: FC<ProductsProps> = ({ slice }) => {
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

        {slice.primary.products.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
            {slice.primary.products.map((product, i) => {
              const color = product.color ?? "#7c2ae8";

              return (
                <div
                  key={i}
                  className="flex flex-col gap-4 rounded-3xl p-8 md:p-10 border-2"
                  style={{
                    borderColor: color,
                    background: `linear-gradient(to bottom right, ${color}, transparent)`,
                  }}
                >
                  {isFilled.image(product.image) && (
                    <div className="flex justify-center mb-2">
                      <PrismicNextImage
                        field={product.image}
                        className="h-20 w-auto object-contain"
                      />
                    </div>
                  )}

                  {isFilled.richText(product.title) && (
                    <RichText field={product.title} />
                  )}

                  {isFilled.richText(product.text) && (
                    <div className="flex-1">
                      <RichText field={product.text} />
                    </div>
                  )}

                  {isFilled.link(product.button) && (
                    <PrismicNextLink
                      field={product.button}
                      className="flex items-center justify-between w-full bg-white text-(--brand-text) rounded-full pl-6 pr-2 py-2 font-medium"
                    >
                      <span className="text-black">{product.button.text}</span>
                      <span
                        className="flex items-center justify-center w-8 h-8 rounded-full text-white"
                        style={{ backgroundColor: color }}
                        aria-hidden="true"
                      >
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="5" y1="12" x2="19" y2="12" />
                          <polyline points="12 5 19 12 12 19" />
                        </svg>
                      </span>
                    </PrismicNextLink>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Products;
