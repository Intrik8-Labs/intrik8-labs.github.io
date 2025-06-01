"use client";

import { useEffect } from 'react';
import Link from 'next/link';

export default function ThankYou() {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://www.googletagmanager.com/gtag/js?id=G-8R0XVMGR8G';
    script1.async = true;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-8R0XVMGR8G');
    `;
    document.head.appendChild(script2);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold text-cyan-300 mb-4">Thank You!</h1>
      <p className="text-xl text-slate-300 text-center max-w-lg">
        We&apos;re not quite ready to show off our project yet, but we appreciate your interest. We&apos;ll be in touch soon!
      </p>
      <Link href="/" className="mt-8 px-6 py-2 rounded-lg bg-cyan-400 text-slate-900 font-bold text-lg shadow hover:bg-cyan-300 transition">
        Return Home
      </Link>
    </div>
  );
}