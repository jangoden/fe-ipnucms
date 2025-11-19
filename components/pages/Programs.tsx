// components/pages/Programs.tsx
"use client";

import Image from "next/image";
import {
  UserGroupIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  MegaphoneIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

type Program = {
  Icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
};

const programsData: Program[] = [
    {
      Icon: UserGroupIcon,
      title: "Kaderisasi & Pengembangan Diri",
      description:
        "Mencetak kader militan yang berkarakter, berintegritas, dan memiliki jiwa kepemimpinan melalui jenjang kaderisasi formal serta pelatihan soft-skills.",
      features: [
        "Masa Kesetiaan Anggota (MAKESTA)",
        "Latihan Kader Muda (LAKMUD)",
        "Pelatihan Kepemimpinan & Public Speaking",
        "Workshop Manajemen Organisasi",
      ],
    },
    {
      Icon: AcademicCapIcon,
      title: "Pendidikan & Dakwah Aswaja",
      description:
        "Menguatkan pemahaman Islam Ahlussunnah wal Jamaah An-Nahdliyah di kalangan pelajar melalui pendekatan yang relevan, kreatif, dan damai.",
      features: [
        "Kajian Rutin Kitab Kuning",
        "Seminar & Diskusi Keagamaan Kontemporer",
        "Peringatan Hari Besar Islam (PHBI)",
        "Produksi Konten Dakwah Digital",
      ],
    },
    {
      Icon: BuildingLibraryIcon,
      title: "Pengembangan Organisasi & Minat Bakat",
      description:
        "Memperkuat struktur organisasi yang solid dan memfasilitasi pengembangan minat serta bakat anggota di berbagai bidang.",
      features: [
        "Penguatan Database Anggota (SIRekan)",
        "Rapat Kerja dan Musyawarah Rutin",
        "Unit Kegiatan Pers & Jurnalistik",
        "Tim Olahraga dan Kesenian",
      ],
    },
    {
      Icon: MegaphoneIcon,
      title: "Jaringan & Pengabdian Masyarakat",
      description:
        "Membangun kerjasama strategis dan berperan aktif dalam isu-isu sosial untuk memberikan kontribusi nyata bagi masyarakat luas.",
      features: [
        "Audiensi dengan Pemerintah & Stakeholder",
        "Program Bakti Sosial dan Lingkungan",
        "Advokasi Kebijakan untuk Pelajar",
        "Kolaborasi dengan Organisasi Kepemudaan",
      ],
    },
  ];
  

export default function Programs() {
  return (
    <section id="programs" className="relative bg-emerald-900 py-20 sm:py-28">
      {/* Decorative background accent */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]">
            <svg className="absolute inset-0 h-full w-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <radialGradient id="gradient-programs" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
                        <stop offset="0%" stopColor="rgba(34, 197, 94, 0.3)" />
                        <stop offset="100%" stopColor="rgba(5, 150, 105, 0)" />
                    </radialGradient>
                </defs>
                <rect width="100%" height="100%" fill="url(#gradient-programs)" />
            </svg>
        </div>
      </div>
            <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
                {/* Section Header */}
                <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
                                      <p className="font-semibold text-emerald-600">
                                        Apa yang Kami Lakukan
                                      </p>                  <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    Pilar Program Kerja Kami
                  </h2>
                  <p className="mt-6 text-lg leading-8 text-gray-600">
                    Empat pilar utama ini menjadi landasan kami dalam bergerak, belajar, berjuang, dan bertaqwa untuk mencetak kader unggul masa depan.
                  </p>
                </div>
      
                {/* Programs List */}
                <div className="mt-16 space-y-20">
                  {programsData.map((program, index) => (
                    <div 
                      key={program.title}
                      className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16"
                    >
                      {/* Text Content */}
                      <div 
                        className={`flex flex-col ${index % 2 === 1 ? 'lg:order-last' : ''}`}
                        data-aos={index % 2 === 1 ? "fade-left" : "fade-right"}
                      >
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-600 text-white">
                            <program.Icon className="h-7 w-7" />
                          </div>
                          <h3 className="text-2xl font-bold text-gray-900">{program.title}</h3>
                        </div>
                        <p className="mt-4 text-lg text-gray-600">
                          {program.description}
                        </p>
                        <ul className="mt-6 space-y-3">
                          {program.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-3">
                              <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-emerald-500" />
                              <span className="text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
      
                      {/* Image Content */}
                      <div 
                        className="flex items-center justify-center"
                        data-aos={index % 2 === 1 ? "fade-right" : "fade-left"}
                        data-aos-delay="100"
                      >
                        <div className="relative w-full max-w-md">
                            <div className={`absolute -inset-4 rounded-xl bg-gradient-to-tr from-emerald-500 to-green-300 opacity-20 blur-lg ${index % 2 === 1 ? 'rotate-6' : '-rotate-6'}`}></div>
                            <Image
                            src="/images/placeholder-template.png"
                            alt={program.title}
                            width={500}
                            height={400}
                            className="relative w-full rounded-2xl object-cover shadow-lg ring-1 ring-black/10"
                            />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
    </section>
  );
}