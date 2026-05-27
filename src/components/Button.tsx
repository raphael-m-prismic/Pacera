import clsx from "clsx";
import { PrismicNextLink } from "@prismicio/next";
import type { LinkField } from "@prismicio/client";

type Props = {
  field: LinkField;
  className?: string;
};

export function Button({ field, className }: Props) {
  if (!field) return null;

  const variant = field.variant === "Secondary" ? "secondary" : "primary";

  return (
    <PrismicNextLink
      field={field}
      className={clsx(
        "inline-flex items-center justify-center px-6 py-3 rounded-lg font-bold text-base transition-colors duration-200 whitespace-nowrap",
        variant === "primary" &&
        "bg-(--brand-primary) text-white hover:opacity-90",
        variant === "secondary" &&
        "bg-transparent text-(--brand-primary) border-2 border-(--brand-primary) hover:bg-(--brand-primary) hover:text-white",
        className,
      )}
    />
  );
}
