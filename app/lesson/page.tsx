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

        <p className="my-8">This project is based on an amazing book by Dr. V. Abdur Rahim <span className="italic">rahimahullah</span> titled <span className='italic'>%apos;Durusul Lughoh Al-Arabiyyah Li Ghairil Nathiqin Biha&apos;</span> which in English is &apos;Arabic Lesson for Non Native Speaker&apos;.</p>

        <p className="my-8">I made this website as a hobby project, since there is no online version of this book I decided to make one. This book is intended for those who wants to learn Arabic but find the traditional methods difficult and intimidating. To be honest, when I first learn Arabic, I learn Nahwu and Sharf right away. I&apos;m not saying that this method is wrong, but for people without any Arabic background like me, this method or path is just too difficult. I must memorize a lot, and I mean really a lot, of things without knowing where or when should I use all this thing in my Arabic journey.</p>

        <p className="my-8">As I said earlier, the traditional method is not wrong but as everything humanity made, it has flaws, and the following are the flaws of traditional method on learning Arabic. Please do note that this is solely an opinion from someone not even close of being an Arabic expert.</p>

        <h3 className="text-xl my-8 font-bold">1. Too Many Things to Memorize</h3>

        <p className="my-8">Memorizing has been one of the unique traits of Islam, a lot of <span className="italic">&apos;ibaadah</span> require us to memorize things. We memorize Al Qur&apos;an as many verses as we possibly could, we memorize du&apos;a, hadits and many others.</p>
        <p>続く。。。</p>
      </div>
    </section>
  );
}

