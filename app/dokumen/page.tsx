// app/dokumen/page.tsx
import PageHeader from "@/components/layout/PageHeader";
import Documents from "@/components/pages/Documents";

export default function DokumenPage() {
  return (
    <main>
      <PageHeader title="Dokumen" breadcrumbs={[{ href: "/dokumen", label: "Dokumen" }]} />
      <Documents />
    </main>
  );
}
