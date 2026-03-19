"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowRight from "./arrow-right";

const CMS_BASE = "https://console.eleveight.ai";
const PAGE_SIZE = 6;

interface Article {
  id: number;
  title: string;
  slug: string;
  description: string;
  main_image?: {
    formats?: {
      medium?: { url: string };
      large?: { url: string };
      small?: { url: string };
    };
    url?: string;
  };
}

export function ArticleGrid({ articles }: { articles: Article[] }) {
  const [page, setPage] = useState(1);

  const pageCount = Math.ceil(articles.length / PAGE_SIZE);
  const paged = articles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  function getImageUrl(article: Article) {
    const fmt = article.main_image?.formats;
    const path = fmt?.medium?.url ?? fmt?.large?.url ?? fmt?.small?.url ?? article.main_image?.url;
    if (!path) return null;
    return path.startsWith("http") ? path : `${CMS_BASE}${path}`;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-[28px]/[36px] sm:text-[32px]/[42px] font-bold text-foreground mb-3">
          Latest articles
        </h1>
        <p className="text-foreground/60 text-[15px]/[24px] max-w-xl mx-auto">
          Stay updated with the latest developments, announcements, and insights from Eleveight AI.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
        {paged.map((article) => {
          const imgUrl = getImageUrl(article);
          return (
            <div key={article.id} className="flex flex-col gap-3">
              {/* Image */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-foreground/10">
                {imgUrl ? (
                  <Image
                    src={imgUrl}
                    alt={article.title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                ) : (
                  <div className="w-full h-full bg-foreground/10" />
                )}
              </div>

              {/* Meta */}
              <div className="flex flex-col gap-1">
                <h2 className="text-[15px]/[22px] font-bold text-foreground line-clamp-2">
                  {article.title}
                </h2>
                <p className="text-[12px]/[18px] text-foreground/50">
                  {article.description}
                </p>
                <Link
                  href={`/newsroom/${article.slug}`}
                  className="flex items-center gap-2 text-[13px]/[20px] text-foreground mt-1 hover:opacity-70 transition-opacity w-fit"
                >
                  Read More
                  
                  <ArrowRight />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {pageCount > 1 && (
        <div className="flex items-center justify-center gap-1">
          {Array.from({ length: pageCount }, (_, i) => i + 1).map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={`w-8 h-8 rounded-md text-[13px] font-medium transition-colors ${
                p === page
                  ? "bg-foreground text-white"
                  : "text-foreground hover:bg-foreground/10"
              }`}
            >
              {p}
            </button>
          ))}
          {page < pageCount && (
            <button
              onClick={() => setPage(page + 1)}
              className="flex items-center gap-1 px-3 h-8 rounded-md text-[13px] font-medium text-foreground hover:bg-foreground/10 transition-colors"
            >
              Next
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <polyline points="4,2 10,7 4,12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          )}
        </div>
      )}
    </div>
  );
}
