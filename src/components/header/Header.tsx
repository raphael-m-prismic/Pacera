import Link from "next/link";
import { PrismicNextImage } from "@prismicio/next";

import { createClient } from "@/prismicio";
import { HeaderTopBar } from "./HeaderTopBar";
import { HeaderDesktopNav } from "./HeaderDesktopNav";
import { HeaderMobileMenu } from "./HeaderMobileMenu";

export async function Header() {
  const client = createClient();
  const header = await client.getSingle("header");

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <HeaderTopBar topLinks={header.data.top_links} />

      <div className="w-full bg-white shadow-sm">
        <div className="mx-auto max-w-480 px-8 py-6 flex items-center justify-between gap-6">
          <Link href="/" className="flex-shrink-0">
            <PrismicNextImage field={header.data.logo} className="h-8 w-auto" />
          </Link>

          <HeaderDesktopNav
            navigationLinks={header.data.navigation_links}
            ctas={header.data.ctas}
          />

          <HeaderMobileMenu
            navigationLinks={header.data.navigation_links}
            ctas={header.data.ctas}
            logo={header.data.logo}
          />
        </div>
      </div>
    </header>
  );
}
