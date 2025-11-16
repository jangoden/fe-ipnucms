
import BlogList from "@/components/pages/BlogList";
import PageHeader from "@/components/layout/PageHeader";
import Pagination from "@/components/ui/Pagination";
import type { PostCardProps, NewsApiArticle } from "@/lib/types";
import { getNews } from "@/lib/newsApi";
import Link from "next/link";

const PAGE_SIZE = 9;
const CATEGORIES = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

function slugify(text: string) {
  if (!text) return "";
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/--+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, ""); // Trim - from end of text
}

export default async function ArtikelPage({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const page =
    typeof searchParams?.page === "string" ? Number(searchParams.page) : 1;
  const category =
    typeof searchParams?.category === "string"
      ? (searchParams.category as string)
      : "general";

  const { articles, totalResults } = await getNews(
    category,
    page,
    PAGE_SIZE
  );
  const totalPages = Math.ceil(totalResults / PAGE_SIZE);

  const transformedPosts: PostCardProps[] = articles.map(
    (article: NewsApiArticle) => ({
      slug: slugify(article.title),
      title: article.title,
      imageUrl: article.urlToImage || "/images/placeholder-template.png",
      date: article.publishedAt,
      excerpt: article.description || "",
      author: { name: article.author || "N/A" },
      tags: [article.source.name],
      content: article.content ?? undefined,
    })
  );

  return (
    <main className="relative isolate overflow-hidden bg-white">
      <PageHeader
        title="Wawasan & Inspirasi Terbaru"
        subtitle="Jelajahi artikel kami tentang desain, pengembangan, dan strategi digital."
      />
      <div className="mx-auto max-w-screen-xl px-6 lg:px-8 py-10 sm:py-14">
        <div className="flex justify-center mb-8">
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <Link
                key={cat}
                href={`/update/artikel?category=${cat}`}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === cat
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}>
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </Link>
            ))}
          </div>
        </div>
        <>
          <BlogList posts={transformedPosts} />
          <Pagination
            currentPage={page}
            totalPages={totalPages}
            basePath={`/update/artikel?category=${category}`}
          />
        </>
      </div>
    </main>
  );
}
