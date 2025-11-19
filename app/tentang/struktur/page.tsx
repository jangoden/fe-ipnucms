// app/tentang/struktur/page.tsx
import OrganizationalStructure from "@/components/pages/OrganizationalStructure";
import PageHeader from "@/components/layout/PageHeader";

export default function StrukturPage() {
  const crumbs = [
    { href: "/tentang", label: "Tentang" },
    { href: "/tentang/struktur", label: "Struktur Organisasi" }
  ];

  return (
    <main>
      <PageHeader 
        title="Struktur Organisasi" 
        backgroundImage="/images/head.webp" 
        crumbs={crumbs} 
      />
      <OrganizationalStructure />
    </main>
  );
}
