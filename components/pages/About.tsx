// components/pages/About.tsx
"use client";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRightIcon,
  BookOpenIcon,
  FlagIcon,
  AcademicCapIcon,
  EyeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

const coreValues = [
  {
    name: "Belajar",
    description:
      "Memiliki makna belajar dengan cerdas dan tekun untuk menguasai ilmu pengetahuan. Ini adalah upaya untuk mengembangkan akal dan wawasan.",
    icon: BookOpenIcon,
  },
  {
    name: "Berjuang",
    description:
      "Melibatkan perjuangan dengan segenap tenaga untuk mencapai cita-cita, baik pribadi maupun organisasi. Ini adalah aplikasi ilmu dan pemanfaatan fisik untuk kebaikan.",
    icon: FlagIcon,
  },
  {
    name: "Bertaqwa",
    description:
      "Menekankan ketakwaan yang tulus dan ikhlas kepada Tuhan. Ini adalah aspek hati dan spiritualitas untuk memastikan perjuangan dilakukan dengan tujuan yang benar dan ridha Tuhan.",
    icon: AcademicCapIcon,
  },
];

const visionMissionData = [
  {
    type: "Visi",
    statement:
      "Terwujudnya pelajar-pelajar bangsa yang bertaqwa kepada Allah SWT, berilmu, berakhlak mulia, dan berwawasan kebangsaan serta bertanggung jawab atas tegak dan berkembangnya syi'ar Islam Ahlussunnah wal Jamaah.",
    icon: EyeIcon,
  },
  {
    type: "Misi",
    statement:
      "Menghimpun dan membina pelajar Nahdlatul Ulama dalam satu wadah organisasi, mempersiapkan kader-kader intelektual sebagai penerus perjuangan bangsa, dan berperan aktif dalam pembangunan nasional.",
    icon: CheckCircleIcon,
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="relative bg-gradient-to-b from-emerald-50 to-emerald-100 py-16 sm:py-24"
    >
      <div className="container mx-auto px-6 lg:px-8">
        {/* Top Section: Intro */}
        <div className="grid grid-cols-1 gap-y-16 gap-x-12 lg:grid-cols-2 lg:items-start">
          {/* Kolom Kiri: Konten Teks */}
          <div className="flex flex-col justify-center">
            <p className="font-semibold leading-7 text-emerald-600">
              Tentang Kami
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Menempa Kader, Membangun Bangsa.
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              PC IPNU Ciamis adalah wadah bagi para pelajar Nahdlatul Ulama
              untuk mengembangkan potensi, memperkuat akidah Aswaja, dan
              menumbuhkan jiwa kepemimpinan. Kami berkomitmen untuk melahirkan
              generasi penerus yang tidak hanya cerdas secara intelektual,
              tetapi juga memiliki akhlak mulia dan cinta tanah air.
            </p>

            {/* Tombol CTA */}
            <div className="mt-10">
              <Link
                href="/tentang"
                className="inline-flex items-center gap-x-2 rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-emerald-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-600"
              >
                Jelajahi Lebih Lanjut
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Kolom Kanan: Gambar */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="w-full max-w-md lg:max-w-none">
              <Image
                src="/images/foto-ipnu.webp"
                alt="Tim PC IPNU Ciamis"
                width={600}
                height={600}
                className="rounded-2xl object-cover shadow-xl ring-1 ring-gray-400/10"
              />
            </div>
          </div>
        </div>

        {/* Middle Section: Nilai-Nilai Inti */}
        <div className="mt-24">
          <h3 className="text-3xl font-bold text-center text-gray-900 sm:text-4xl">
            Trilogi Pelajar
          </h3>

          <div className="mx-auto mt-12 max-w-5xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3 place-items-center">
              {coreValues.map((value, index) => (
                <div
                  key={value.name}
                  className="group flex h-full w-full cursor-pointer flex-col items-center rounded-xl border border-gray-100 bg-white p-8 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:bg-emerald-600 hover:border-emerald-600"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 transition-colors duration-300 group-hover:bg-white">
                      <value.icon
                        className="h-6 w-6 text-emerald-600 transition-colors duration-300 group-hover:text-emerald-600"
                        aria-hidden="true"
                      />
                    </div>
                    <h4 className="mt-5 text-lg font-semibold text-gray-900 transition-colors duration-300 group-hover:text-white">
                      {value.name}
                    </h4>
                    <p className="mt-3 text-base text-gray-600 transition-colors duration-300 group-hover:text-white/90">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Visi & Misi */}
        <div className="mx-auto mt-24 max-w-5xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Visi & Misi
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Arah perjuangan kami dalam membentuk pelajar yang berkualitas dan
            berakhlakul karimah.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
            {visionMissionData.map((item) => (
              <div
                key={item.type}
                className="relative transform rounded-xl border border-gray-200 bg-gray-50/50 p-8 shadow-sm transition-transform duration-300 hover:scale-105 hover:bg-white"
              >
                <dt className="inline-flex items-center gap-x-3 text-xl font-semibold leading-7 text-gray-900">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600">
                    <item.icon className="h-7 w-7 text-white" aria-hidden="true" />
                  </div>
                  {item.type}
                </dt>
                <dd className="mt-4 text-base leading-7 text-gray-600">
                  {item.statement}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
