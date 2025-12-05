// components/pages/OrganizationalStructure.tsx
"use client";

import Image from "next/image";

const topLeadership = [
  {
    position: "Ketua",
    name: "Irman M Farhan",
    image: "/images/Ketua.png", 
  },
  {
    position: "Sekretaris",
    name: "Adi Nursyahid",
    image: "/images/Sekretaris.png",
  },
  {
    position: "Bendahara",
    name: "Ahmad Fahruroji",
    image: "/images/Bendahara.png",
  },
];

const departmentLeads = [
  {
    position: "Departemen Kaderisasi",
    name: "[Nama Ketua Departemen]",
    image: "/images/placeholder-template.png",
  },
  {
    position: "Departemen Dakwah",
    name: "[Nama Ketua Departemen]",
    image: "/images/placeholder-template.png",
  },
  {
    position: "Departemen Minat & Bakat",
    name: "[Nama Ketua Departemen]",
    image: "/images/placeholder-template.png",
  },
  {
    position: "Departemen Jaringan Sekolah & Pesantren",
    name: "[Nama Ketua Departemen]",
    image: "/images/placeholder-template.png",
  },
];

export default function OrganizationalStructure() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Header */}
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Struktur Organisasi PC IPNU CIAMIS
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Susunan kepengurusan yang solid dan berintegritas untuk menggerakkan roda organisasi.
          </p>
        </div>

        {/* Top Leadership Section */}
        <div className="mt-16">
            <div className="mx-auto grid max-w-lg grid-cols-1 gap-10 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3">
                {topLeadership.map((member) => (
                    <div
                        key={member.position}
                        className="flex flex-col items-center text-center bg-white p-8 rounded-2xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
                        data-aos="fade-up"
                    >
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={160}
                            height={160}
                            className="h-40 w-40 rounded-full object-cover ring-4 ring-emerald-500/50"
                        />
                        <h3 className="mt-6 text-xl font-bold text-gray-900">
                            {member.name}
                        </h3>
                        <p className="mt-1 text-base font-semibold text-emerald-600">{member.position}</p>
                    </div>
                ))}
            </div>
        </div>

        {/* Departments Section */}
        <div className="mt-24">
            <div className="mx-auto max-w-4xl text-center mb-12">
                 <h3 className="text-3xl font-bold tracking-tight text-gray-800">
                    Departemen & Lembaga
                </h3>
                 <p className="mt-3 text-lg text-gray-600">
                    Motor penggerak program kerja dan inovasi.
                </p>
            </div>
             <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {departmentLeads.map((member, index) => (
                    <div
                        key={member.position}
                        className="flex flex-col items-center text-center bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:bg-gray-50"
                        data-aos="fade-up"
                        data-aos-delay={index * 50}
                    >
                        <Image
                            src={member.image}
                            alt={member.name}
                            width={120}
                            height={120}
                            className="h-28 w-28 rounded-full object-cover mb-4 ring-2 ring-gray-100"
                        />
                        <h4 className="text-md font-semibold text-gray-800">
                            {member.name}
                        </h4>
                        <p className="text-sm text-emerald-600">{member.position}</p>
                    </div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
}
