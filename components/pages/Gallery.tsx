// components/pages/Gallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

// 1. Restructured data: Images are now grouped by event
const galleryEvents = [
  {
    name: "Pelatihan Kader Dasar",
    images: [
      { src: "/images/portofolio.jpg", alt: "Peserta Pelatihan Kader Dasar" },
      { src: "/images/it-support-team.jpg", alt: "Diskusi Kelompok" },
    ],
  },
  {
    name: "Seminar Kebangsaan",
    images: [
      { src: "/images/hero-graphic-light.png", alt: "Narasumber Seminar" },
      { src: "/images/placeholder-template.png", alt: "Audiens Seminar" },
    ],
  },
  {
    name: "Rapat Anggota",
    images: [
      { src: "/images/portofolio.jpg", alt: "Suasana Rapat Anggota" },
      { src: "/images/it-support-team.jpg", alt: "Presentasi Rapat" },
    ],
  },
];

export default function Gallery() {
  // 2. State management for selected event and lightbox
  const [selectedEvent, setSelectedEvent] = useState(galleryEvents[0]);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  return (
    <section className="bg-gray-50 py-12 sm:py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Galeri Kegiatan
          </h2>
          <a href="/update/galeri" className="text-emerald-600 hover:text-emerald-500 transition-colors duration-300">
            Lihat Semua &rarr;
          </a>
        </div>

        {/* 3. Event title buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-12">
          {galleryEvents.map((event) => (
            <button
              key={event.name}
              onClick={() => setSelectedEvent(event)}
              className={clsx(
                "px-4 py-2 text-sm sm:text-base font-semibold rounded-full transition-all duration-300",
                selectedEvent.name === event.name
                  ? "bg-emerald-600 text-white shadow-md"
                  : "bg-white text-gray-700 hover:bg-emerald-100"
              )}
            >
              {event.name}
            </button>
          ))}
        </div>

        {/* 4. Image grid for the selected event */}
        <div className="mx-auto grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {selectedEvent.images.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
              onClick={() => setLightboxImage(image)}
            >
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

      {/* 5. Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-lg"
            />
            <p className="text-white text-center mt-2 text-lg">{lightboxImage.alt}</p>
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-4 right-4 text-white text-3xl leading-none"
              aria-label="Close"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
