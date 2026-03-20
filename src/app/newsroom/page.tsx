import { createServerApiClient } from "ui/lib/api-client";
import { ArticleGrid } from "./article-grid";

export default async function Newsroom() {

  const serverApi = createServerApiClient({ revalidate: 60 });
  const data = await serverApi.get<any>(`/api/articles?populate=*`);

  return <ArticleGrid articles={data.data} />;
}
