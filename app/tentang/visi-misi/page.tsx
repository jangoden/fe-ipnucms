// app/tentang/visi-misi/page.tsx
import PageHeader from "@/components/layout/PageHeader";
import VisionMission from "@/components/pages/VisionMission";

export default function VisiMisiPage() {
  return (
    <main>
      <PageHeader title="Visi & Misi" breadcrumbs={[{ href: "/tentang/visi-misi", label: "Visi & Misi" }]} />
      <VisionMission />
    </main>
  );
}
