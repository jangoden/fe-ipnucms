// app/kontak/page.tsx
import ContactInfo from "@/components/pages/ContactInfo";
import PageHeader from "@/components/layout/PageHeader";

export default function KontakPage() {
  const crumbs = [
    { href: "/kontak", label: "Kontak" },
  ];

  return (
    <main>
      <PageHeader 
        title="Kontak Kami" 
        backgroundImage="/images/head.webp" 
        crumbs={crumbs} 
      />
      <ContactInfo />
    </main>
  );
}
