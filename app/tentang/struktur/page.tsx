// app/tentang/struktur/page.tsx
import PageHeader from "@/components/layout/PageHeader";
import OrganizationalStructure from "@/components/pages/OrganizationalStructure";

export default function StrukturPage() {
  return (
    <main>
      <PageHeader title="Struktur Organisasi" breadcrumbs={[{ href: "/tentang/struktur", label: "Struktur Organisasi" }]} />
      <OrganizationalStructure />
    </main>
  );
}
