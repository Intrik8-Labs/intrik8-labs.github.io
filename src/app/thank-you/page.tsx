import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact | Intrik8 Labs",
  alternates: { canonical: "/#contact" },
  robots: { index: false },
  openGraph: null,
};

export default function ThankYou() {
  return (
    <main className="shell legacy-contact">
      <p className="eyebrow"><span className="accent-line" /> Contact</p>
      <h1>Get in touch</h1>
      <p>Contact Intrik8 Labs through the link on our homepage.</p>
      <Link className="button button-primary" href="/#contact">Visit the contact section <span aria-hidden="true">↗︎</span></Link>
    </main>
  );
}
