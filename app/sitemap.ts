import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/config";

type ApiItem = {
  slug: string;
  updated_at?: string | null;
};

// Helper umum supaya DRY
async function fetchApi<T extends ApiItem>(path: string): Promise<T[]> {
  // Kalau apiUrl belum diset, jangan coba fetch apa-apa
  if (!siteConfig.apiUrl) return [];

  try {
    const res = await fetch(`${siteConfig.apiUrl}${path}`, {
      // sitemap tidak perlu super real-time, 1 jam cukup
      next: { revalidate: 3600 },
    });

    if (!res.ok) return [];

    const json = await res.json();
    return Array.isArray(json.data) ? (json.data as T[]) : [];
  } catch (error) {
    // Biar nggak spam log di production
    if (process.env.NODE_ENV === "development") {
      console.error(`Failed to fetch ${path} for sitemap:`, error);
    }
    return [];
  }
}

function toValidDate(dateString?: string | null): Date | undefined {
  if (!dateString) return undefined;
  const d = new Date(dateString);
  return Number.isNaN(d.getTime()) ? undefined : d;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = siteConfig.siteUrl ?? "http://localhost:3000";

  // Ambil posts & templates secara paralel
  const [posts, templates] = await Promise.all([
    fetchApi<ApiItem>("/api/v1/posts"),
    fetchApi<ApiItem>("/api/v1/templates"),
  ]);

  // Halaman statis utama
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/templates`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];

  // SESUAIKAN route di bawah ini dengan struktur app kamu.
  // Kalau di proyek kamu route-nya `/update/artikel/[slug]`,
  // ubah `/blog/` jadi `/update/artikel/`
  const postUrls: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    // atau: `${baseUrl}/update/artikel/${post.slug}`,
    lastModified: toValidDate(post.updated_at),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const templateUrls: MetadataRoute.Sitemap = templates.map((template) => ({
    url: `${baseUrl}/templates/${template.slug}`,
    lastModified: toValidDate(template.updated_at),
    changeFrequency: "weekly",
    priority: 0.6,
  }));

  return [...staticPages, ...postUrls, ...templateUrls];
}
