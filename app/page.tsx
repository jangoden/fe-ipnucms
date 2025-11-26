// app/page.tsx
"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Hero from "@/components/pages/Hero";
import About from "@/components/pages/About";
import CadreDatabase from "@/components/pages/CadreDatabase";
import Programs from "@/components/pages/Programs";
import LatestBlog from "@/components/pages/LatestBlog"; // New import
import Gallery from "@/components/pages/Gallery";
import CtaSection from "@/components/pages/CtaSection";
import Stats from "@/components/pages/Stats";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 50,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <CadreDatabase />
      <Programs />
      <LatestBlog /> {/* New component */}

      <Gallery />
      <CtaSection />
    </main>
  );
}
