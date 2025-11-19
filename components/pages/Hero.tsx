import Link from "next/link";
import { Globe } from "lucide-react";
// import Image from "next/image"; // Hapus kalau tidak dipakai

export default function Hero() {
  return (
    <section
      className="bg-white overflow-hidden h-[100dvh] min-h-max flex items-center relative bg-cover bg-center"
      style={{ backgroundImage: "url('/bg-hero.webp')" }}
    >
      <div className="absolute inset-0 bg-white/70 z-0" />
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 -translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70 backdrop-filter blur-3xl opacity-50" />
      <div className="absolute bottom-0 right-0 translate-x-[54%] -translate-y-[70%] w-2/5 rounded-full aspect-square bg-emerald-600/70 backdrop-filter blur-3xl opacity-50" />

      <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-r from-emerald-400/5 right-0 -translate-y-[40%] translate-x-[40%] top-0">
        <div className="absolute inset-[10%] rounded-full bg-gradient-to-l from-emerald-400/20">
          <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-emerald-400/30" />
        </div>
      </div>

      <div className="absolute min-w-[300px] w-[48%] md:w-2/5 aspect-square rounded-full bg-gradient-to-l from-emerald-400/5 left-0 translate-y-[40%] -translate-x-[40%] bottom-0">
        <div className="absolute inset-[10%] rounded-full bg-gradient-to-r from-emerald-400/40">
          <div className="absolute inset-[20%] rounded-full bg-gradient-to-r from-emerald-400/50" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto lg:max-w-7xl w-full px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="text-center flex flex-col items-center space-y-8">

          {/* Badge */}
          <span className="inline-flex items-center gap-x-2 border border-gray-500 px-3 py-0.5 rounded-full bg-gray-50 bg-opacity-50 text-emerald-600">
            <Globe className="h-4 w-4" />
            #bertindaklocalberdampakglobal
          </span>

          {/* Headings */}
          <h1 className="font-bold max-w-4xl">
            <span
              className="block
              text-3xl
              md:text-4xl
              lg:text-5xl
              xl:text-6xl
              text-black
              [font-family:'Style_Script']"
            >
              Selamat Datang di
            </span>

            <span
              className="block mt-2
              text-4xl
              md:text-6xl
              lg:text-7xl
              xl:text-8xl
              text-emerald-800
              [font-family:'Mouse_Memoirs']"
            >
              Website Official PC IPNU Ciamis
            </span>
          </h1>

          {/* Sub-headline */}
          <p className="text-base text-black text-center max-w-xl">
            Bersama kami, para pelajar Nahdlatul Ulama di Ciamis bersatu untuk
            belajar, berjuang, dan bertaqwa, serta mengasah potensi diri demi
            masa depan bangsa yang lebih baik.
          </p>

          {/* CTA */}
          <div className="flex justify-center">
            <Link
              href="/tentang"
              className="px-8 h-12 rounded-full flex items-center gap-x-3 bg-emerald-700 text-white hover:bg-opacity-80"
            >
              Jelajahi Kiprah Kami
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 10a.75.75 0 01.75-.75h6.638L10.23 7.29a.75.75 0 111.04-1.08l3.5 3.25a.75.75 0 010 1.08l-3.5 3.25a.75.75 0 11-1.04-1.08l2.158-1.96H5.75A.75.75 0 015 10z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
            </Link>
          </div>

        </div>
      </div>

    </section>
  );
}
