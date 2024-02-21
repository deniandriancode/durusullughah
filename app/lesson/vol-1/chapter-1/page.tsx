import { Metadata } from 'next';
import { Noto_Naskh_Arabic } from 'next/font/google';
const arabicFont = Noto_Naskh_Arabic({ subsets: ['arabic'], weight: ['400', '700'] });

export const metadata: Metadata = {
  title: "Chapter 1. What is This? - Volume I"
};

export default function Vol_I_Chapter_1() {
  const arabicStyle = `${arabicFont.className} arabic`;
  return (
    <section>
      <h1 className="text-5xl font-bold">1. What is This?</h1>
      { /* <img className="rounded shadow" src="https://i.imgur.com/UUULYCR.jpg" alt="Illustration of Mosque" /> */ }
      <table className="my-4 w-full text-center" dir="rtl">
      <tr className="grid grid-cols-2 py-2 items-center justify-center">
        <td dir="rtl" className={arabicStyle}>هَذَا بَيْتٌ</td>
        <td><img className="rounded shadow" src="https://i.imgur.com/UUULYCR.jpg" alt="Illustration of Mosque" /></td>
      </tr>
        <tr className="grid grid-cols-2 py-2 items-center justify-center">
          <td dir="rtl" className={arabicStyle}>هَذَا مَسْجِدٌ</td>
          <td><img className="rounded shadow" src="https://i.imgur.com/UUULYCR.jpg" alt="Illustration of Mosque" /></td>
        </tr>
        <tr className="grid grid-cols-2 py-2 items-center justify-center">
          <td dir="rtl" className={arabicStyle}>هَذَا بَابٌ</td>
          <td><img className="rounded shadow" src="https://i.imgur.com/UUULYCR.jpg" alt="Illustration of Mosque" /></td>
        </tr>
        <tr className="grid grid-cols-2 py-2 items-center justify-center">
          <td dir="rtl" className={arabicStyle}>هَذَا كِتَابٌ</td>
          <td><img className="rounded shadow" src="https://i.imgur.com/UUULYCR.jpg" alt="Illustration of Mosque" /></td>
        </tr>
        <tr className="grid grid-cols-2 py-2 items-center justify-center">
          <td dir="rtl" className={arabicStyle}>هَذَا قَلَمٌ</td>
          <td><img className="rounded shadow" src="https://i.imgur.com/UUULYCR.jpg" alt="Illustration of Mosque" /></td>
        </tr>
        <tr className="grid grid-cols-2 py-2 items-center justify-center">
          <td dir="rtl" className={arabicStyle}>هَذَا مِفْتَاحٌ</td>
          <td><img className="rounded shadow" src="https://i.imgur.com/UUULYCR.jpg" alt="Illustration of Mosque" /></td>
        </tr>
        <tr className="grid grid-cols-2 py-2 items-center justify-center">
          <td dir="rtl" className={arabicStyle}>هَذَا مَكْتَبٌ</td>
          <td><img className="rounded shadow" src="https://i.imgur.com/UUULYCR.jpg" alt="Illustration of Mosque" /></td>
        </tr>
        <tr className="grid grid-cols-2 py-2 items-center justify-center">
          <td dir="rtl" className={arabicStyle}>هَذَا سَرِيْرٌ</td>
          <td><img className="rounded shadow" src="https://i.imgur.com/UUULYCR.jpg" alt="Illustration of Mosque" /></td>
        </tr>
        <tr className="grid grid-cols-2 py-2 items-center justify-center">
          <td dir="rtl" className={arabicStyle}>هَذَا كُرْسِيٌّ</td>
          <td><img className="rounded shadow" src="https://i.imgur.com/UUULYCR.jpg" alt="Illustration of Mosque" /></td>
        </tr>
      </table>
    </section>
  );
}
