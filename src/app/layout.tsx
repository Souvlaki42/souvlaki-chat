import "~/styles/globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { Navbar } from "~/components/Navbar";

export const metadata: Metadata = {
  title: "Souvlaki Chat",
  description: "A simple chat application.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="flex flex-col gap-4">
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
