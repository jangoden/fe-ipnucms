// app/dokumen/page.tsx
import Documents from "@/components/pages/Documents";
import PageHeader from "@/components/layout/PageHeader";

export default function DokumenPage() {
  const crumbs = [
    { href: "/dokumen", label: "Dokumen" },
  ];

  return (
    <main>
      <PageHeader 
        title="Dokumen Organisasi" 
        backgroundImage="/images/head.webp" 
        crumbs={crumbs} 
      />
      <Documents />
    </main>
  );
}
