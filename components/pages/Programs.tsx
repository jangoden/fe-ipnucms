// components/pages/Programs.tsx
"use client";

import {
  UserGroupIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  MegaphoneIcon,
  SparklesIcon,
  CpuChipIcon,
} from "@heroicons/react/24/outline";

type Program = {
  Icon: React.ElementType;
  title: string;
  description: string;
};

const programsData: Program[] = [
  {
    Icon: UserGroupIcon,
    title: "Pengembangan Kader",
    description: "Membentuk pemimpin masa depan yang berintegritas, berkarakter, dan berjiwa kepemimpinan melalui kaderisasi formal dan pelatihan soft-skills.",
  },
  {
    Icon: AcademicCapIcon,
    title: "Dakwah & Kajian Aswaja",
    description: "Menguatkan pemahaman Islam Ahlussunnah wal Jamaah di kalangan pelajar melalui kajian rutin, diskusi, dan konten digital yang kreatif.",
  },
  {
    Icon: BuildingLibraryIcon,
    title: "Minat, Bakat & Organisasi",
    description: "Mewadahi pengembangan minat dan bakat anggota serta memperkuat tata kelola organisasi yang modern dan solid.",
  },
  {
    Icon: MegaphoneIcon,
    title: "Pengabdian Masyarakat",
    description: "Berperan aktif dalam isu sosial, membangun kerjasama strategis, dan memberikan kontribusi nyata bagi masyarakat luas.",
  },
  {
    Icon: SparklesIcon,
    title: "Kewirausahaan & Kemandirian",
    description: "Mendorong semangat wirausaha dan kemandirian ekonomi di kalangan kader melalui workshop, pelatihan, dan pendampingan bisnis.",
  },
  {
    Icon: CpuChipIcon,
    title: "Digitalisasi & Teknologi",
    description: "Meningkatkan literasi digital dan penguasaan teknologi di kalangan pelajar sebagai bekal menghadapi tantangan zaman.",
  }
];

export default function Programs() {
  return (
    <section id="programs" className="bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center" data-aos="fade-up">
          <p className="font-semibold text-emerald-600">
            Apa yang Kami Lakukan
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Fokus Program Kami
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Enam pilar program ini menjadi landasan kami dalam bergerak, belajar, dan berjuang untuk mencetak kader unggul di era digital.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="mx-auto mt-16 grid max-w-lg grid-cols-1 gap-8 md:max-w-none md:grid-cols-2 lg:grid-cols-3">
          {programsData.map((program, index) => (
            <div
              key={program.title}
              className="group flex transform flex-col justify-between rounded-xl border border-gray-200 bg-white p-8 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-600 text-white">
                  <program.Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{program.title}</h3>
                <p className="mt-2 text-base text-gray-600">
                  {program.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}