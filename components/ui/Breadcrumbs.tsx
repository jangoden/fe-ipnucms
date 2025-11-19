// components/ui/Breadcrumbs.tsx
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/20/solid";

type Crumb = {
  href: string;
  label: string;
};

type BreadcrumbsProps = {
  crumbs: Crumb[];
};

export default function Breadcrumbs({ crumbs }: BreadcrumbsProps) {
  return (
    <nav className="flex justify-center" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center space-x-2">
        <li>
          <Link href="/" className="text-gray-500 hover:text-gray-700">
            Beranda
          </Link>
        </li>
        {crumbs.map((crumb, index) => (
          <li key={crumb.label}>
            <div className="flex items-center">
              <ChevronRightIcon
                className="h-5 w-5 flex-shrink-0 text-gray-400"
                aria-hidden="true"
              />
              {index < crumbs.length - 1 ? (
                <Link
                  href={crumb.href}
                  className="ml-2 text-sm font-medium text-gray-500 hover:text-gray-700"
                >
                  {crumb.label}
                </Link>
              ) : (
                <span
                  aria-current="page"
                  className="ml-2 text-sm font-medium text-gray-700"
                >
                  {crumb.label}
                </span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
