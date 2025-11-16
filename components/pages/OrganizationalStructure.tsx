// components/OrganizationalStructure.tsx
"use client";

import Image from "next/image";

const organizationalStructureData = [
  {
    position: "Ketua",
    name: "[Nama Ketua]",
    image: "/images/placeholder-template.png", // Placeholder image
  },
  {
    position: "Sekretaris",
    name: "[Nama Sekretaris]",
    image: "/images/placeholder-template.png", // Placeholder image
  },
  {
    position: "Bendahara",
    name: "[Nama Bendahara]",
    image: "/images/placeholder-template.png", // Placeholder image
  },
  {
    position: "Departemen Kaderisasi",
    name: "[Nama Ketua Departemen]",
    image: "/images/placeholder-template.png", // Placeholder image
  },
  {
    position: "Departemen Dakwah",
    name: "[Nama Ketua Departemen]",
    image: "/images/placeholder-template.png", // Placeholder image
  },
  {
    position: "Departemen Minat & Bakat",
    name: "[Nama Ketua Departemen]",
    image: "/images/placeholder-template.png", // Placeholder image
  },
  {
    position: "Departemen Jaringan Sekolah & Pesantren",
    name: "[Nama Ketua Departemen]",
    image: "/images/placeholder-template.png", // Placeholder image
  },
];

export default function OrganizationalStructure() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Struktur Organisasi PC IPNU CIAMIS
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Susunan kepengurusan yang menggerakkan roda organisasi.
          </p>
        </div>

        <div className="mx-auto mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {organizationalStructureData.map((member, index) => (
            <div
              key={index}
              className="rounded-lg bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <Image
                src={member.image}
                alt={member.name}
                width={150}
                height={150}
                className="mx-auto h-36 w-36 rounded-full object-cover mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-emerald-600 text-sm">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
