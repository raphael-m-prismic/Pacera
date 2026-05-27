import { createClient } from "@/prismicio";

import { FooterDesktop } from "./FooterDesktop";
import { FooterMobile } from "./FooterMobile";
import { FooterBottom } from "./FooterBottom";

export async function Footer() {
  const client = createClient();
  const footer = await client.getSingle("footer");

  return (
    <footer className="bg-[#2a0d4d] text-white">
      <div className="mx-auto max-w-480 px-6 md:px-12 py-12 md:py-16 flex flex-col gap-12">
        <FooterDesktop data={footer.data} />
        <FooterMobile data={footer.data} />
        <FooterBottom data={footer.data} />
      </div>
    </footer>
  );
}
