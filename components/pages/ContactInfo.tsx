// components/ContactInfo.tsx
"use client";

import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function ContactInfo() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hubungi Kami
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Jangan ragu untuk menghubungi kami untuk informasi lebih lanjut atau pertanyaan.
          </p>
        </div>

        <div className="mx-auto mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl">
          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <MapPinIcon className="mx-auto h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Alamat</h3>
            <p className="text-gray-600">Jl. Raya Ciamis - Banjar KM. 3</p>
            <p className="text-gray-600">Ciamis, Jawa Barat 46211</p>
          </div>

          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <PhoneIcon className="mx-auto h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Telepon</h3>
            <p className="text-gray-600">(0265) 77XXXX</p>
            <p className="text-gray-600">+62 812-3456-7890</p>
          </div>

          <div className="rounded-lg bg-white p-6 text-center shadow-md">
            <EnvelopeIcon className="mx-auto h-12 w-12 text-emerald-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email</h3>
            <p className="text-gray-600">info@ipnuciamis.or.id</p>
            <p className="text-gray-600">pc.ipnu.ciamis@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
}
