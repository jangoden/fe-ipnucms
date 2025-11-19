// components/layout/PageHeader.tsx
import Breadcrumbs from "@/components/ui/Breadcrumbs";

interface PageHeaderProps {
    title: string;
    backgroundImage: string;
    crumbs: { href: string; label: string }[];
}

export default function PageHeader({ title, backgroundImage, crumbs }: PageHeaderProps) {
    return (
        <section 
            className="relative h-64 sm:h-80 flex items-center justify-center bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black/50" />
            <div className="relative z-10 text-center text-white px-4">
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">{title}</h1>
                <div className="mt-4">
                    <Breadcrumbs crumbs={crumbs} />
                </div>
            </div>
        </section>
    );
}
