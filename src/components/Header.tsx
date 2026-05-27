import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";

import { createClient } from "@/prismicio";

export async function Header() {
    const client = createClient();
    const header = await client.getSingle("header");

    return (
        <h1>Header</h1>
    );
}
