// components/About.tsx
"use client";

import {
  EyeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

// Data untuk Visi dan Misi
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
      className="relative isolate overflow-hidden bg-gray-50 py-12 sm:py-16"
    >
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-semibold leading-7 text-emerald-600">
            Tentang Kami
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mengenal PC IPNU Ciamis
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ikatan Pelajar Nahdlatul Ulama (IPNU) adalah organisasi kaderisasi di bawah naungan Nahdlatul Ulama yang berfungsi sebagai wadah perjuangan, komunikasi, dan pengembangan potensi bagi pelajar NU di seluruh Indonesia, khususnya di Kabupaten Ciamis.
          </p>
        </div>

        {/* Visi & Misi */}
        <div className="mx-auto mt-16 max-w-4xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
            {visionMissionData.map((item) => (
              <div key={item.type} className="relative pl-16 transform transition-transform duration-300 hover:scale-105">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-600">
                    <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {item.type}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{item.statement}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#80ff80] to-[#008000] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{ clipPath: 'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)' }}></div>
      </div>
    </section>
  );
}
