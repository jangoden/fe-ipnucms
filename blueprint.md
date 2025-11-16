Blueprint Implementasi Chatbot ADK - PC IPNU CiamisProject: Mengintegrasikan Asisten Virtual (Chatbot) berbasis Google ADK ke dalam website resmi PC IPNU Ciamis.Tech Stack:Frontend: Next.js (React)Backend (Agent): Google Agent Development Kit (ADK) - PythonModel LLM: Gemini (via Google AI Studio)UI Chat: react-chatbot-kitArsitektur SistemArsitektur ini menggunakan desain terpisah (decoupled) untuk skalabilitas dan keamanan.Frontend (Next.js): Aplikasi React yang dilihat oleh pengguna. Berisi komponen UI Chat (react-chatbot-kit).Backend (ADK): Server Python (FastAPI) yang menjalankan "otak" agen (dibuat dengan adk).API Proxy (Next.js API Route): Sebuah "jembatan" aman di dalam Next.js. Frontend tidak akan pernah berbicara langsung ke Backend ADK. Frontend akan berbicara ke API Proxy, yang kemudian akan meneruskan permintaan ke Backend ADK.Alur Data:Browser Pengguna (Chat UI) ➔ Next.js API Route (/api/chat) ➔ Server ADK Python (localhost:8000) ➔ Google Gemini APIFase 0: Persiapan & PrasyaratTujuan: Memastikan semua alat, kunci, dan lingkungan pengembangan siap pakai.[x] Google API Key: Dapatkan GEMINI_API_KEY dari Google AI Studio.[x] Lingkungan Python: Pastikan Python 3.10+ ter-install.[x] Instalasi ADK: Pastikan pip install google-adk telah berhasil dijalankan.[x] Lingkungan Node.js: Pastikan Node.js (LTS) dan npm/yarn ter-install.[ ] Inisialisasi Project ADK:# Buat folder project agen
adk create ipnu_agent
# Ikuti prompt:
# - Model: gemini-1.5-flash
# - Backend: Google AI
# - Masukkan API Key Anda
[ ] Inisialisasi Project Next.js:# Buat aplikasi Next.js baru (jika belum ada)
npx create-next-app@latest web-ipnu-ciamis --ts
cd web-ipnu-ciamis
[ ] Instalasi UI Chat:npm install react-chatbot-kit
Fase 1: Pengembangan Backend (Otak Agen)Tujuan: Mengkonfigurasi agen ADK agar memiliki persona dan pengetahuan yang tepat.Edit ipnu_agent/agent.py:Ganti seluruh isi file dengan kode yang sudah disesuaikan untuk PC IPNU Ciamis.Fokus utama adalah pada properti instruction.from google.adk.agents.llm_agent import Agent

# Fase 1: Belum ada tools. Fokus pada Q&A.
# def get_jadwal_kegiatan():
#     """Mengambil jadwal kegiatan terbaru dari database."""
#     # TODO: Implementasi di Fase 2
#     return "Belum ada jadwal kegiatan terbaru."

