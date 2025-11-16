// components/blog/post-header.tsx

import { PostCardProps } from "@/lib/types";
import { UserCircleIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";

interface PostHeaderProps {
  post: PostCardProps;
}

export default function PostHeader({ post }: PostHeaderProps) {
  const friendlyDate = new Date(post.date).toLocaleDateString("id-ID", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <header className="mb-8 border-b border-gray-200 pb-8 text-center">
      {/* Kategori */}
      <div className="mb-4">
        <span className="inline-block rounded-full bg-[#0d815e] px-3 py-1 text-sm font-semibold uppercase tracking-wider text-white">
          {post.tags?.[0] || "Artikel"}
        </span>
      </div>

      {/* Judul Utama */}
      <h1 className="mb-5 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl md:text-5xl">
        {/* [PERUBAHAN] Ukuran font dibuat responsif dari 3xl -> 4xl -> 5xl */}
        {post.title}
      </h1>

      {/* Meta Penulis & Tanggal */}
      <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-base text-gray-500">
        <div className="flex items-center">
          <UserCircleIcon className="mr-2 h-6 w-6 text-gray-400" />
          <span>{post.author?.name || "Admin"}</span>
        </div>
        <div className="flex items-center">
          <CalendarDaysIcon className="mr-2 h-6 w-6 text-gray-400" />
          <time dateTime={post.date}>{friendlyDate}</time>
        </div>
      </div>
    </header>
  );
}
