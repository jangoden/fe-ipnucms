'use client';

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PostCardProps } from "@/lib/types";

import Breadcrumbs from "@/components/ui/Breadcrumbs";
import PostHeader from "@/components/blog/post-header";
import PostBody from "@/components/blog/post-body";
import PostFooter from "@/components/blog/post-footer";

function ArticlePageContent() {
  const searchParams = useSearchParams();
  const postString = searchParams.get("post");
  const [post, setPost] = useState<PostCardProps | null>(null);
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (postString) {
      try {
        const parsedPost: PostCardProps = JSON.parse(postString);
        setPost(parsedPost);
      } catch (error) {
        console.error("Failed to parse post data:", error);
      }
    }
    if (typeof window !== "undefined") {
      setShareUrl(window.location.href);
    }
  }, [postString]);

  if (!post) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="text-lg font-semibold text-gray-500">
          Memuat artikel...
        </div>
      </div>
    );
  }

  const crumbs = [
    { href: "/update/artikel", label: "Artikel" },
    {
      href: `/update/artikel/${post.slug}`,
      label: post.title.substring(0, 30) + "...",
    },
  ];

  return (
    <div className="min-h-screen bg-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4 lg:px-0">

        {/* SIDEBAR KIRI - Now Sticky */}
        <aside className="md:col-span-1 space-y-8 self-start sticky top-24">
          {/* Breadcrumbs moved to sidebar */}
          <Breadcrumbs crumbs={crumbs} className="text-base text-gray-900 mb-6" />

          {/* Categories */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-200 pb-2 text-gray-900">
              Kategori
            </h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-emerald-600 cursor-pointer">Berita</li>
              <li className="hover:text-emerald-600 cursor-pointer">Opini</li>
              <li className="hover:text-emerald-600 cursor-pointer">Kaderisasi</li>
              <li className="hover:text-emerald-600 cursor-pointer">Teknologi</li>
            </ul>
          </div>

          {/* Related Posts */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm border">
            <h3 className="text-lg font-semibold mb-3 border-b border-gray-200 pb-2 text-gray-900">
              Artikel Terkait
            </h3>

            <div className="space-y-4">
              <div className="flex items-center space-x-3 group">
                <div className="w-16 h-12 rounded overflow-hidden bg-gray-200">
                  <img
                    src={post.imageUrl || "/images/placeholder-template.png"}
                    alt={post.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-700 group-hover:text-emerald-600 cursor-pointer line-clamp-2">
                  {post.title}
                </p>
              </div>
              {/* Dummy related post */}
              <div className="flex items-center space-x-3 group">
                <div className="w-16 h-12 rounded overflow-hidden bg-gray-200">
                  <img
                    src={"/images/placeholder-template.png"}
                    alt={"Contoh artikel lain"}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="text-sm text-gray-700 group-hover:text-emerald-600 cursor-pointer line-clamp-2">
                  Memaknai Trilogi Belajar, Berjuang, Bertaqwa di Era Digital
                </p>
              </div>
            </div>
          </div>
        </aside>

        {/* KONTEN UTAMA */}
        <main className="md:col-span-3 rounded-lg p-6 lg:p-8">
          <div className="space-y-8">
            <PostHeader post={post} />
            <PostBody post={post} />
            <PostFooter post={post} shareUrl={shareUrl} />
          </div>
        </main>
      </div>
    </div>
  );
}

export default function ArtikelDetailPage() {
  return <ArticlePageContent />;
}
