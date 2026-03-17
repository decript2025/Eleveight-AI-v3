import { ArticleGrid } from "./article-grid";

export default async function Newsroom() {
  const res = await fetch("https://console.eleveight.ai/api/articles?populate=*", {
    cache: "no-store",
  });
  const json = await res.json();

  return <ArticleGrid articles={json.data} />;
}
