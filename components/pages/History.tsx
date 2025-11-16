// components/History.tsx
"use client";

import Image from "next/image";

export default function History() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Sejarah PC IPNU CIAMIS
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Perjalanan panjang organisasi dalam membentuk karakter pelajar.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-4xl text-gray-700 leading-relaxed">
          <p className="mb-6">
            Ikatan Pelajar Nahdlatul Ulama (IPNU) di Kabupaten Ciamis memiliki sejarah yang kaya dan dinamis, sejalan dengan perkembangan Nahdlatul Ulama di tingkat lokal maupun nasional. Didirikan sebagai wadah bagi pelajar NU, PC IPNU Ciamis telah menjadi garda terdepan dalam upaya kaderisasi, pendidikan, dan pengabdian masyarakat di kalangan pelajar.
          </p>
          <p className="mb-6">
            Sejak awal berdirinya, PC IPNU Ciamis aktif menyelenggarakan berbagai kegiatan yang bertujuan untuk meningkatkan kualitas intelektual, spiritual, dan sosial anggotanya. Mulai dari diskusi rutin, pelatihan kepemimpinan (Makesta, Lakmud, Lakut), hingga kegiatan sosial kemasyarakatan, semua dirancang untuk membentuk pelajar yang berkarakter, berwawasan luas, dan berpegang teguh pada nilai-nilai Ahlussunnah wal Jamaah.
          </p>
          <div className="my-8 text-center">
            <Image
              src="/images/portofolio.jpg" // Placeholder image
              alt="Sejarah IPNU Ciamis"
              width={800}
              height={450}
              className="rounded-lg shadow-lg mx-auto"
            />
            <p className="mt-2 text-sm text-gray-500">Kegiatan awal PC IPNU Ciamis (ilustrasi)</p>
          </div>
          <p className="mb-6">
            Tantangan zaman tidak menyurutkan semangat juang PC IPNU Ciamis. Organisasi ini terus beradaptasi dengan perubahan, memanfaatkan teknologi, dan memperluas jangkauan dakwahnya. Dengan semangat Belajar, Berjuang, Bertaqwa, PC IPNU Ciamis berkomitmen untuk terus mencetak generasi muda yang siap menghadapi masa depan, menjaga tradisi, dan menjadi agen perubahan positif bagi bangsa dan agama.
          </p>
          <p>
            Berbagai tokoh dan alumni PC IPNU Ciamis telah memberikan kontribusi signifikan di berbagai bidang, baik di pemerintahan, pendidikan, maupun masyarakat. Hal ini membuktikan bahwa proses kaderisasi yang dilakukan oleh organisasi ini telah berhasil melahirkan pemimpin-pemimpin masa depan.
          </p>
        </div>
      </div>
    </section>
  );
}
