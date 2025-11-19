// components/pages/CadreDatabase.tsx
"use client";

import Link from "next/link";
import { UsersIcon, ArrowRightIcon, AcademicCapIcon, MapPinIcon } from "@heroicons/react/24/outline";
import CountingStat from "../ui/CountingStat"; // Import CountingStat

const dummyStats = [
  { name: "Total Anggota", value: "2500+", icon: UsersIcon }, // Changed "2.500+" to "2500+" for easier parsing by parseInt
  { name: "Kader Aktif", value: "800+", icon: AcademicCapIcon },
  { name: "Angkatan Pelatihan", value: "50+", icon: UsersIcon },
  { name: "Wilayah Binaan", value: "10+", icon: MapPinIcon },
];

export default function CadreDatabase() {
  return (
    <section className="relative bg-white py-16 sm:py-24">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold leading-7 text-emerald-600">
            Data Keanggotaan
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Database Kader dan Anggota
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Telusuri informasi lengkap mengenai kader dan anggota PC IPNU Ciamis.
            Database ini menyediakan data terkini untuk mendukung pengembangan potensi
            dan koordinasi antar anggota.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/database" // Assuming a page for the database exists or will be created
              className="inline-flex items-center gap-x-2 rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
            >
              <UsersIcon className="h-5 w-5" />
              Lihat Database
              <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {/* Display for dummy statistics */}
        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {dummyStats.map((stat, index) => (
              <div
                key={stat.name}
                className="flex flex-col items-center justify-center rounded-xl border border-gray-100 bg-white p-6 shadow-md"
              > {/* Removed data-aos attributes */}
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100">
                  <stat.icon className="h-6 w-6 text-emerald-600" aria-hidden="true" />
                </div>
                <p className="mt-4 text-4xl font-bold text-gray-900">
                  <CountingStat value={stat.value} duration={1500} delay={index * 150} />
                </p>
                <p className="mt-2 text-base text-gray-600">{stat.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
