// app/kontak/page.tsx
import ContactInfo from "@/components/pages/ContactInfo";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default function KontakPage() {
  const crumbs = [{ href: "/kontak", label: "Kontak" }];

  return (
    <main>
      <div className="bg-white py-8 text-center border-b border-gray-200">
        <div className="container mx-auto px-6">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
            Kontak Kami
          </h1>
          <Breadcrumbs crumbs={crumbs} />
        </div>
      </div>
      <ContactInfo />
    </main>
  );
}
