import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

import { RichText } from "@/components/RichText";
import { FORM_REGISTRY } from "@/components/forms/registry";
import { NotFound } from "@/components/forms/NotFound";

/**
 * Props for `ContactForm`.
 */
export type ContactFormProps = SliceComponentProps<Content.ContactFormSlice>;

/**
 * Component for "ContactForm" Slices.
 */
const ContactForm: FC<ContactFormProps> = ({ slice }) => {
  const formId = slice.primary.form_id;
  const FormComponent = formId ? FORM_REGISTRY[formId] : undefined;

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="w-full bg-gradient-to-b from-black via-[#1a0a2e] to-black py-16 md:py-24 px-6"
    >
      <div className="mx-auto max-w-480">
        <div className="rounded-4xl bg-gradient-to-br from-cyan-400 via-purple-500 to-fuchsia-500 p-[2px]">
          <div
            className="rounded-4xl bg-(--brand-bg-dark) bg-cover bg-center p-8 md:p-12"
            style={{ backgroundImage: "url('/contact-form-bg.webp')" }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-16 items-start">
              <div className="flex flex-col gap-20">
                <div className="flex flex-col">
                  {isFilled.richText(slice.primary.title) && (
                    <RichText field={slice.primary.title} />
                  )}
                  {isFilled.richText(slice.primary.text) && (
                    <RichText field={slice.primary.text} additionalClassNames="text-[20px] font-semibold" />
                  )}
                </div>

                {(isFilled.keyText(slice.primary.trust_label) ||
                  slice.primary.companies.length > 0) && (
                    <div className="flex flex-col gap-6">
                      {isFilled.keyText(slice.primary.trust_label) && (
                        <p className="text-[20px] text-white font-semibold tracking-wide">
                          {slice.primary.trust_label}
                        </p>
                      )}
                      {slice.primary.companies.length > 0 && (
                        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
                          {slice.primary.companies.map(
                            (company, i) =>
                              isFilled.image(company.logo) && (
                                <PrismicNextImage
                                  key={i}
                                  field={company.logo}
                                  className="h-8 w-auto object-contain"
                                />
                              ),
                          )}
                        </div>
                      )}
                    </div>
                  )}
              </div>

              <div className="rounded-3xl bg-white p-6 md:p-8">
                {FormComponent ? (
                  <FormComponent />
                ) : (
                  <NotFound formId={formId} />
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
