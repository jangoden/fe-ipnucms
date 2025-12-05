"use client";

// Ganti tipe impor dari 'Post' menjadi 'PostCardProps'
import { PostCardProps } from '@/lib/types';
import PostCard from './PostCard';
import Link from 'next/link';

interface BlogListProps {
  // Gunakan tipe baru
  posts: PostCardProps[];
}

export default function BlogList({ posts }: BlogListProps) {
  // Logika 'filteredPosts' dari error Anda
  // Untuk saat ini, kita anggap saja sama dengan 'posts'
  const filteredPosts = posts;

  return (
<section id="blog" className="bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Berita Terbaru</h2>
          <Link href="/update/artikel" className="text-emerald-600 hover:text-emerald-500 transition-colors duration-300">Lihat Semua &rarr;</Link>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <PostCard
                key={post.slug}
                post={post}
              />
            ))
          ) : (
            <p className="col-span-3 text-center text-gray-500">
              Tidak ada postingan yang ditemukan.
            </p>
          )}
        </div>
      </div>
    </section>
  );
}