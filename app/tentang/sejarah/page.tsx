// app/tentang/sejarah/page.tsx
"use client";

import History from "@/components/pages/History";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function SejarahPage() {
  const crumbs = [{ href: "/tentang/sejarah", label: "Sejarah" }];

  return (
    <main>
      <div className="bg-white py-8 text-center border-b border-gray-200">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Sejarah
          </h1>
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>
      <History />
    </main>
  );
}
