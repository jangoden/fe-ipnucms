// components/Services.tsx
"use client";

import {
  UserGroupIcon,
  AcademicCapIcon,
  BuildingLibraryIcon,
  MegaphoneIcon,
  CheckIcon,
} from "@heroicons/react/24/outline";

// Tipe data diubah untuk menggunakan komponen Ikon
type Program = {
  Icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
};

// Data program kerja IPNU
const programsData: Program[] = [
  {
    Icon: UserGroupIcon,
    title: "Kaderisasi",
    description:
      "Menyelenggarakan pelatihan dan jenjang kaderisasi formal seperti MAKESTA, LAKMUD, dan LAKUT untuk mencetak kader yang militan dan berkarakter.",
    features: [
      "Masa Kesetiaan Anggota (MAKESTA)",
      "Latihan Kader Muda (LAKMUD)",
      "Latihan Kader Utama (LAKUT)",
      "Pelatihan dan Workshop Kepemimpinan",
    ],
  },
  {
    Icon: AcademicCapIcon,
    title: "Pendidikan dan Dakwah",
    description:
      "Menguatkan pemahaman Islam Ahlussunnah wal Jamaah di kalangan pelajar melalui kajian, seminar, dan kegiatan dakwah yang kreatif.",
    features: [
      "Kajian Rutin Aswaja",
      "Seminar Pendidikan Islam",
      "Lomba-lomba Keagamaan",
      "Penerbitan Buletin Dakwah",
    ],
  },
  {
    Icon: BuildingLibraryIcon,
    title: "Pengembangan Organisasi",
    description:
      "Memperkuat struktur dan manajemen organisasi di semua tingkatan, dari Pimpinan Cabang hingga Pimpinan Komisariat.",
    features: [
      "Rapat Kerja dan Musyawarah",
      "Penguatan Database Anggota",
      "Pengembangan Aset Organisasi",
      "Peningkatan Tertib Administrasi",
    ],
  },
  {
    Icon: MegaphoneIcon,
    title: "Jaringan dan Advokasi",
    description:
      "Membangun kerjasama dengan berbagai pihak dan mengadvokasi kepentingan pelajar, baik di bidang pendidikan maupun sosial.",
    features: [
      "Audiensi dengan Pemerintah Daerah",
      "Kerjasama dengan OKP Lain",
      "Advokasi Kebijakan Pendidikan",
      "Bakti Sosial dan Pengabdian Masyarakat",
    ],
  },
];

export default function Programs() {
  return (
    <section id="programs-page" className="bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-6 text-center">
        <div data-aos="fade-up">
          <p className="mb-3 font-semibold text-emerald-600">
            Apa yang Kami Lakukan
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
            Program Kerja Unggulan
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Berikut adalah beberapa fokus utama kegiatan kami dalam rangka mencapai visi dan misi organisasi.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-2">
          {programsData.map((program, index) => (
            <div
              key={index}
              className="flex transform flex-col rounded-xl border border-gray-200 bg-white p-8 text-left shadow-lg transition-all duration-300 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-500/10"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="mb-5 flex items-center gap-4">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-lg bg-emerald-100">
                  <program.Icon className="h-8 w-8 text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">
                  {program.title}
                </h3>
              </div>
              <p className="mb-6 flex-grow text-gray-600">
                {program.description}
              </p>

              <ul className="space-y-3 text-left text-gray-700">
                {program.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-center gap-3">
                    <CheckIcon className="h-5 w-5 flex-shrink-0 text-emerald-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
