import type { Metadata } from "next";
import "./globals.css";

const description =
  "Intrik8 Labs is an independent software studio in Las Vegas building Yggdrasil for asset management and Skald for document workflows.";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.intrik8labs.com"),
  title: "Intrik8 Labs | Software for Small Teams",
  description,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: "/",
    title: "Intrik8 Labs | Software for Small Teams",
    description,
    siteName: "Intrik8 Labs",
    images: [{ url: "/studio-world-tree.webp", alt: "A world tree engraved on a copper medallion" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
