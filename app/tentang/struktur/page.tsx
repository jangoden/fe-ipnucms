// app/tentang/struktur/page.tsx
import OrganizationalStructure from "@/components/pages/OrganizationalStructure";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function StrukturPage() {
  const crumbs = [{ href: "/tentang/struktur", label: "Struktur Organisasi" }];

  return (
    <main>
      <div className="bg-white py-8 text-center border-b border-gray-200">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Struktur Organisasi
          </h1>
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>
      <OrganizationalStructure />
    </main>
  );
}
