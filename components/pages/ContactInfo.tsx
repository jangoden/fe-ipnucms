// components/pages/ContactInfo.tsx
"use client";

import { MapPinIcon, PhoneIcon, EnvelopeIcon } from "@heroicons/react/24/outline";

export default function ContactInfo() {
  return (
    <section className="relative isolate bg-white py-12 sm:py-16">
      <div className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl" aria-hidden="true">
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[72.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-emerald-100 to-green-200 opacity-20"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="container mx-auto px-6 lg:px-8">
        {/* Grid container for two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          
          {/* Left Column: Contact Details */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-gray-900">Informasi Kontak</h2>
            <p className="mt-4 text-lg text-gray-600">
              Hubungi kami melalui detail di bawah ini atau isi formulir di samping.
            </p>
            
            <div className="mt-8 space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-emerald-100 rounded-lg">
                  <MapPinIcon className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Alamat</h3>
                  <p className="text-gray-600">Jl. Raya Ciamis - Banjar KM. 3</p>
                  <p className="text-gray-600">Ciamis, Jawa Barat 46211</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-emerald-100 rounded-lg">
                  <PhoneIcon className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Telepon</h3>
                  <p className="text-gray-600">(0265) 77XXXX</p>
                  <p className="text-gray-600">+62 812-3456-7890</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-emerald-100 rounded-lg">
                  <EnvelopeIcon className="h-6 w-6 text-emerald-700" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">info@ipnuciamis.or.id</p>
                  <p className="text-gray-600">pc.ipnu.ciamis@gmail.com</p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3956.9900000000002!2d108.34000000000001!3d-7.330000000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6573b2e0000001%3A0x2e6573b2e0000001!2sCiamis%2C%20Ciamis%20Regency%2C%20West%20Java!5e0!3m2!1sen!2sid!4m2!3m1!1s0x2e6573b2e0000001%3A0x2e6573b2e0000001!5e0"
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-3 bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Kirim Pesan</h2>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nama Lengkap</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  autoComplete="name"
                  className="block w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Alamat Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="email"
                  className="block w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subjek</label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  className="block w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Pesan Anda</label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="block w-full px-4 py-3 rounded-md border-gray-300 bg-gray-50 text-gray-900 shadow-sm focus:border-emerald-500 focus:ring-emerald-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-emerald-600 hover:bg-emerald-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-emerald-500 transition-colors"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
