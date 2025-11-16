// app/kontak/page.tsx
import PageHeader from "@/components/layout/PageHeader";
import ContactInfo from "@/components/pages/ContactInfo";

export default function KontakPage() {
  return (
    <main>
      <PageHeader title="Kontak Kami" breadcrumbs={[{ href: "/kontak", label: "Kontak Kami" }]} />
      <ContactInfo />
    </main>
  );
}
