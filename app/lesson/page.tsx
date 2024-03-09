import Link from 'next/link';
import Image from 'next/image';
import { Noto_Naskh_Arabic } from 'next/font/google';
import { Metadata } from 'next';

const arabicFont = Noto_Naskh_Arabic({ subsets: ['arabic'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Introduction | Durusul Lughah"
};

export default function Home() {
  return (
    <section>
      <div className="my-12">
        <Image width={500} height={80} alt="Basmala Calligraphy" src="/basmala.jpeg" className="mx-auto" />

        <p className="my-8">This project is based on an amazing book by Dr. V. Abdur Rahim <span className="italic">rahimahullah</span> titled <span className='italic'>&apos;Durusul Lughoh Al-Arabiyyah Li Ghairil Nathiqin Biha&apos;</span> which in English is &apos;Arabic Lesson for Non Native Speaker&apos;.</p>

        <p className="my-8">I made this website as a hobby project, since there is no online version of this book I decided to make one. Before we begin reading the book there are prerequisites, actually there is only one prerequisite and that is you must be able to read Al Qur'an, you are not required to be able to read in advanced level or knowing the terms in tajwid, just basic reading is sufficient.</p>

        <p className="my-8">Reading Arabic text is a bit different from reading Al Qur'an, here are some of the differences.</p>

        <p className="my-8 text-3xl bold">1. Arabic text read as it is</p>

        <p className="my-8">There is no <span className="italic">'ikhfa</span> in regular Arabic text, the longest <span className="italic">harakat</span> that used in real life converstation is two. The bended horizonal line that read four harakats is read two harakats in practice.</p>

        <p className="my-8 text-3xl bold">2. Every verses in Al Qur'an is Arabic but not every Arabic text is Al Qur'an</p>

        <p className="my-8">Yes, it sounds obvious because it is, however I often find people still think that everything in Arabic is holy and sacred and untouchable which is wrong, Arabic language is just another language in term of human language, just like English, it is used to communicate with other human beings. Al Qur'an is the holy book of Islam that is revealed in Arabic.</p>

        <p className="my-8">I guess that's it, you can start reading the book right away. May Allah make your study easy for you.</p>
      </div>
    </section>
  );
}

