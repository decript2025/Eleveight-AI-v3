"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowRight from "./arrow-right";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "ui/components/ui/pagination";
import { useSearchParams } from "next/navigation";

const PAGE_SIZE = 2;

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
  const page = +(useSearchParams().get('page') || 1);

  const pageCount = Math.ceil(articles.length / PAGE_SIZE);
  const paged = articles.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

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
          return (
            <div key={article.id} className="flex flex-col gap-3">
              {/* Image */}
              <div className="relative w-full aspect-[16/10] rounded-xl overflow-hidden bg-foreground/10">
                <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_API_URL}${article.main_image?.url}`}
                    alt={article.title}
                    fill
                    className="object-cover"
                    priority
                  />
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
        <Pagination className="mt-12">
          <PaginationContent>
            {/* Previous Button */}
            {page > 1 && (
              <PaginationItem>
                <PaginationPrevious href={`/newsroom?page=${page - 1}`} />
              </PaginationItem>
            )}

            {/* Page Numbers */}
            {Array.from({ length: pageCount }, (_, i) => i + 1).map((pageNum) => {
              // Show first page, last page, current page, and pages around current
              const showPage = 
                pageNum === 1 || 
                pageNum === pageCount || 
                (pageNum >= page - 1 && pageNum <= page + 1);
              
              const showEllipsis = 
                (pageNum === 2 && page > 3) || 
                (pageNum === pageCount - 1 && page < pageCount - 2);

              if (showEllipsis) {
                return (
                  <PaginationItem key={pageNum}>
                    <PaginationEllipsis />
                  </PaginationItem>
                );
              }

              if (!showPage) return null;

              return (
                <PaginationItem key={pageNum}>
                  <PaginationLink 
                    href={`/newsroom?page=${pageNum}`}
                    isActive={pageNum === page}
                  >
                    {pageNum}
                  </PaginationLink>
                </PaginationItem>
              );
            })}

            {/* Next Button */}
            {page < pageCount && (
              <PaginationItem>
                <PaginationNext href={`/newsroom?page=${page + 1}`} />
              </PaginationItem>
            )}
          </PaginationContent>
        </Pagination>
      )}
    </div>
  );
}
