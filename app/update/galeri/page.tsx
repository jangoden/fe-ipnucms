// app/update/galeri/page.tsx
import PageHeader from "@/components/layout/PageHeader";
import Gallery from "@/components/pages/Gallery";

export default function GaleriPage() {
  return (
    <main>
      <PageHeader title="Galeri" breadcrumbs={[{ href: "/update/galeri", label: "Galeri" }]} />
      <Gallery />
    </main>
  );
}
