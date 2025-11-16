// components/Gallery.tsx
"use client";

import Image from "next/image";

const galleryImages = [
  { src: "/images/portofolio.jpg", alt: "Kegiatan 1" },
  { src: "/images/it-support-team.jpg", alt: "Kegiatan 2" },
  { src: "/images/hero-graphic-light.png", alt: "Kegiatan 3" },
  { src: "/images/placeholder-template.png", alt: "Kegiatan 4" },
  { src: "/images/portofolio.jpg", alt: "Kegiatan 5" },
  { src: "/images/it-support-team.jpg", alt: "Kegiatan 6" },
];

export default function Gallery() {
  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Galeri Kegiatan
          </h2>
          <a href="/update/galeri" className="text-emerald-600 hover:text-emerald-500 transition-colors duration-300">Lihat Semua &rarr;</a>
        </div>

        <div className="mx-auto mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Image
                src={image.src}
                alt={image.alt}
                width={600}
                height={400}
                className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white text-lg font-semibold">{image.alt}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
