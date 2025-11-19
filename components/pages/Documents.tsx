// components/Documents.tsx
"use client";

import { DocumentTextIcon, ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const documentList = [
  {
    name: "AD/ART IPNU",
    description: "Anggaran Dasar dan Anggaran Rumah Tangga Ikatan Pelajar Nahdlatul Ulama.",
    link: "#", // Placeholder link
  },
  {
    name: "Pedoman Kaderisasi",
    description: "Panduan lengkap proses kaderisasi di lingkungan IPNU.",
    link: "#", // Placeholder link
  },
  {
    name: "Rencana Kerja PC IPNU CIAMIS 2024-2026",
    description: "Dokumen rencana kerja periode kepengurusan saat ini.",
    link: "#", // Placeholder link
  },
  {
    name: "Laporan Pertanggungjawaban (LPJ) Konfercab",
    description: "Laporan kegiatan dan keuangan pada Konferensi Cabang terakhir.",
    link: "#", // Placeholder link
  },
];

export default function Documents() {
  return (
    <section className="py-12 sm:py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Akses berbagai dokumen resmi dan panduan organisasi.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl space-y-6">
          {documentList.map((doc, index) => (
            <div
              key={index}
              className="flex items-center justify-between rounded-lg bg-white p-6 shadow-md transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex items-center gap-4">
                <DocumentTextIcon className="h-8 w-8 text-emerald-600" />
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {doc.name}
                  </h3>
                  <p className="text-sm text-gray-600">{doc.description}</p>
                </div>
              </div>
              <Link
                href={doc.link}
                className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-4 py-2 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-emerald-600"
              >
                Unduh
                <ArrowDownTrayIcon className="h-5 w-5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
