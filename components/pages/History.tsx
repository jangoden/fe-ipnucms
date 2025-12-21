// components/pages/History.tsx
"use client";

import {

  ArrowTrendingUpIcon,
  BeakerIcon,
  FlagIcon,
  InformationCircleIcon,
  ScaleIcon,
  SparklesIcon,
  UsersIcon
} from '@heroicons/react/24/outline';

const timelineData = [
  {
    id: 1,
    title: "Latar Belakang Berdiri",
    icon: InformationCircleIcon,
    content: [
      "Pada awal tahun 1950-an, para pelajar NU di berbagai daerah mulai merasakan perlunya sebuah organisasi yang mampu:",
      "• Mewadahi kegiatan pelajar NU",
      "• Mengarahkan potensi pelajar agar tidak terbawa arus politik",
      "• Menjadi kaderisasi formal bagi Nahdlatul Ulama.",
      "Saat itu, organisasi kepemudaan NU seperti Ansor sudah berkembang, tetapi belum ada wadah khusus untuk membina pelajar."
    ],
  },
  {
    id: 2,
    title: "Berdirinya IPNU",
    icon: FlagIcon,
    content: [
      "<strong>Tanggal berdiri:</strong> 24 Februari 1954",
      "<strong>Tempat:</strong> Kota Surakarta (Solo), Jawa Tengah",
      "IPNU lahir saat Konferensi Pelajar NU se-Indonesia. Tokoh penggagas awal di antaranya KH. Muhammad Ilyas, KH. Imam Syafi'i, dan aktivis pelajar lainnya.",
      "Organisasi ini didirikan sebagai badan otonom NU yang berorientasi pada pengembangan pelajar, kaderisasi, pendidikan, dan dakwah."
    ],
  },
  {
    id: 3,
    title: "Tujuan Awal Pembentukan",
    icon: ScaleIcon,
    content: [
      "IPNU dibentuk untuk:",
      "• Membina pelajar NU agar berakhlak dan berpengetahuan",
      "• Menguatkan paham Ahlussunnah wal Jama’ah an-Nahdliyah",
      "• Mempersiapkan generasi muda NU menjadi kader bangsa dan umat",
      "• Melaksanakan kegiatan sosial, pendidikan, dan kebangsaan."
    ],
  },
  {
    id: 4,
    title: "Perkembangan Organisasi",
    icon: ArrowTrendingUpIcon,
    content: [
      "<strong>1954–1960-an:</strong> Penguatan struktur organisasi hingga tingkat komisariat sekolah dan pesantren.",
      "<strong>1970–1980-an:</strong> Fokus pada kegiatan kaderisasi, seperti LAKMUD dan LAKUT.",
      "<strong>1990-an:</strong> Pengembangan program intelektual dan kerja sama dengan organisasi lain.",
      "<strong>2000–sekarang:</strong> Modernisasi organisasi, digitalisasi, dan penguatan karakter pelajar."
    ],
  },
  {
    id: 5,
    title: "Munculnya IPPNU",
    icon: UsersIcon,
    content: [
      "Pada tahun 1955, setahun setelah IPNU berdiri, pelajar putri NU membentuk organisasi sendiri bernama IPPNU (Ikatan Pelajar Putri Nahdlatul Ulama) yang bergerak bersama IPNU dalam pembinaan pelajar putra-putri NU."
    ],
  },
  {
    id: 6,
    title: "Identitas Organisasi",
    icon: BeakerIcon,
    content: [
      "<strong>Asas:</strong> Ahlussunnah wal Jama’ah",
      "<strong>Sifat:</strong> Organisasi pelajar yang bersifat sosial, kemasyarakatan, dan dakwah",
      "<strong>Mars:</strong> “Bernaung di bawah panjimu yang suci…”",
      "<strong>Lambang:</strong> Perisai hijau dengan bintang sembilan (simbol NU)"
    ],
  },
  {
    id: 7,
    title: "Peran IPNU Saat Ini",
    icon: SparklesIcon,
    content: [
      "IPNU berperan dalam:",
      "• Membina pelajar di sekolah dan pesantren",
      "• Mengembangkan pendidikan karakter, literasi, dan teknologi",
      "• Menumbuhkan jiwa nasionalisme dan religius",
      "• Menjadi jembatan kaderisasi menuju GP Ansor, PMII, dan struktur NU lainnya."
    ],
  }
];

export default function History() {
  return (
    <section className="bg-gray-50 py-20 sm:py-28">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Main Header */}
        <div className="mx-auto max-w-4xl text-center mb-16" data-aos="fade-up">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Jejak Langkah Sejarah IPNU
          </h1>
          <p className="mt-4 text-xl leading-8 text-gray-600">
            Perjalanan panjang organisasi dalam membentuk dan membina pelajar Nahdlatul Ulama.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* The vertical line */}
          <div className="absolute left-5 top-0 h-full w-0.5 bg-emerald-200" aria-hidden="true"></div>

          {timelineData.map((item, index) => (
            <div key={item.id} className="relative pl-14 pb-12" data-aos="fade-up" data-aos-delay={index * 100}>
              {/* Icon on the line */}
              <div className="absolute left-0 top-1 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500 ring-8 ring-gray-50">
                <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
              </div>

              {/* Content Card */}
              <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-800 mb-3">{item.title}</h2>
                <div className="space-y-3 text-gray-600">
                  {item.content.map((text, i) => (
                    <p key={i} dangerouslySetInnerHTML={{ __html: text.startsWith('•') ? `<span class="ml-4">${text}</span>` : text }} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
