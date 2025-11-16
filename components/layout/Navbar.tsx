"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavItem = {
  name: string;
  href: string;
  children?: NavItem[];
};

const navLinks: NavItem[] = [
  { name: "Beranda", href: "/" },
  {
    name: "Tentang",
    href: "/tentang",
    children: [
      { name: "Sejarah", href: "/tentang/sejarah" },
      { name: "Visi & Misi", href: "/tentang/visi-misi" },
      { name: "Struktur", href: "/tentang/struktur" },
    ],
  },
  {
    name: "Update",
    href: "/update",
    children: [
      { name: "Artikel", href: "/update/artikel" },
      { name: "Galeri", href: "/update/galeri" },
    ],
  },
  { name: "Dokumen", href: "/dokumen" },
  { name: "Kontak", href: "/kontak" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false); // Mobile menu open state
  const [scrolled, setScrolled] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState<string | null>(null); // Track which dropdown is open
  const navRef = useRef<HTMLElement>(null); // Satu ref untuk seluruh nav desktop

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false); // Close mobile menu on route change
    setDropdownOpen(null); // Close dropdowns on route change
  }, [pathname]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownOpen) return;
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setDropdownOpen(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  const handleDropdownToggle = (name: string) => {
    setDropdownOpen(dropdownOpen === name ? null : name);
  };

  return (
    <header
  className={clsx(
    "fixed inset-x-0 top-0 z-50 transition-all duration-300", // <-- h-[var(--header-h)] DIHAPUS
    scrolled
      ? "bg-emerald-800/95 backdrop-blur-md shadow-md border-b border-black/10"
      : "bg-emerald-700/95 backdrop-blur-md"
  )}
>
  <div className="mx-auto flex max-w-7xl items-center justify-between px-3 sm:px-6 py-3"> 
  {/* ^^^^^ h-full DIHAPUS, py-3 DITAMBAHKAN                 ^^^^ */}
    
    {/* Logo */}
    <Link
      href="/"
      aria-label="Beranda"
      className="flex shrink-0 items-center gap-2"
    >
      <Image
        src="/images/logo.svg"
        alt="Logo PC IPNU CIAMIS"
        width={30}  // Sesuaikan
        height={30} // Sesuaikan
        className="h-9 w-auto" // Coba h-9 (36px)
      />
      </Link>

        {/* Desktop nav */}
        <nav
          ref={navRef}
          className="hidden items-center gap-2 md:flex" // <-- SUDAH DIUPDATE (Container pil dihilangkan)
          aria-label="Navigasi Utama"
        >
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.name} className="relative">
                <button
                  onClick={() => handleDropdownToggle(link.name)}
                  className={clsx(
                    "flex items-center", // <-- DIUPDATE: Menjajarkan teks dan panah
                    "relative rounded-full px-4 py-2 text-sm transition-all duration-200",
                    "outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/50",
                    (isActive(link.href) ||
                      link.children.some((child) => isActive(child.href)) ||
                      dropdownOpen === link.name)
                      ? "bg-white text-emerald-900 font-semibold"
                      : "text-white/90 hover:text-white hover:bg-white/15"
                  )}
                >
                  {link.name}
                  <svg
                    className={clsx(
                      "ml-2 h-4 w-4 transform transition-transform duration-200", // <-- DIUPDATE: 'inline-block' dihapus
                      dropdownOpen === link.name ? "rotate-180" : "rotate-0"
                    )}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {dropdownOpen === link.name && (
                  <div className="absolute left-0 top-full mt-2 w-48 rounded-lg bg-white/95 backdrop-blur-sm shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none overflow-hidden animate-fade-in-up">
                    <div className="py-1">
                      {link.children.map((childLink) => (
                        <Link
                          key={childLink.name}
                          href={childLink.href}
                          className={clsx(
                            "block px-4 py-2 text-sm text-gray-700 transition-colors duration-200 hover:bg-emerald-100 hover:text-emerald-800",
                            isActive(childLink.href) &&
                              "bg-emerald-50 font-semibold text-emerald-700"
                          )}
                          onClick={() => setDropdownOpen(null)}
                        >
                          {childLink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "relative rounded-full px-4 py-2 text-sm transition-all duration-200",
                  "outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/50",
                  isActive(link.href)
                    ? "bg-white text-emerald-900 font-semibold"
                    : "text-white/90 hover:text-white hover:bg-white/15"
                )}
              >
                {link.name}
              </Link>
            )
          )}
        </nav>

        {/* CTA + tombol mobile */}
        <div className="flex items-center gap-3">


          <button
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative grid h-10 w-10 place-items-center rounded-full border border-white/25 bg-white/15 text-white outline-none backdrop-blur-sm focus-visible:ring-2 focus-visible:ring-emerald-300/50 md:hidden"
          >
            {open ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M6 6l12 12M18 6L6 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 6h16M4 12h16M4 18h16"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile overlay + panel */}
      <div
        className={clsx(
          "md:hidden",
          open ? "pointer-events-auto" : "pointer-events-none"
        )}
      >
        <div
          onClick={() => setOpen(false)}
          className={clsx(
            "fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300",
            open ? "opacity-100" : "opacity-0"
          )}
        />
        <div
          className={clsx(
            "absolute left-0 top-[var(--header-h)] z-50 w-full origin-top bg-emerald-700 text-white shadow-xl transition-transform duration-300",
            open ? "scale-y-100" : "scale-y-0"
          )}
        >
          <nav className="flex flex-col gap-1 p-4" aria-label="Menu Mobile">
            {navLinks.map((link) =>
              link.children ? (
                <div key={link.name}>
                  <button
                    onClick={() => handleDropdownToggle(link.name)}
                    className={clsx(
                      "flex w-full items-center justify-between rounded-lg px-4 py-3 text-base transition-colors duration-200",
                      "outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/50",
                      (isActive(link.href) ||
                        link.children.some((child) => isActive(child.href)) ||
                        dropdownOpen === link.name)
                        ? "bg-white/20"
                        : "hover:bg-white/10 text-white/95"
                    )}
                  >
                    {link.name}
                    <svg
                      className={clsx(
                        "ml-2 h-4 w-4 transform transition-transform duration-200",
                        dropdownOpen === link.name ? "rotate-180" : "rotate-0"
                      )}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {dropdownOpen === link.name && (
                    <div className="mt-1 flex flex-col gap-1 pl-4 animate-fade-in-down">
                      {link.children.map((childLink) => (
                        <Link
                          key={childLink.name}
                          href={childLink.href}
                          onClick={() => {
                            setOpen(false);
                            setDropdownOpen(null);
                          }}
                          className={clsx(
                            "rounded-lg px-4 py-3 text-sm transition-colors duration-200",
                            "outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/50",
                            isActive(childLink.href)
                              ? "bg-white/20"
                              : "hover:bg-white/10 text-white/95"
                          )}
                        >
                          {childLink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={clsx(
                    "rounded-lg px-4 py-3 text-base transition-colors duration-200",
                    "outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/50",
                    isActive(link.href)
                      ? "bg-white/20"
                      : "hover:bg-white/10 text-white/95"
                  )}
                >
                  {link.name}
                </Link>
              )
            )}

          </nav>
        </div>
      </div>
    </header>
  );
}