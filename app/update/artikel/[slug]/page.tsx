'use client'
import PageHeader from "@/components/layout/PageHeader";
import { PostCardProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";
import BlogSidebar from "@/components/blog/BlogSidebar"; // 1. Import Sidebar
import Breadcrumbs from "@/components/ui/Breadcrumbs";
import {
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  LinkIcon,
} from "lucide-react";

// 2. TOC logic is removed.

export default function ArtikelDetailPage() {
  const searchParams = useSearchParams();
  const postString = searchParams.get("post");
  const [post, setPost] = useState<PostCardProps | null>(null);

  useEffect(() => {
    if (postString) {
      try {
        const parsedPost: PostCardProps = JSON.parse(postString);
        setPost(parsedPost);
      } catch (error) {
        console.error("Failed to parse post data:", error);
      }
    }
  }, [postString]);

  if (!post) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-lg font-semibold">Memuat artikel...</div>
      </div>
    );
  }

  const crumbs = [
    { href: "/update/artikel", label: "Artikel" },
    { href: `/update/artikel/${post.slug}`, label: post.title.substring(0, 30) + '...' }, // Truncate long titles
  ];

  return (
    <>
      {/* Article Header with Background */}
      <div 
        className="relative h-80 sm:h-96 flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${post.imageUrl || '/images/head.webp'})` }}
      >
          <div className="absolute inset-0 bg-black/50" />
          <div className="relative z-10 text-center text-white px-4 max-w-4xl">
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight">
                  {post.title}
              </h1>
              <div className="mt-4">
                <Breadcrumbs crumbs={crumbs} />
              </div>
          </div>
      </div>

      <div className="bg-gray-50 min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 -mt-32">
          {/* New Two-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            
            {/* Left Column: Article */}
            <main className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                <div className="p-6 sm:p-8">
                  {/* Meta Info */}
                  <div className="mb-6 flex items-center space-x-4 text-sm text-gray-500">
                    <span>By {post.author.name}</span>
                    <span>&middot;</span>
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("id-ID", {
                        day: "numeric",
                        month: "long",
                        year: "numeric",
                      })}
                    </time>
                  </div>

                  {/* Article Content */}
                  <div className="prose prose-lg max-w-none">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {post.content || ""}
                    </ReactMarkdown>
                  </div>

                  {/* Share Section */}
                  <div className="mt-8 border-t pt-6">
                    <h3 className="text-lg font-semibold text-gray-800 mb-3">
                      Bagikan Artikel
                    </h3>
                    <div className="flex items-center space-x-4">
                      <a href="#" className="text-gray-500 hover:text-blue-600"><FacebookIcon size={24} /></a>
                      <a href="#" className="text-gray-500 hover:text-sky-500"><TwitterIcon size={24} /></a>
                      <a href="#" className="text-gray-500 hover:text-blue-700"><LinkedinIcon size={24} /></a>
                      <button className="text-gray-500 hover:text-emerald-600"><LinkIcon size={24} /></button>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            {/* Right Column: Sidebar */}
            <aside className="lg:col-span-1">
              <div className="sticky top-24">
                <BlogSidebar />
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}