
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { PostCardProps } from '@/lib/types';

export default function PostCard({ post }: { post: PostCardProps }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:shadow-md">
      <Link
        href={{
          pathname: `/update/artikel/${encodeURIComponent(post.slug)}`,
          query: { post: JSON.stringify(post) },
        }}
      >
        <div className="relative block h-40 w-full">
          <Image
            src={post.imageUrl}
            alt={`Gambar untuk ${post.title}`}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <div className="mb-2">
          <span className="inline-block rounded-full bg-primary/10 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-primary-dark">
            {post.tags && post.tags.length > 0 ? post.tags[0] : ''}
          </span>
        </div>

        <h3 className="mb-2 text-lg font-bold leading-tight text-gray-900">
          <Link
            href={{
              pathname: `/update/artikel/${encodeURIComponent(post.slug)}`,
              query: { post: JSON.stringify(post) },
            }}
            className="hover:text-primary transition-colors duration-200"
          >
            {post.title}
          </Link>
        </h3>

        <p className="mb-4 flex-1 text-sm text-gray-600 line-clamp-2">
          {post.excerpt}
        </p>

        <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-3">
          <div className="flex items-center gap-2">
            <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
            </svg>
            <span className="text-xs font-medium text-gray-700 truncate">
              {post.author.name}
            </span>
          </div>

          <div className="flex items-center gap-1 text-xs text-gray-500">
            <svg className="h-4 w-4 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5m18 7.5v-7.5" />
            </svg>
            <span>
              {new Date(post.date).toLocaleDateString("id-ID", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
