// app/tentang/visi-misi/page.tsx
import VisionMission from "@/components/pages/VisionMission";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function VisiMisiPage() {
  const crumbs = [{ href: "/tentang/visi-misi", label: "Visi & Misi" }];

  return (
    <main>
      <div className="bg-white py-8 text-center border-b border-gray-200">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Visi & Misi
          </h1>
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>
      <VisionMission />
    </main>
  );
}
