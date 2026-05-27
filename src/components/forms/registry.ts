import { FC } from "react";

import { ContactForm } from "@/components/forms/ContactForm/ContactForm";

export const FORM_REGISTRY: Record<string | number, FC> = {
  "contact-form": ContactForm,
};
