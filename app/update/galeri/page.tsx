// app/update/galeri/page.tsx
import Gallery from "@/components/pages/Gallery";
import PageHeader from "@/components/layout/PageHeader";

export default function GaleriPage() {
  const crumbs = [
    { href: "/update", label: "Update" },
    { href: "/update/galeri", label: "Galeri" }
  ];

  return (
    <main>
      <PageHeader 
        title="Galeri Kegiatan" 
        backgroundImage="/images/head.webp" 
        crumbs={crumbs} 
      />
      <Gallery />
    </main>
  );
}
