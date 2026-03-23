import { createServerApiClient } from "ui/lib/api-client";

export const dynamic = "force-static";

async function getArticles() {
  const serverApi = createServerApiClient({ revalidate: 60 });
  const articles = await serverApi.get<any>(`/api/articles?fields=slug`);
  return articles.data;
}

async function getFAQs() {
    const serverApi = createServerApiClient({ revalidate: 60 });
    const articles = await serverApi.get<any>(`/api/faqs?fields=slug`);
    return articles.data;
  }


export default async function Sitemap() {
    const articles = await getArticles();
    const faqs = await getFAQs();

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    
    const articleUrls = articles.map((article: any) => {
        return {
            url: `${baseUrl}/newsroom/${article.slug}`,
            lastModified: new Date(),
        }
    });

    const faqUrls = faqs.map((faq: any) => {
        return {
            url: `${baseUrl}/faqs/${faq.slug}`,
            lastModified: new Date(),
        }
    });

    return [...articleUrls, ...faqUrls];
}