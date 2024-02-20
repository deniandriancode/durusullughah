import Link from 'next/link';
import { Noto_Naskh_Arabic } from 'next/font/google';

const arabicFont = Noto_Naskh_Arabic({ subsets: ['arabic'], weight: ['400', '700'] });

export default function Home() {
  return (
    <section>
      <h1 className={arabicFont.className + ' ' + "text-5xl text-center font-bold"} dir="rtl">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</h1>
      <div className="my-12">
        <p className="my-4">Introduction about what this site is about and a heartwarming welcome.</p>
      </div>
    </section>
  );
}
