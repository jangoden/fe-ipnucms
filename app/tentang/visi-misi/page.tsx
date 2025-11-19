// app/tentang/visi-misi/page.tsx
import VisionMission from "@/components/pages/VisionMission";
import PageHeader from "@/components/layout/PageHeader";

export default function VisiMisiPage() {
  const crumbs = [
    { href: "/tentang", label: "Tentang" },
    { href: "/tentang/visi-misi", label: "Visi & Misi" }
  ];

  return (
    <main>
      <PageHeader 
        title="Visi & Misi" 
        backgroundImage="/images/head.webp" 
        crumbs={crumbs} 
      />
      <VisionMission />
    </main>
  );
}
