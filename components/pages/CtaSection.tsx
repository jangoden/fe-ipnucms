const CtaSection = () => {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5">
        <div className="bg-emerald-700 rounded-lg p-8 lg:p-12 flex flex-col md:flex-row items-center justify-center text-center md:text-left md:justify-start md:items-start gap-8">
          <div className="md:w-2/5">
            <h1 className="text-2xl sm:text-3xl lg:text-4xl text-white font-display font-bold leading-tight">
              Wujudkan Pelajar Berkarakter, Ikuti MAKESTA IPNU!
            </h1>
          </div>
          <div className="flex flex-col md:flex-1 space-y-8">
            <p className="text-gray-200">
              Jadilah bagian dari gerakan pelajar Nahdlatul Ulama yang berintegritas, berilmu, dan berakhlak mulia. Bersama kami, kembangkan diri, perluas jaringan, dan berkontribusi nyata bagi bangsa. MAKESTA adalah langkah awalmu!
            </p>
            <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
              <a
                href="/makesta" // Assuming a MAKESTA registration page
                className="h-12 px-5 rounded-md flex items-center justify-center bg-white text-emerald-700 font-semibold hover:bg-emerald-50 transition-colors duration-200"
              >
                Daftar MAKESTA Sekarang!
              </a>
              <a
                href="/tentang" // Link to the About page
                className="h-12 px-5 rounded-md flex items-center justify-center border border-white text-white font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                Pelajari IPNU Lebih Lanjut
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
