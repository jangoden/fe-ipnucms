
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PostCardProps } from '@/lib/types';
import { CalendarIcon, UserIcon } from '@heroicons/react/24/outline';

export default function PostCard({ post }: { post: PostCardProps }) {
  // Fallback for missing date
  const displayDate = post.date 
    ? new Date(post.date).toLocaleDateString("id-ID", { day: "numeric", month: "long", year: "numeric" })
    : 'Tanggal tidak tersedia';

  return (
    <Link
      href={{
        pathname: `/update/artikel/${encodeURIComponent(post.slug)}`,
        query: { post: JSON.stringify(post) },
      }}
      className="group flex flex-col overflow-hidden rounded-2xl bg-white shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
      data-aos="fade-up"
    >
      {/* Image Container */}
      <div className="relative w-full overflow-hidden aspect-video">
        <Image
          src={post.imageUrl}
          alt={`Gambar untuk ${post.title}`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
      </div>

      {/* Content Container */}
      <div className="flex flex-1 flex-col p-5">
        {/* Tag */}
        {post.tags && post.tags.length > 0 && (
          <p className="mb-3 text-sm font-semibold text-emerald-600">
            {post.tags[0]}
          </p>
        )}

        {/* Title */}
        <h3 className="mb-3 text-lg font-bold leading-tight text-gray-800 transition-colors duration-300 group-hover:text-emerald-700">
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="mb-5 flex-1 text-sm text-gray-600 line-clamp-3">
          {post.excerpt}
        </p>

        {/* Meta Info */}
        <div className="mt-auto flex items-center gap-4 text-xs text-gray-500 border-t border-gray-100 pt-4">
          <div className="flex items-center gap-1.5">
            <UserIcon className="h-4 w-4" />
            <span className="truncate">{post.author.name || 'Penulis'}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CalendarIcon className="h-4 w-4" />
            <span>{displayDate}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
