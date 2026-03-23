import { createServerApiClient } from "ui/lib/api-client";

const serverApi = createServerApiClient({ revalidate: 60 });


export async function getArticles() {
    const articles = await serverApi.get<any>(`/api/articles?fields=slug`);
    return articles.data;
  }
  
export async function getFAQs() {
    const articles = await serverApi.get<any>(`/api/faqs?fields=slug`);
    return articles.data;
}