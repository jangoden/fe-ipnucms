import { NextResponse } from 'next/server';

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
