'use client'
import { PostCardProps } from "@/lib/types";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { useEffect, useState } from "react";

type TocItem = {
  level: number;
  text: string;
  id: string;
};

const generateToc = (markdown: string): TocItem[] => {
  const headings: TocItem[] = [];
  if (!markdown) return headings;
  const lines = markdown.split("\n");
  lines.forEach((line, index) => {
    const match = line.match(/^(#+)\s+(.*)/);
    if (match) {
      const level = match[1].length;
      const text = match[2];
      const id = `heading-${index}`;
      headings.push({ level, text, id });
    }
  });
  return headings;
};

const addIdsToHeadings = (markdown: string): string => {
  if (!markdown) return "";
  let index = 0;
  return markdown.replace(/^(#+)\s+(.*)/gm, (match, hashes, text) => {
    const id = `heading-${index++}`;
    return `${hashes} <a id="${id}"></a>${text}`;
  });
};

export default function ArtikelDetailPage() {
  const searchParams = useSearchParams();
  const postString = searchParams.get("post");
  const [post, setPost] = useState<PostCardProps | null>(null);
  const [toc, setToc] = useState<TocItem[]>([]);
  const [contentWithIds, setContentWithIds] = useState<string>("");

  useEffect(() => {
    if (postString) {
      try {
        const parsedPost: PostCardProps = JSON.parse(postString);
        setPost(parsedPost);
        const tocItems = generateToc(parsedPost.content || "");
        setToc(tocItems);
        setContentWithIds(addIdsToHeadings(parsedPost.content || ""));
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

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              {post.title}
            </h1>
            <div className="mt-4 flex justify-center items-center space-x-4 text-gray-500">
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
          </div>

          {/* Image */}
          <div className="relative h-96 w-full rounded-lg overflow-hidden mb-8">
            <Image
              src={post.imageUrl}
              alt={post.title}
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Table of Contents */}
            <div className="lg:col-span-3">
              {toc.length > 0 && (
                <div className="sticky top-24 p-4 bg-white rounded-lg shadow-sm">
                  <h3 className="text-xl font-semibold mb-4">Daftar Isi</h3>
                  <ul className="space-y-2">
                    {toc.map((item) => (
                      <li key={item.id}>
                        <a
                          href={`#${item.id}`}
                          className={`block text-gray-600 hover:text-primary-light transition-colors duration-200 ml-${(item.level - 1) * 2}`}>
                          {item.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Article Content */}
            <div className="lg:col-span-9">
              <div className="prose prose-lg max-w-none bg-white p-6 rounded-lg shadow-sm">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {contentWithIds}
                </ReactMarkdown>
                <div className="mt-8 border-t pt-4">
                  <p className="text-gray-600">
                    Artikel ini adalah ringkasan. Untuk membaca versi lengkapnya, silakan kunjungi sumber aslinya.
                  </p>
                  <Link
                    href={post.slug}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block mt-2 text-primary hover:text-primary-dark font-semibold"
                  >
                    Baca Selengkapnya &rarr;
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}