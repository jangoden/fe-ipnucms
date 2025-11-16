// app/tentang/sejarah/page.tsx
"use client";

import PageHeader from "@/components/layout/PageHeader";
import History from "@/components/pages/History";

export default function SejarahPage() {
  return (
    <main>
      <PageHeader
        title="Sejarah"
        breadcrumbs={[{ href: "/tentang/sejarah", label: "Sejarah" }]} 
      />
      <History />
    </main>
  );
}
