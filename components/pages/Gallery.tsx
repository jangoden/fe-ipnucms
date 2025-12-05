// components/pages/Gallery.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import clsx from "clsx";

// 1. Expanded data with more images for a dynamic layout
const galleryEvents = [
  {
    name: "Pelatihan Kader",
    images: [
      { src: "/images/portofolio.jpg", alt: "Sesi materi dalam Pelatihan Kader" },
      { src: "/images/it-support-team.jpg", alt: "Kerja kelompok peserta" },
      { src: "/images/placeholder-template.png", alt: "Foto bersama di akhir acara" },
      { src: "/images/hero-graphic-light.png", alt: "Suasana outdoor" },
      { src: "/images/head.webp", alt: "Diskusi panel" },
    ],
  },
  {
    name: "Seminar Kebangsaan",
    images: [
      { src: "/images/hero-graphic-light.png", alt: "Narasumber utama di atas panggung" },
      { src: "/images/placeholder-template.png", alt: "Audiens yang hadir" },
      { src: "/images/portofolio.jpg", alt: "Tanya jawab dengan peserta" },
      { src: "/images/it-support-team.jpg", alt: "Pemberian plakat penghargaan" },
      { src: "/images/head.webp", alt: "Networking session" },
    ],
  },
  {
    name: "Bakti Sosial",
    images: [
      { src: "/images/head.webp", alt: "Penyerahan bantuan simbolis" },
      { src: "/images/it-support-team.jpg", alt: "Gotong royong membersihkan lingkungan" },
      { src: "/images/portofolio.jpg", alt: "Kegiatan bersama anak-anak" },
      { src: "/images/placeholder-template.png", alt: "Penyuluhan kesehatan" },
      { src: "/images/hero-graphic-light.png", alt: "Warga dan panitia" },
    ],
  },
];

export default function Gallery() {
  const [selectedEvent, setSelectedEvent] = useState(galleryEvents[0]);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  const imageChunks = selectedEvent.images.slice(1, 5); // Get images 2 to 5 for the small grid

  return (
    <section id="gallery" className="bg-white py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-8">
          <div className="mb-4 sm:mb-0 text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Galeri Kegiatan
            </h2>
            <p className="mt-2 text-lg text-gray-600">Dokumentasi momen berharga dari berbagai acara kami.</p>
          </div>
          <a href="/update/galeri" className="text-center sm:text-right text-emerald-600 hover:text-emerald-500 font-semibold transition-colors duration-300">
            Lihat Semua Galeri &rarr;
          </a>
        </div>

        {/* Filter Buttons - Left Aligned */}
        <div className="flex flex-wrap justify-start gap-3 mb-12" data-aos="fade-up">
          {galleryEvents.map((event) => (
            <button
              key={event.name}
              onClick={() => setSelectedEvent(event)}
              className={clsx(
                "px-5 py-2 text-sm font-semibold rounded-full transition-all duration-300 border",
                selectedEvent.name === event.name
                  ? "bg-emerald-600 text-white border-emerald-600 shadow-lg"
                  : "bg-white text-gray-800 border-gray-200 hover:bg-emerald-50 hover:border-emerald-200"
              )}
            >
              {event.name}
            </button>
          ))}
        </div>

        {/* Dynamic Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" data-aos="fade-up" data-aos-delay="100">
            {/* Large Image */}
            {selectedEvent.images[0] && (
                 <div
                    className="group relative overflow-hidden rounded-2xl shadow-xl cursor-pointer aspect-square"
                    onClick={() => setLightboxImage(selectedEvent.images[0])}
                >
                    <Image
                        src={selectedEvent.images[0].src}
                        alt={selectedEvent.images[0].alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                        <p className="text-white text-xl font-bold tracking-tight">{selectedEvent.images[0].alt}</p>
                    </div>
                </div>
            )}
           
            {/* Small Images Grid */}
            <div className="grid grid-cols-2 grid-rows-2 gap-6">
                {imageChunks.map((image, index) => (
                    <div
                        key={index}
                        className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer aspect-square"
                        onClick={() => setLightboxImage(image)}
                    >
                        <Image
                            src={image.src}
                            alt={image.alt}
                            fill
                            sizes="(max-width: 768px) 50vw, 25vw"
                            className="object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <p className="text-white text-center text-sm font-semibold p-2">{image.alt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 backdrop-blur-sm transition-opacity duration-300"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-4xl max-h-[90vh] p-4" onClick={(e) => e.stopPropagation()}>
            <Image
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              width={1200}
              height={800}
              className="object-contain w-full h-full rounded-lg shadow-2xl"
            />
            <p className="text-white text-center mt-3 text-lg">{lightboxImage.alt}</p>
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute top-0 right-0 m-4 text-white text-4xl leading-none bg-black/30 rounded-full w-10 h-10 flex items-center justify-center transition-colors hover:bg-black/60"
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
