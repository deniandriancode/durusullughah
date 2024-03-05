import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { SideNavigation, Footer } from '@/app/ui/book';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Durusul Lughah",
    default: "Durusul Lughah",
  },
  description: "Making learning Arabic more comfortable.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <SideNavigation />
      <main className="container relative min-h-screen max-w-xl mx-auto px-4 py-12">
        {children}
        <Footer />
      </main>
    </>
  );
}

