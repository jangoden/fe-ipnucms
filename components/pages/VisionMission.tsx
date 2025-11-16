// components/VisionMission.tsx
"use client";

import {
  EyeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

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

export default function VisionMission() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Visi & Misi PC IPNU CIAMIS
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Landasan dan tujuan organisasi dalam setiap langkah perjuangan.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2 lg:gap-y-16">
            {visionMissionData.map((item) => (
              <div key={item.type} className="relative pl-16">
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
    </section>
  );
}
