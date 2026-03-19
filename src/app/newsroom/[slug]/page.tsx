import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ShareButtons from "./ShareButtons";
import { createServerApiClient } from "ui/lib/api-client";
import { sanitizeHtml } from "ui/lib/utils";
import ArrowRight from "../arrow-right";

const CMS_BASE = "https://console.eleveight.ai";

interface MainImage {
  url: string;
  alternativeText: string | null;
  formats?: {
    large?: { url: string };
    medium?: { url: string };
    small?: { url: string };
  };
}

interface ArticleData {
  id: number;
  title: string;
  description: string;
  slug: string;
  content: string;
  publish_date: string;
  main_image?: MainImage;
}

interface ArticleListItem {
  id: number;
  title: string;
  slug: string;
  description: string;
  main_image?: MainImage;
}

interface ApiResponse {
  data: ArticleData;
}

interface ListApiResponse {
  data: ArticleListItem[];
}

async function getArticle(slug: string): Promise<ArticleData | null> {
  try {
    const serverApi = createServerApiClient({ revalidate: 60 });
    const data = await serverApi.get<ApiResponse>(`/articles/slug/${slug}?populate=*`);
    console.log(data.data);
    return data.data;
  } catch {
    return null;
  }
}

async function getLatestArticles(excludeSlug: string): Promise<ArticleListItem[]> {
  try {
    const serverApi = createServerApiClient({ revalidate: 60 });
    const data = await serverApi.get<ListApiResponse>(`/articles?populate=*`);
    return data.data.filter((a) => a.slug !== excludeSlug).slice(0, 3);
  } catch {
    return [];
  }
}

function getImageUrl(image?: MainImage): string | null {
  if (!image) return null;
  const path =
    image.formats?.large?.url ??
    image.formats?.medium?.url ??
    image.formats?.small?.url ??
    image.url;
  if (!path) return null;
  return path.startsWith("http") ? path : `${CMS_BASE}${path}`;
}

function formatDate(dateStr: string): string {
  const d = new Date(dateStr);
  const month = String(d.getMonth() + 1).padStart(2, "0");
  const year = d.getFullYear();
  return `${month}/${year}`;
}

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const [article, latest] = await Promise.all([
    getArticle(slug),
    getLatestArticles(slug),
  ]);

  if (!article) notFound();

  const cleanHtml = sanitizeHtml(article.content);
  const imgUrl = getImageUrl(article.main_image);

  return (
    <div className="mx-auto px-4 py-12">
      {/* Title */}
      <h1 className="text-[28px]/[36px] sm:text-[32px]/[42px] font-bold text-foreground mb-8">
        {article.title}
      </h1>

      {/* Meta + intro row */}
      <div className="grid grid-cols-[auto_1fr] gap-8 mb-8">
        {/* Left: published date + location */}
        <div className="flex flex-col gap-1 text-foreground text-[12px]/[18px] min-w-[100px]">
          <span className="text-foreground/60 text-[11px] uppercase tracking-wide">Published</span>
          <span>{formatDate(article.publish_date)}</span>
          <span>{article.description}</span>
        </div>
      </div>

      {/* Share */}
      <div className="flex justify-end mb-6">
        <ShareButtons title={article.title} description={article.description} />
      </div>

      {/* Featured image */}
      {imgUrl && (
        <div className="relative w-full max-h-[500px] aspect-[16/9] rounded-2xl overflow-hidden mb-10">
          <Image
            src={imgUrl}
            alt={article.main_image?.alternativeText ?? article.title}
            fill
            className="object-cover"
            unoptimized
          />
        </div>
      )}

      {/* Article content */}
      <div
        className="ml-[30%] mr-12 text-foreground text-[14px]/[24px] [&_p]:mb-4 [&_h1]:text-2xl [&_h1]:font-bold [&_h1]:mb-3 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:mb-3 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:mb-2 [&_ul]:list-disc [&_ul]:ml-6 [&_ul]:mb-4 [&_li]:mb-1 [&_strong]:font-semibold"
        dangerouslySetInnerHTML={{ __html: cleanHtml }}
      />

      {/* Latest articles */}
      {latest.length > 0 && (
        <div className="mt-8 pt-14 bg-secondary rounded-2xl px-4 pb-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-[22px]/[30px] font-bold text-foreground">Latest articles</h2>
            <Link
              href="/newsroom"
              className="text-[13px] text-foreground hover:text-foreground/70"
            >
              View all articles
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {latest.map((item) => {
              const thumbUrl = getImageUrl(item.main_image);
              return (
                <div key={item.id} className="flex flex-col gap-2">
                  <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-foreground/10">
                    {thumbUrl ? (
                      <Image
                        src={thumbUrl}
                        alt={item.title}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    ) : (
                      <div className="w-full h-full bg-foreground/10" />
                    )}
                  </div>
                  <h3 className="text-[13px]/[19px] font-bold text-foreground line-clamp-2">
                    {item.title}
                  </h3>
                  <p className="text-[11px]/[16px] text-foreground/40">{item.description}</p>
                  <Link
                    href={`/newsroom/${item.slug}`}
                    className="flex items-center gap-2 text-[12px]/[18px] text-foreground hover:opacity-60 transition-opacity w-fit"
                  >
                    Read More
                    <ArrowRight />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