root_agent = Agent(
    model='gemini-1.5-flash',
    name='root_agent',
    description="Asisten virtual resmi PC IPNU Ciamis",

    # INI ADALAH BAGIAN PALING PENTING
    instruction="""
    Anda adalah asisten virtual AI resmi dari PC IPNU Ciamis (Pimpinan Cabang Ikatan Pelajar Nahdlatul Ulama Kabupaten Ciamis).

    PERAN ANDA:
    Memberikan informasi yang akurat dan bermanfaat seputar PC IPNU Ciamis kepada pengunjung website. Anda adalah wajah digital organisasi.

    TUGAS ANDA:
    1.  Jawab pertanyaan umum tentang IPNU Ciamis (struktur organisasi, visi-misi, sejarah singkat, alamat sekretariat).
    2.  Berikan informasi tentang pendaftaran anggota baru (misalnya, "Bagaimana cara menjadi anggota?", "Apa itu MAKESTA?").
    3.  Jelaskan tentang kegiatan, program kerja, atau acara yang akan datang (jika Anda tahu).
    4.  Jelaskan nilai-nilai dasar IPNU (Aswaja An-Nahdliyah, dan trilogi "Belajar, Berjuang, Bertaqwa").

    GAYA BAHASA & NADA:
    -   **Bahasa:** Gunakan Bahasa Indonesia yang baik, sopan, dan santun.
    -   **Sapaan:** Awali percakapan dengan sapaan yang Islami dan organisatoris, seperti "Assalamualaikum, Rekan/Rekanita!" atau "Salam silaturahmi!"
    -   **Nada:** Profesional, ramah, informatif, dan mengayomi (sesuai citra organisasi pelajar dan santri).

    BATASAN (PENTING):
    -   JANGAN menjawab pertanyaan di luar konteks IPNU, IPPNU, NU, atau Kabupaten Ciamis.
    -   Jika Anda tidak tahu jawabannya, JANGAN mengarang atau berbohong. Katakan dengan jujur, contoh: "Maaf, saya belum memiliki informasi mengenai hal tersebut. Silakan hubungi sekretariat PC IPNU Ciamis untuk informasi lebih lanjut."
    -   Selalu jaga nama baik organisasi.
    """,

    # Mulai dengan tools kosong untuk chatbot Q&A murni
    tools=[], 
)
Uji Coba Lokal Backend:Buka terminal di dalam folder ipnu_agent.Jalankan server ADK:adk web --port 8000
Buka terminal lain dan tes menggunakan curl (atau Postman):curl -X POST http://localhost:8000/chat \
     -H "Content-Type: application/json" \
     -d '{"message": "Assalamualaikum"}'
Pastikan Anda mendapatkan balasan JSON yang sesuai dari agen.Fase 2: Pengembangan Frontend (UI Chat)Tujuan: Membangun komponen chat yang akan dilihat pengguna di Next.js.Buat Folder Komponen Chat:Buat struktur folder: web-ipnu-ciamis/app/components/Chatbot/Buat File Konfigurasi (config.js):Lokasi: app/components/Chatbot/config.jsIsi: Mengatur nama bot dan pesan sapaan awal.import { createChatBotMessage } from 'react-chatbot-kit';

