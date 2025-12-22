
import Image from "next/image";


export default function Hero() {
  return (
    <section
      className="relative bg-cover bg-center overflow-hidden w-full h-[90dvh] lg:h-[100dvh] bg-emerald-900"
      style={{ backgroundImage: "url('/bg-herosection.png')" }}
    >
      <div className="mx-auto w-full lg:max-w-7xl px-5 sm:px-10 md:px-12 lg:px-5 h-full flex flex-col">
        <div className="flex flex-col h-full lg:grid lg:grid-cols-2 lg:gap-x-12 lg:items-center">
          {/* TEKS */}
          <div className="order-1 flex flex-col items-center space-y-6 text-center lg:self-center lg:items-start lg:text-left pt-20 pb-2 lg:py-0">
            <h1 className="w-full font-bold">
              <span className="block text-3xl text-black md:text-3xl lg:text-3xl xl:text-4xl [font-family:var(--font-tangerine)]">
                Selamat datang di
              </span>

              <span className="mt-2 block text-3xl font-bold uppercase text-emerald-800 md:text-4xl lg:text-4xl xl:text-5xl lg:whitespace-nowrap [font-family:var(--font-bebas-neue)] leading-none">
                Pimpinan Cabang
              </span>

              <span
                className="
                  mt-2 block 
                  text-3xl leading-none sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl
                  text-emerald-800
                  [font-family:var(--font-bebas-neue)]
                  whitespace-normal lg:whitespace-nowrap
                "
              >
                Ikatan Pelajar Nahdlatul Ulama
              </span>


              <span className="mt-2 md:mt-4 block text-3xl font-bold uppercase sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl [font-family:var(--font-bebas-neue)] leading-none">
                <span className="text-emerald-800">Kabupaten</span>{" "}
                <span className="text-emerald-800">Ciamis</span>
              </span>
            </h1>

            <p className="mx-auto lg:mx-0 max-w-2xl text-center lg:text-left text-sm text-black sm:text-base leading-relaxed">
              Bersama kami, para pelajar Nahdlatul Ulama di Ciamis bersatu untuk belajar, berjuang, dan bertaqwa, serta mengasah potensi diri demi masa depan bangsa yang lebih baik.
            </p>



          </div>
          {/* GAMBAR */}
          <div className="order-2 relative flex-grow lg:flex-grow-0 flex w-full justify-center lg:h-full lg:justify-end min-h-0">
            <div className="relative h-full w-full max-w-lg lg:max-w-none">
              <Image
                src="/img-hero.png"
                alt="Ilustrasi IPNU Ciamis"
                fill
                className="object-contain object-bottom drop-shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
