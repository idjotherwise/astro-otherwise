import rss, { pagesGlobToRssItems } from "@astrojs/rss";

export async function GET(context: { site: any }) {
  return rss({
    title: "Not a Blogger | Blog",
    description: "Some random posts",
    site: context.site,
    items: await pagesGlobToRssItems(import.meta.glob("./**/*.md")),
    customData: `<language>en-us</language>`,
  });
}
