"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { motion, AnimatePresence } from "framer-motion";

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
  const navRef = useRef<HTMLElement>(null); // Ref for desktop nav to handle outside clicks
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Handle Scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle Route Change
  useEffect(() => {
    setOpen(false);
    setDropdownOpen(null);
  }, [pathname]);

  // Handle Outside Click for Mobile Menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        open
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [open]);

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
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-primary shadow-lg border-b border-primary-light/20 py-2"
          : "bg-primary py-4"
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          href="/"
          aria-label="Beranda"
          className="flex shrink-0 items-center gap-2 transition-opacity duration-200 hover:opacity-90"
        >
          <Image
            src="/images/logo.svg"
            alt="Logo PC IPNU CIAMIS"
            width={150}
            height={150}
            className="h-[150px] w-[150px] object-contain"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-1">
          <nav
            ref={navRef}
            className="flex items-center gap-1 p-1 rounded-full bg-black/10 backdrop-blur-sm border border-white/5"
            aria-label="Navigasi Utama"
          >
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.children && setDropdownOpen(link.name)}
                onMouseLeave={() => link.children && setDropdownOpen(null)}
              >
                {link.children ? (
                  <button
                    onClick={() => handleDropdownToggle(link.name)}
                    className={clsx(
                      "flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                      "outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      isActive(link.href) ||
                        link.children.some((child) => isActive(child.href)) ||
                        dropdownOpen === link.name
                        ? "bg-white text-primary-dark shadow-sm"
                        : "text-white hover:bg-white/10"
                    )}
                  >
                    {link.name}
                    <svg
                      className={clsx(
                        "h-4 w-4 transition-transform duration-200",
                        dropdownOpen === link.name ? "rotate-180" : "rotate-0"
                      )}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                ) : (
                  <Link
                    href={link.href}
                    className={clsx(
                      "flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                      "outline-none focus-visible:ring-2 focus-visible:ring-accent",
                      isActive(link.href)
                        ? "bg-white text-primary-dark shadow-sm"
                        : "text-white hover:bg-white/10"
                    )}
                  >
                    {link.name}
                  </Link>
                )}

                {/* Desktop Dropdown */}
                <AnimatePresence>
                  {link.children && dropdownOpen === link.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      className="absolute left-0 top-full pt-2 w-48 z-50"
                    >
                      <div className="rounded-xl bg-white shadow-xl ring-1 ring-black/5 overflow-hidden p-1">
                        {link.children.map((child) => (
                          <Link
                            key={child.name}
                            href={child.href}
                            className={clsx(
                              "block px-4 py-2 text-sm rounded-lg transition-colors",
                              isActive(child.href)
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-gray-700 hover:bg-gray-50 hover:text-primary"
                            )}
                          >
                            {child.name}
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* CTA Button */}
          <Link
            href="/login"
            className="ml-3 px-5 py-2.5 rounded-full bg-accent hover:bg-accent-hover text-white text-sm font-bold shadow-lg shadow-accent/20 transition-all duration-200 hover:shadow-accent/40 active:scale-95 hidden lg:flex"
          >
            Sirekan
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden relative z-50 p-2 text-white hover:bg-white/10 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-white/50"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center gap-1.5">
            <motion.span
              animate={open ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-white rounded-full block origin-center transition-all"
            />
            <motion.span
              animate={open ? { opacity: 0 } : { opacity: 1 }}
              className="w-full h-0.5 bg-white rounded-full block transition-all"
            />
            <motion.span
              animate={open ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
              className="w-full h-0.5 bg-white rounded-full block origin-center transition-all"
            />
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
          />
        )}
      </AnimatePresence>

      {/* Mobile Menu Panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            ref={mobileMenuRef}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-[280px] bg-white z-50 shadow-2xl md:hidden overflow-y-auto"
          >
            <div className="p-6 flex flex-col h-full">
              <div className="flex justify-between items-center mb-8">
                <span className="text-xl font-bold text-primary-dark">Menu</span>
                <button
                  onClick={() => setOpen(false)}
                  className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-100"
                >
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.children ? (
                      <div className="group">
                        <button
                          onClick={() => handleDropdownToggle(link.name)}
                          className={clsx(
                            "w-full flex justify-between items-center p-3 rounded-xl text-left transition-colors",
                            isActive(link.href) || dropdownOpen === link.name
                              ? "bg-primary/5 text-primary font-semibold"
                              : "text-gray-700 hover:bg-gray-50"
                          )}
                        >
                          {link.name}
                          <svg
                            className={clsx(
                              "w-4 h-4 transition-transform",
                              dropdownOpen === link.name ? "rotate-180" : ""
                            )}
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>
                        <AnimatePresence>
                          {dropdownOpen === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden bg-gray-50 rounded-b-xl"
                            >
                              <div className="p-2 space-y-1">
                                {link.children.map((child) => (
                                  <Link
                                    key={child.name}
                                    href={child.href}
                                    onClick={() => setOpen(false)}
                                    className={clsx(
                                      "block p-3 rounded-lg text-sm transition-colors",
                                      isActive(child.href)
                                        ? "text-primary font-medium bg-white shadow-sm"
                                        : "text-gray-600 hover:text-primary hover:bg-white/50"
                                    )}
                                  >
                                    {child.name}
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        onClick={() => setOpen(false)}
                        className={clsx(
                          "block p-3 rounded-xl text-base transition-colors",
                          isActive(link.href)
                            ? "bg-primary/5 text-primary font-semibold"
                            : "text-gray-700 hover:bg-gray-50"
                        )}
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-6 border-t border-gray-100">
                <Link
                  href="/login"
                  onClick={() => setOpen(false)}
                  className="block w-full text-center py-3 rounded-xl bg-primary text-white font-bold shadow-lg shadow-primary/30 active:scale-95 transition-all"
                >
                  Sirekan Login
                </Link>
                <p className="text-center text-xs text-gray-400 mt-4">
                  &copy; 2025 PC IPNU Ciamis
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
