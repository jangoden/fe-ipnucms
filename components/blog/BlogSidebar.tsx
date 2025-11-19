// components/blog/BlogSidebar.tsx
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";

// Placeholder data
const categories = [
  "Teknologi",
  "Pendidikan",
  "Organisasi",
  "Keagamaan",
  "Wirausaha",
];

const relatedPosts = [
  {
    title: "Pentingnya Literasi Digital di Era Modern",
    imageUrl: "/images/placeholder-template.png",
    slug: "#",
  },
  {
    title: "Tips Manajemen Waktu untuk Pelajar",
    imageUrl: "/images/placeholder-template.png",
    slug: "#",
  },
  {
    title: "Membangun Jiwa Kepemimpinan Sejak Dini",
    imageUrl: "/images/placeholder-template.png",
    slug: "#",
  },
];

export default function BlogSidebar() {
  return (
    <aside className="space-y-8">
      {/* Search Bar Card */}
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Pencarian</h3>
        <div className="relative">
          <input
            type="text"
            placeholder="Cari artikel..."
            className="w-full pl-4 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500"
          />
          <MagnifyingGlassIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>
      </div>

      {/* Categories Card */}
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Kategori</h3>
        <ul className="space-y-3">
          {categories.map((category) => (
            <li key={category}>
              <Link
                href="#"
                className="text-gray-600 hover:text-emerald-600 transition-colors duration-200"
              >
                {category}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Related Posts Card */}
      <div className="p-6 bg-white rounded-lg shadow-sm">
        <h3 className="text-xl font-semibold mb-4 text-gray-900">Artikel Terkait</h3>
        <ul className="space-y-4">
          {relatedPosts.map((post) => (
            <li key={post.title} className="flex items-start gap-4 group">
              <Link href={post.slug} className="flex-shrink-0">
                <Image
                  src={post.imageUrl}
                  alt={post.title}
                  width={64}
                  height={64}
                  className="w-16 h-16 object-cover rounded-md border border-gray-200 group-hover:border-emerald-500 transition-all duration-200"
                />
              </Link>
              <div className="flex-1">
                <Link
                  href={post.slug}
                  className="text-base font-medium text-gray-800 group-hover:text-emerald-600 transition-colors duration-200 leading-tight"
                >
                  {post.title}
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
