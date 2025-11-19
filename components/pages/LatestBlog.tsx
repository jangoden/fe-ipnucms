"use client";

import { useState, useEffect } from 'react';
import BlogList from "@/components/pages/BlogList";
import { getNews } from "@/lib/newsApi";
import type { PostCardProps, NewsApiArticle } from "@/lib/types";

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

export default function LatestBlog() {
    const [posts, setPosts] = useState<PostCardProps[]>([]);
    const [loading, setLoading] = useState(true); // Add loading state
    const [error, setError] = useState<string | null>(null); // Add error state

    useEffect(() => {
        async function fetchAndSetPosts() {
            try {
                setLoading(true);
                const { articles } = await getNews('general', 1, 3);

                if (!articles) {
                    throw new Error("Articles not found in API response");
                }

                const transformedPosts: PostCardProps[] = articles.map(
                    (article: NewsApiArticle) => {
                        if (!article.title || !article.source?.name) {
                            // Skip articles with missing essential data
                            return null;
                        }
                        return {
                            slug: slugify(article.title),
                            title: article.title,
                            imageUrl: article.urlToImage || "/images/placeholder-template.png",
                            date: article.publishedAt,
                            excerpt: article.description || "",
                            author: { name: article.author || "N/A" },
                            tags: [article.source.name],
                            content: article.content ?? undefined,
                        };
                    }
                ).filter(Boolean) as PostCardProps[]; // Filter out nulls

                setPosts(transformedPosts);
                setError(null);
            } catch (e) {
                console.error("Failed to fetch or transform blog posts:", e);
                setError("Gagal memuat postingan blog."); // Set user-friendly error message
            } finally {
                setLoading(false);
            }
        }

        fetchAndSetPosts();
    }, []);

    // Modify BlogList to handle loading and error states, or handle it here.
    // Let's handle it here for simplicity.
    if (loading) {
        // You can return a skeleton loader here for a better UX
        return (
            <section id="blog" className="bg-white py-20 sm:py-28">
                <div className="container mx-auto px-6">
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Berita Terbaru</h2>
                </div>
                <p className="text-center text-gray-500">Memuat berita terbaru...</p>
                </div>
            </section>
        );
    }
    
    if (error) {
        return (
            <section id="blog" className="bg-white py-20 sm:py-28">
                 <div className="container mx-auto px-6">
                 <div className="flex justify-between items-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Berita Terbaru</h2>
                </div>
                <p className="text-center text-red-500">{error}</p>
                </div>
            </section>
        );
    }

    return <BlogList posts={posts} />;
}