const botName = "Asisten IPNU Ciamis";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Assalamualaikum! Saya ${botName}, ada yang bisa dibantu terkait PC IPNU Ciamis?`)
  ],
  // (Opsional) Tambahkan widget kustom di sini
};

export default config;
Buat File Parser Pesan (MessageParser.jsx):Lokasi: app/components/Chatbot/MessageParser.jsxIsi: Mengambil input pengguna dan mengirimkannya ke ActionProvider.'use client';
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    actions.handleMessage(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
Buat File Provider Aksi (ActionProvider.jsx):Lokasi: app/components/Chatbot/ActionProvider.jsxIsi: Logika utama frontend. Mengirim pesan ke API Proxy Next.js dan menampilkan respons.'use client';
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleMessage = async (userInput) => {
    // Tampilkan pesan "typing..."
    const botTypingMessage = createChatBotMessage("Mengetik...");
    setState((prev) => ({ ...prev, messages: [...prev.messages, botTypingMessage] }));

    try {
      // Kirim pesan ke JEMBATAN (API Proxy), BUKAN ke localhost:8000
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        throw new Error('Gagal merespons');
      }

      const data = await response.json();
      const botMessage = createChatBotMessage(data.response);

      // Ganti "typing..." dengan pesan balasan
      setState((prev) => {
        const newMessages = prev.messages.slice(0, prev.messages.length - 1);
        return { ...prev, messages: [...newMessages, botMessage] };
      });

    } catch (error) {
      console.error(error);
      const errorMessage = createChatBotMessage("Maaf, sepertinya ada gangguan. Silakan coba lagi nanti.");
      // Ganti "typing..." dengan pesan error
      setState((prev) => {
        const newMessages = prev.messages.slice(0, prev.messages.length - 1);
        return { ...prev, messages: [...newMessages, errorMessage] };
      });
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleMessage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
Buat File Styling (Chatbot.css):Lokasi: app/components/Chatbot/Chatbot.cssIsi: CSS untuk mengubah tema chat (misal: warna hijau NU)..react-chatbot-kit-chat-container {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 350px;
}

.react-chatbot-kit-chat-header {
  background-color: #007a4a; /* Warna Hijau NU */
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  font-weight: bold;
}

.react-chatbot-kit-chat-btn-send {
  background-color: #007a4a;
}

.react-chatbot-kit-chat-bot-message {
  background-color: #f0fdf4; /* Hijau muda */
  color: #111827;
}
Fase 3: Integrasi & API ProxyTujuan: Menghubungkan Frontend dan Backend secara aman.Buat API Route (Proxy):Buat file: web-ipnu-ciamis/app/api/chat/route.tsIsi: Kode ini berjalan di server Next.js, bukan di browser.import { NextResponse } from 'next/server';

// URL Backend ADK. Ambil dari environment variable
const ADK_BACKEND_URL = process.env.ADK_BACKEND_URL || 'http://localhost:8000/chat';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    // 1. Teruskan pesan ke server ADK (Python)
    const adkResponse = await fetch(ADK_BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message }),
      cache: 'no-store', // Nonaktifkan cache untuk respons dinamis
    });

    if (!adkResponse.ok) {
      const errorText = await adkResponse.text();
      console.error('ADK Server Error:', errorText);
      throw new Error(`ADK server returned ${adkResponse.status}`);
    }

    const data = await adkResponse.json();

    // 2. Kembalikan respons ADK ke Frontend (Next.js)
    return NextResponse.json({ response: data.response });

  } catch (error) {
    console.error('API Proxy Error:', error);
    return NextResponse.json(
      { response: 'Maaf, terjadi kesalahan di server kami.' },
      { status: 500 }
    );
  }
}
Konfigurasi Environment Variable:Buat file .env.local di root folder web-ipnu-ciamis.Isi:# Selama pengembangan, ini adalah URL server ADK lokal Anda
ADK_BACKEND_URL=http://localhost:8000/chat
PENTING: Tambahkan .env.local ke file .gitignore Anda!Fase 4: Tampilkan Chatbot di HalamanTujuan: Menampilkan komponen chat di website.Buat Komponen Wrapper (Klien):react-chatbot-kit adalah komponen klien. Kita perlu wrapper.Buat file: app/components/Chatbot/ChatbotClient.tsx'use client'; // Ini adalah Komponen Klien

import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './Chatbot.css'; // Impor style kustom kita

import config from './config.js';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';

const ChatbotClient = () => {
  // (Opsional) Tambahkan logic untuk show/hide chatbot
  // const [showBot, toggleBot] = useState(false);

  return (
    <div>
      {/* (Opsional) Buat tombol FAB (Floating Action Button) 
      untuk menampilkan/menyembunyikan chat
      */}

      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatbotClient;
Impor ke Layout Utama:Edit file: app/layout.tsxImpor dan render ChatbotClient agar muncul di semua halaman.import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. Impor komponen Chatbot (pastikan path-nya benar)
import ChatbotClient from "./components/Chatbot/ChatbotClient"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PC IPNU Ciamis",
  description: "Website Resmi PC IPNU Kabupaten Ciamis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}

        {/* 2. Render komponen Chatbot di sini */}
        <ChatbotClient /> 
      </body>
    </html>
  );
}
Fase 5: Pengujian End-to-End (Lokal)Tujuan: Memastikan seluruh alur bekerja sebelum deployment.Jalankan Backend:Terminal 1: cd ipnu_agent ➔ adk web --port 8000Jalankan Frontend:Terminal 2: cd web-ipnu-ciamis ➔ npm run devBuka Browser:Akses http://localhost:3000.Anda akan melihat website Next.js dengan chatbox di pojok kanan bawah.Lakukan Skenario Tes:Tes Sapaan: "Assalamualaikum", "Halo".Tes On-Topic: "Apa itu IPNU?", "Bagaimana cara daftar MAKESTA?", "Alamat sekretariat di mana?".Tes Off-Topic: "Apa resep rendang?", "Siapa presiden Indonesia?". Pastikan agen menolak dengan sopan.Tes Error: Matikan server ADK (Terminal 1) dan kirim pesan. Pastikan frontend menampilkan pesan error yang ramah ("Maaf, ada gangguan...").Fase 6: Deployment (Go Live)Tujuan: Membuat chatbot dapat diakses oleh publik.Ini adalah proses dua langkah karena kita memiliki dua server.Deploy Backend (ADK Python Server):Platform: Render (rekomendasi, ada Free Tier) atau Railway. (Anda TIDAK BISA mendeploy server Python di Vercel).Proses di Render:Push folder ipnu_agent ke repository GitHub (bisa private).Buat "New Web Service" di Render dan hubungkan ke repo tsb.Build Command: pip install -r requirements.txt (ADK sudah ada di sana).Start Command: adk web --host 0.0.0.0 --port $PORT (Penting: gunakan 0.0.0.0 dan $PORT).Environment Variables: Tambahkan GEMINI_API_KEY dengan value API Key Anda.Hasil: Anda akan mendapatkan URL publik, cth: https://ipnu-agent.onrender.comDeploy Frontend (Next.js App):Platform: Vercel (rekomendasi).Proses di Vercel:Push folder web-ipnu-ciamis ke repository GitHub.Hubungkan repo tsb ke Vercel. Vercel akan otomatis mendeteksi Next.js.PENTING: Konfigurasi Environment Variable di Vercel:Pergi ke Settings > Environment Variables.Buat variabel baru:ADK_BACKEND_URL = https_URL_BACKEND_ANDA_DARI_RENDER.com/chat (Ganti dengan URL publik dari Langkah 1).Deploy: Jalankan ulang deployment di Vercel.Selesai! Website Anda (*.vercel.app) sekarang live dengan chatbot yang terhubung ke backend di Render.Blueprint Implementasi Chatbot ADK - PC IPNU CiamisProject: Mengintegrasikan Asisten Virtual (Chatbot) berbasis Google ADK ke dalam website resmi PC IPNU Ciamis.Tech Stack:Frontend: Next.js (React)Backend (Agent): Google Agent Development Kit (ADK) - PythonModel LLM: Gemini (via Google AI Studio)UI Chat: react-chatbot-kitArsitektur SistemArsitektur ini menggunakan desain terpisah (decoupled) untuk skalabilitas dan keamanan.Frontend (Next.js): Aplikasi React yang dilihat oleh pengguna. Berisi komponen UI Chat (react-chatbot-kit).Backend (ADK): Server Python (FastAPI) yang menjalankan "otak" agen (dibuat dengan adk).API Proxy (Next.js API Route): Sebuah "jembatan" aman di dalam Next.js. Frontend tidak akan pernah berbicara langsung ke Backend ADK. Frontend akan berbicara ke API Proxy, yang kemudian akan meneruskan permintaan ke Backend ADK.Alur Data:Browser Pengguna (Chat UI) ➔ Next.js API Route (/api/chat) ➔ Server ADK Python (localhost:8000) ➔ Google Gemini APIFase 0: Persiapan & PrasyaratTujuan: Memastikan semua alat, kunci, dan lingkungan pengembangan siap pakai.[x] Google API Key: Dapatkan GEMINI_API_KEY dari Google AI Studio.[x] Lingkungan Python: Pastikan Python 3.10+ ter-install.[x] Instalasi ADK: Pastikan pip install google-adk telah berhasil dijalankan.[x] Lingkungan Node.js: Pastikan Node.js (LTS) dan npm/yarn ter-install.[ ] Inisialisasi Project ADK:# Buat folder project agen
adk create ipnu_agent
# Ikuti prompt:
# - Model: gemini-1.5-flash
# - Backend: Google AI
# - Masukkan API Key Anda
[ ] Inisialisasi Project Next.js:# Buat aplikasi Next.js baru (jika belum ada)
npx create-next-app@latest web-ipnu-ciamis --ts
cd web-ipnu-ciamis
[ ] Instalasi UI Chat:npm install react-chatbot-kit
Fase 1: Pengembangan Backend (Otak Agen)Tujuan: Mengkonfigurasi agen ADK agar memiliki persona dan pengetahuan yang tepat.Edit ipnu_agent/agent.py:Ganti seluruh isi file dengan kode yang sudah disesuaikan untuk PC IPNU Ciamis.Fokus utama adalah pada properti instruction.from google.adk.agents.llm_agent import Agent

# Fase 1: Belum ada tools. Fokus pada Q&A.
# def get_jadwal_kegiatan():
#     """Mengambil jadwal kegiatan terbaru dari database."""
#     # TODO: Implementasi di Fase 2
#     return "Belum ada jadwal kegiatan terbaru."

root_agent = Agent(
    model='gemini-1.5-flash',
    name='root_agent',
    description="Asisten virtual resmi PC IPNU Ciamis",

    # INI ADALAH BAGIAN PALING PENTING
    instruction="""
    Anda adalah asisten virtual AI resmi dari PC IPNU Ciamis (Pimpinan Cabang Ikatan Pelajar Nahdlatul Ulama Kabupaten Ciamis).

    PERAN ANDA:
    Memberikan informasi yang akurat dan bermanfaat seputar PC IPNU Ciamis kepada pengunjung website. Anda adalah wajah digital organisasi.

    TUGAS ANDA:
    1.  Jawab pertanyaan umum tentang IPNU Ciamis (struktur organisasi, visi-misi, sejarah singkat, alamat sekretariat).
    2.  Berikan informasi tentang pendaftaran anggota baru (misalnya, "Bagaimana cara menjadi anggota?", "Apa itu MAKESTA?").
    3.  Jelaskan tentang kegiatan, program kerja, atau acara yang akan datang (jika Anda tahu).
    4.  Jelaskan nilai-nilai dasar IPNU (Aswaja An-Nahdliyah, dan trilogi "Belajar, Berjuang, Bertaqwa").

    GAYA BAHASA & NADA:
    -   **Bahasa:** Gunakan Bahasa Indonesia yang baik, sopan, dan santun.
    -   **Sapaan:** Awali percakapan dengan sapaan yang Islami dan organisatoris, seperti "Assalamualaikum, Rekan/Rekanita!" atau "Salam silaturahmi!"
    -   **Nada:** Profesional, ramah, informatif, dan mengayomi (sesuai citra organisasi pelajar dan santri).

    BATASAN (PENTING):
    -   JANGAN menjawab pertanyaan di luar konteks IPNU, IPPNU, NU, atau Kabupaten Ciamis.
    -   Jika Anda tidak tahu jawabannya, JANGAN mengarang atau berbohong. Katakan dengan jujur, contoh: "Maaf, saya belum memiliki informasi mengenai hal tersebut. Silakan hubungi sekretariat PC IPNU Ciamis untuk informasi lebih lanjut."
    -   Selalu jaga nama baik organisasi.
    """,

    # Mulai dengan tools kosong untuk chatbot Q&A murni
    tools=[], 
)
Uji Coba Lokal Backend:Buka terminal di dalam folder ipnu_agent.Jalankan server ADK:adk web --port 8000
Buka terminal lain dan tes menggunakan curl (atau Postman):curl -X POST http://localhost:8000/chat \
     -H "Content-Type: application/json" \
     -d '{"message": "Assalamualaikum"}'
Pastikan Anda mendapatkan balasan JSON yang sesuai dari agen.Fase 2: Pengembangan Frontend (UI Chat)Tujuan: Membangun komponen chat yang akan dilihat pengguna di Next.js.Buat Folder Komponen Chat:Buat struktur folder: web-ipnu-ciamis/app/components/Chatbot/Buat File Konfigurasi (config.js):Lokasi: app/components/Chatbot/config.jsIsi: Mengatur nama bot dan pesan sapaan awal.import { createChatBotMessage } from 'react-chatbot-kit';

const botName = "Asisten IPNU Ciamis";

const config = {
  botName: botName,
  initialMessages: [
    createChatBotMessage(`Assalamualaikum! Saya ${botName}, ada yang bisa dibantu terkait PC IPNU Ciamis?`)
  ],
  // (Opsional) Tambahkan widget kustom di sini
};

export default config;
Buat File Parser Pesan (MessageParser.jsx):Lokasi: app/components/Chatbot/MessageParser.jsxIsi: Mengambil input pengguna dan mengirimkannya ke ActionProvider.'use client';
import React from 'react';

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    actions.handleMessage(message);
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
Buat File Provider Aksi (ActionProvider.jsx):Lokasi: app/components/Chatbot/ActionProvider.jsxIsi: Logika utama frontend. Mengirim pesan ke API Proxy Next.js dan menampilkan respons.'use client';
import React from 'react';

const ActionProvider = ({ createChatBotMessage, setState, children }) => {

  const handleMessage = async (userInput) => {
    // Tampilkan pesan "typing..."
    const botTypingMessage = createChatBotMessage("Mengetik...");
    setState((prev) => ({ ...prev, messages: [...prev.messages, botTypingMessage] }));

    try {
      // Kirim pesan ke JEMBATAN (API Proxy), BUKAN ke localhost:8000
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userInput }),
      });

      if (!response.ok) {
        throw new Error('Gagal merespons');
      }

      const data = await response.json();
      const botMessage = createChatBotMessage(data.response);

      // Ganti "typing..." dengan pesan balasan
      setState((prev) => {
        const newMessages = prev.messages.slice(0, prev.messages.length - 1);
        return { ...prev, messages: [...newMessages, botMessage] };
      });

    } catch (error) {
      console.error(error);
      const errorMessage = createChatBotMessage("Maaf, sepertinya ada gangguan. Silakan coba lagi nanti.");
      // Ganti "typing..." dengan pesan error
      setState((prev) => {
        const newMessages = prev.messages.slice(0, prev.messages.length - 1);
        return { ...prev, messages: [...newMessages, errorMessage] };
      });
    }
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            handleMessage,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
Buat File Styling (Chatbot.css):Lokasi: app/components/Chatbot/Chatbot.cssIsi: CSS untuk mengubah tema chat (misal: warna hijau NU)..react-chatbot-kit-chat-container {
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 350px;
}

.react-chatbot-kit-chat-header {
  background-color: #007a4a; /* Warna Hijau NU */
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  font-weight: bold;
}

.react-chatbot-kit-chat-btn-send {
  background-color: #007a4a;
}

.react-chatbot-kit-chat-bot-message {
  background-color: #f0fdf4; /* Hijau muda */
  color: #111827;
}
Fase 3: Integrasi & API ProxyTujuan: Menghubungkan Frontend dan Backend secara aman.Buat API Route (Proxy):Buat file: web-ipnu-ciamis/app/api/chat/route.tsIsi: Kode ini berjalan di server Next.js, bukan di browser.import { NextResponse } from 'next/server';

// URL Backend ADK. Ambil dari environment variable
const ADK_BACKEND_URL = process.env.ADK_BACKEND_URL || 'http://localhost:8000/chat';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message } = body;

    // 1. Teruskan pesan ke server ADK (Python)
    const adkResponse = await fetch(ADK_BACKEND_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: message }),
      cache: 'no-store', // Nonaktifkan cache untuk respons dinamis
    });

    if (!adkResponse.ok) {
      const errorText = await adkResponse.text();
      console.error('ADK Server Error:', errorText);
      throw new Error(`ADK server returned ${adkResponse.status}`);
    }

    const data = await adkResponse.json();

    // 2. Kembalikan respons ADK ke Frontend (Next.js)
    return NextResponse.json({ response: data.response });

  } catch (error) {
    console.error('API Proxy Error:', error);
    return NextResponse.json(
      { response: 'Maaf, terjadi kesalahan di server kami.' },
      { status: 500 }
    );
  }
}
Konfigurasi Environment Variable:Buat file .env.local di root folder web-ipnu-ciamis.Isi:# Selama pengembangan, ini adalah URL server ADK lokal Anda
ADK_BACKEND_URL=http://localhost:8000/chat
PENTING: Tambahkan .env.local ke file .gitignore Anda!Fase 4: Tampilkan Chatbot di HalamanTujuan: Menampilkan komponen chat di website.Buat Komponen Wrapper (Klien):react-chatbot-kit adalah komponen klien. Kita perlu wrapper.Buat file: app/components/Chatbot/ChatbotClient.tsx'use client'; // Ini adalah Komponen Klien

import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import './Chatbot.css'; // Impor style kustom kita

import config from './config.js';
import MessageParser from './MessageParser.jsx';
import ActionProvider from './ActionProvider.jsx';

const ChatbotClient = () => {
  // (Opsional) Tambahkan logic untuk show/hide chatbot
  // const [showBot, toggleBot] = useState(false);

  return (
    <div>
      {/* (Opsional) Buat tombol FAB (Floating Action Button) 
      untuk menampilkan/menyembunyikan chat
      */}

      <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
      />
    </div>
  );
};

export default ChatbotClient;
Impor ke Layout Utama:Edit file: app/layout.tsxImpor dan render ChatbotClient agar muncul di semua halaman.import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. Impor komponen Chatbot (pastikan path-nya benar)
import ChatbotClient from "./components/Chatbot/ChatbotClient"; 

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PC IPNU Ciamis",
  description: "Website Resmi PC IPNU Kabupaten Ciamis",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={inter.className}>
        {children}

        {/* 2. Render komponen Chatbot di sini */}
        <ChatbotClient /> 
      </body>
    </html>
  );
}
Fase 5: Pengujian End-to-End (Lokal)Tujuan: Memastikan seluruh alur bekerja sebelum deployment.Jalankan Backend:Terminal 1: cd ipnu_agent ➔ adk web --port 8000Jalankan Frontend:Terminal 2: cd web-ipnu-ciamis ➔ npm run devBuka Browser:Akses http://localhost:3000.Anda akan melihat website Next.js dengan chatbox di pojok kanan bawah.Lakukan Skenario Tes:Tes Sapaan: "Assalamualaikum", "Halo".Tes On-Topic: "Apa itu IPNU?", "Bagaimana cara daftar MAKESTA?", "Alamat sekretariat di mana?".Tes Off-Topic: "Apa resep rendang?", "Siapa presiden Indonesia?". Pastikan agen menolak dengan sopan.Tes Error: Matikan server ADK (Terminal 1) dan kirim pesan. Pastikan frontend menampilkan pesan error yang ramah ("Maaf, ada gangguan...").Fase 6: Deployment (Go Live)Tujuan: Membuat chatbot dapat diakses oleh publik.Ini adalah proses dua langkah karena kita memiliki dua server.Deploy Backend (ADK Python Server):Platform: Render (rekomendasi, ada Free Tier) atau Railway. (Anda TIDAK BISA mendeploy server Python di Vercel).Proses di Render:Push folder ipnu_agent ke repository GitHub (bisa private).Buat "New Web Service" di Render dan hubungkan ke repo tsb.Build Command: pip install -r requirements.txt (ADK sudah ada di sana).Start Command: adk web --host 0.0.0.0 --port $PORT (Penting: gunakan 0.0.0.0 dan $PORT).Environment Variables: Tambahkan GEMINI_API_KEY dengan value API Key Anda.Hasil: Anda akan mendapatkan URL publik, cth: https://ipnu-agent.onrender.comDeploy Frontend (Next.js App):Platform: Vercel (rekomendasi).Proses di Vercel:Push folder web-ipnu-ciamis ke repository GitHub.Hubungkan repo tsb ke Vercel. Vercel akan otomatis mendeteksi Next.js.PENTING: Konfigurasi Environment Variable di Vercel:Pergi ke Settings > Environment Variables.Buat variabel baru:ADK_BACKEND_URL = https_URL_BACKEND_ANDA_DARI_RENDER.com/chat (Ganti dengan URL publik dari Langkah 1).Deploy: Jalankan ulang deployment di Vercel.Selesai! Website Anda (*.vercel.app) sekarang live dengan chatbot yang terhubung ke backend di Render.