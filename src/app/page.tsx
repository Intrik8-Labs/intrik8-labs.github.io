"use client";

import { useState, useEffect } from "react";
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [error, setError] = useState("");

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

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError("Please fill in all fields.");
      return;
    }
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (response.ok) {
        router.push('/thank-you');
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch {
      setError("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-slate-100 flex flex-col">
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
        <a href="#inquiry" className="inline-block mt-8 px-8 py-3 rounded-lg bg-cyan-400 text-slate-900 font-bold text-lg shadow-lg hover:bg-cyan-300 transition">Get Started</a>
      </header>

      <main className="flex-1 w-full max-w-6xl mx-auto px-4">
        <section className="py-12">
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
              <h3 className="text-cyan-300 text-xl font-semibold mb-2">Týr</h3>
              <p className="text-slate-300">Authentication and Identity Management engine. Named after the god of law and justice.</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-400/20 border border-slate-700 transition">
              <h3 className="text-cyan-300 text-xl font-semibold mb-2">Heimdallr</h3>
              <p className="text-slate-300">Observability and monitoring at the edge. The ever-vigilant guardian of our systems.</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-400/20 border border-slate-700 transition">
              <h3 className="text-cyan-300 text-xl font-semibold mb-2">Sleipnir</h3>
              <p className="text-slate-300">Automation and integration workflows, powered by modern logic. The fastest and most reliable messenger.</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-400/20 border border-slate-700 transition">
              <h3 className="text-cyan-300 text-xl font-semibold mb-2">Mímir</h3>
              <p className="text-slate-300">Task and ticket management built for small teams and enterprises alike. The well of wisdom for your organization.</p>
            </div>
            <div className="bg-slate-800 rounded-xl p-6 shadow-lg hover:shadow-cyan-400/20 border border-slate-700 transition">
              <h3 className="text-cyan-300 text-xl font-semibold mb-2">Skuld</h3>
              <p className="text-slate-300">Billing, invoicing, and operational intelligence — especially for logistics. The future is in good hands.</p>
            </div>
          </div>
        </section>

        <section id="inquiry" className="py-12">
          <div className="max-w-lg mx-auto bg-slate-800 rounded-xl p-8 shadow-lg border border-slate-700">
            <h2 className="text-2xl font-bold text-cyan-300 mb-4 text-center">Project Inquiry / Signup</h2>
            <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
              <input
                className="rounded-md px-4 py-2 bg-slate-900 text-slate-100 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                type="text"
                name="name"
                placeholder="Your Name"
                value={form.name}
                onChange={handleChange}
                required
              />
              <input
                className="rounded-md px-4 py-2 bg-slate-900 text-slate-100 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                type="email"
                name="email"
                placeholder="Your Email"
                value={form.email}
                onChange={handleChange}
                required
              />
              <textarea
                className="rounded-md px-4 py-2 bg-slate-900 text-slate-100 border border-slate-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 min-h-[100px]"
                name="message"
                placeholder="How can we help you?"
                value={form.message}
                onChange={handleChange}
                required
              />
              {error && <div className="text-red-400 text-sm">{error}</div>}
              <button
                type="submit"
                className="mt-2 px-6 py-2 rounded-lg bg-cyan-400 text-slate-900 font-bold text-lg shadow hover:bg-cyan-300 transition"
              >
                Submit
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
