"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Script from "next/script";

// Add type declaration for gtag
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: {
        event_category?: string;
        event_label?: string;
        value?: number;
      }
    ) => void;
  }
}

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    try {
      // Track form submission with Google Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_submission', {
          'event_category': 'Contact',
          'event_label': 'Contact Form',
          'value': 1
        });
      }

      // Navigate to thank you page
      router.push('/thank-you');
    } catch {
      setError("Something went wrong. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100">
      {/* Google Analytics Script */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXXXXX');
        `}
      </Script>

      <header className="py-16 text-center bg-gradient-to-b from-slate-900 to-transparent">
        <h1 className="text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-4">
          Intrik8 Labs
        </h1>
        <h2 className="text-xl text-slate-400 mb-6 font-medium">
          Norse-Inspired Intelligence Infrastructure
        </h2>
        <p className="max-w-xl mx-auto text-slate-300 text-lg">
          Welcome to Intrik8 Labs — creators of the <strong className="text-cyan-300">Yggdrasil Platform</strong>, a modular suite of enterprise-ready services built for performance, clarity, and sovereignty.
        </p>
      </header>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold mb-2 text-slate-100">Our Platform Components</h2>
            <p className="text-slate-400">Built with modern technology and ancient wisdom</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-400/20 border border-slate-700 transition">
              <h3 className="text-cyan-300 text-xl font-semibold mb-2">Yggdrasil Platform</h3>
              <p className="text-slate-300">Core framework for scalable, modular, and intelligent business systems. The world tree that connects all our services.</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-400/20 border border-slate-700 transition">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 text-xs font-semibold bg-cyan-900 text-cyan-300 rounded">Phase 1</span>
                <h3 className="text-cyan-300 text-xl font-semibold">Týr</h3>
              </div>
              <p className="text-slate-300">Authentication and Identity Management engine. Named after the god of law and justice.</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-400/20 border border-slate-700 transition">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 text-xs font-semibold bg-cyan-900 text-cyan-300 rounded">Phase 1</span>
                <h3 className="text-cyan-300 text-xl font-semibold">Heimdallr</h3>
              </div>
              <p className="text-slate-300">Observability and monitoring at the edge. The ever-vigilant guardian of our systems.</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-400/20 border border-slate-700 transition">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 text-xs font-semibold bg-cyan-900 text-cyan-300 rounded">Phase 4</span>
                <h3 className="text-cyan-300 text-xl font-semibold">Sleipnir</h3>
              </div>
              <p className="text-slate-300">Automation and integration workflows, powered by modern logic. The fastest and most reliable messenger.</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-400/20 border border-slate-700 transition">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 text-xs font-semibold bg-cyan-900 text-cyan-300 rounded">Phase 2</span>
                <h3 className="text-cyan-300 text-xl font-semibold">Mímir</h3>
              </div>
              <p className="text-slate-300">Task and ticket management built for small teams and enterprises alike. The well of wisdom for your organization.</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-400/20 border border-slate-700 transition">
              <div className="flex items-center gap-2 mb-2">
                <span className="px-2 py-1 text-xs font-semibold bg-cyan-900 text-cyan-300 rounded">Phase 4</span>
                <h3 className="text-cyan-300 text-xl font-semibold">Skuld</h3>
              </div>
              <p className="text-slate-300">Billing, invoicing, and operational intelligence — especially for logistics. The future is in good hands.</p>
            </div>
          </div>
        </section>

        <section className="max-w-lg mx-auto">
          <div className="bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-700">
            <h2 className="text-2xl font-bold text-cyan-300 mb-4 text-center">Join the Waitlist</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-slate-900 text-slate-100 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 rounded-md bg-slate-900 text-slate-100 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-md bg-slate-900 text-slate-100 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-lg bg-cyan-400 text-slate-900 font-bold text-lg shadow hover:bg-cyan-300 transition"
              >
                Join Waitlist
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-slate-500 text-sm border-t border-slate-800 mt-8">
        &copy; {new Date().getFullYear()} Intrik8 Labs &mdash; Powered by the Yggdrasil Platform. |
        <a href="https://github.com/Intrik8Labs" className="text-cyan-400 hover:underline ml-1">GitHub</a>
      </footer>
    </div>
  );
}
