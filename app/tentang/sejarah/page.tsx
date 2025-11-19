// app/tentang/sejarah/page.tsx
"use client";

import History from "@/components/pages/History";
import PageHeader from "@/components/layout/PageHeader";

export default function SejarahPage() {
  const crumbs = [
    { href: "/tentang", label: "Tentang" },
    { href: "/tentang/sejarah", label: "Sejarah" }
  ];

  return (
    <main>
      <PageHeader 
        title="Sejarah Organisasi" 
        backgroundImage="/images/head.webp" 
        crumbs={crumbs} 
      />
      <History />
    </main>
  );
}
