import Link from 'next/link';
import { Metadata } from 'next';

import { Footer } from '@/app/ui/book';

import "./app.css";

export const metadata: Metadata = {
  title: "Home | Durusul Lughah"
};

export default function Home() {
  return (
    <main className="container relative min-h-screen max-w-5xl mx-auto px-4 py-4">
      <section className="min-h-screen grid justify-center items-center">
          <h1 className="text-5xl font-bold text-center">Durusul Lughah</h1>
      </section>
      <div className="min-h-screen mt-8 mb-24 flex flex-col justify-center">
        <Link className="block max-w-[400px] px-4 py-1 my-1 home-direction" href="/lesson">Start Learning</Link>
        <Link className="block max-w-[400px] px-4 py-1 my-1 home-direction" href="/quiz">Try Quiz</Link>
      </div>
      <Footer />
    </main>
  );
}
