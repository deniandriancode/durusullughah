import Link from 'next/link';
import { Metadata } from 'next';

import { Footer } from '@/app/ui/book';

export const metadata: Metadata = {
  title: "Home | Durusul Lughah"
};

export default function Home() {
  return (
    <main className="container relative min-h-screen max-w-5xl mx-auto px-4 py-4">
      <section>
        <div className="my-8">
          <h1 className="text-5xl font-bold text-center">Durusul Lughah</h1>
          <p className="text-center mt-10">
            <Link className="inline-block rounded bg-[#d1c2ae] px-4 py-1" href="/lesson">Start Learning</Link>
          </p>
        </div>
      </section>
      <Footer />
    </main>
  );
}
