import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Souvlaki Chat",
  description: "A simple chat application.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between border-b bg-black p-4 text-xl font-semibold">
      <div className="flex items-center gap-4">
        <Link href="/" className="text-white">
          Souvlaki Chat
        </Link>
      </div>
      <div className="flex items-center gap-4">
        <Link href="/login" className="text-white">
          Login
        </Link>
        <Link href="/register" className="text-white">
          Register
        </Link>
      </div>
    </nav>
  );
}

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body className="flex flex-col gap-4">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
