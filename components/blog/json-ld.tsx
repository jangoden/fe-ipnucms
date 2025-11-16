// components/blog/json-ld.tsx

"use client";

import { PostCardProps } from "@/lib/types";

export default function JsonLd({
  post,
  url,
}: {
  post: PostCardProps;
  url: string;
}) {
  // Fungsi sederhana untuk memformat tanggal ke ISO 8601, jika belum
  const toISOString = (dateString: string) => {
    const date = new Date(dateString);
    return isNaN(date.getTime()) ? new Date().toISOString() : date.toISOString();
  };

  const isoDate = toISOString(post.date);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: isoDate,
    dateModified: isoDate, // Asumsi tanggal modifikasi sama dengan publikasi
    author: { "@type": "Person", name: post.author?.name || "Admin" },
    image: post.imageUrl || undefined,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
