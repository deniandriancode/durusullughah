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
        <tbody>
          <tr className="grid grid-cols-2 py-2 items-center justify-center">
            <td dir="rtl" className={arabicStyle}>هَذَا بَيْتٌ</td>
            <td><img className="rounded shadow" src="https://i.imgur.com/lpCIHLh.jpg" alt="Illustration of House" /></td>
          </tr>
          <tr className="grid grid-cols-2 py-2 items-center justify-center">
            <td dir="rtl" className={arabicStyle}>هَذَا مَسْجِدٌ</td>
            <td><img className="rounded shadow" src="https://i.imgur.com/UUULYCR.jpg" alt="Illustration of Mosque" /></td>
          </tr>
          <tr className="grid grid-cols-2 py-2 items-center justify-center">
            <td dir="rtl" className={arabicStyle}>هَذَا بَابٌ</td>
            <td><img className="rounded shadow" src="https://i.imgur.com/wsGGSX4.jpg" alt="Illustration of Door" /></td>
          </tr>
          <tr className="grid grid-cols-2 py-2 items-center justify-center">
            <td dir="rtl" className={arabicStyle}>هَذَا كِتَابٌ</td>
            <td><img className="rounded shadow" src="https://i.imgur.com/iMCHGM5.jpg" alt="Illustration of Book" /></td>
          </tr>
          <tr className="grid grid-cols-2 py-2 items-center justify-center">
            <td dir="rtl" className={arabicStyle}>هَذَا قَلَمٌ</td>
            <td><img className="rounded shadow" src="https://i.imgur.com/xT4ZW1n.jpg" alt="Illustration of Pen" /></td>
          </tr>
          <tr className="grid grid-cols-2 py-2 items-center justify-center">
            <td dir="rtl" className={arabicStyle}>هَذَا مِفْتَاحٌ</td>
            <td><img className="rounded shadow" src="https://i.imgur.com/hQw9w72.jpg" alt="Illustration of Key" /></td>
          </tr>
          <tr className="grid grid-cols-2 py-2 items-center justify-center">
            <td dir="rtl" className={arabicStyle}>هَذَا مَكْتَبٌ</td>
            <td><img className="rounded shadow" src="https://i.imgur.com/xYPBOKm.jpg" alt="Illustration of Table" /></td>
          </tr>
          <tr className="grid grid-cols-2 py-2 items-center justify-center">
            <td dir="rtl" className={arabicStyle}>هَذَا سَرِيْرٌ</td>
            <td><img className="rounded shadow" src="https://i.imgur.com/jaeMXso.jpg" alt="Illustration of Bed" /></td>
          </tr>
          <tr className="grid grid-cols-2 py-2 items-center justify-center">
            <td dir="rtl" className={arabicStyle}>هَذَا كُرْسِيٌّ</td>
            <td><img className="rounded shadow" src="https://i.imgur.com/Dy4o37q.jpg" alt="Illustration of Chair" /></td>
          </tr>
        </tbody>
      </table>

      <p className="my-4">Some content goes here</p>

      <table className="my-4 w-full text-center" dir="rtl">
        <tbody>
          <tr className="grid grid-cols-2 py-2 items-center justify-center">
            <td className={arabicStyle + ' ' + 'text-start'}>
              <p dir="rtl">مَا هَذَا؟</p>
              <p dir="rtl">هَذَا بَيْتٌ</p>
              <p dir="rtl">أَهَذَا بَيْتٌ؟</p>
              <p dir="rtl">نَعَمْ، هَذَا بَيْتُ</p>
            </td>
            <td><img className="rounded shadow" src="https://i.imgur.com/lpCIHLh.jpg" alt="Illustration of House" /></td>
          </tr>
          <tr className="grid grid-cols-2 py-2 items-center justify-center">
            <td className={arabicStyle + ' ' + 'text-start'}>
              <p dir="rtl">مَا هَذَا؟</p>
              <p dir="rtl">هَذَا قَمِيْصٌ</p>
            </td>
            <td><img className="rounded shadow" src="https://i.imgur.com/TOJDLti.jpg" alt="Illustration of Tshirt" /></td>
          </tr>
          <tr className="grid grid-cols-2 py-2 items-center justify-center">
            <td className={arabicStyle + ' ' + 'text-start'}>
              <p dir="rtl">أَهَذَا سَرِيْرٌ؟</p>
              <p dir="rtl">لاَ، هَذَا كُرْسِيٌّ</p>
            </td>
            <td><img className="rounded shadow" src="https://i.imgur.com/Dy4o37q.jpg" alt="Illustration of Chair" /></td>
          </tr>
          <tr className="grid grid-cols-2 py-2 items-center justify-center">
            <td className={arabicStyle + ' ' + 'text-start'}>
              <p dir="rtl">أَهَذَا مِفْتَاحٌ؟</p>
              <p dir="rtl">لاَ، هَذَا قَلَمٌ</p>
            </td>
            <td><img className="rounded shadow" src="https://i.imgur.com/xT4ZW1n.jpg" alt="Illustration of Pen" /></td>
          </tr>
          <tr className="grid grid-cols-2 py-2 items-center justify-center">
            <td className={arabicStyle + ' ' + 'text-start'}>
              <p dir="rtl">مَا هَذَا؟</p>
              <p dir="rtl">هَذَا نَجْمٌ</p>
            </td>
            <td><img className="rounded shadow" src="https://i.imgur.com/W71FeKa.jpg" alt="Illustration of Star" /></td>
          </tr>
        </tbody>
      </table> 

      تَمْرِيْنٌ (۱)

      مَا هَذَا؟
      مَا هَذَا؟
      مَا هَذَا؟
      مَا هَذَا؟
      مَا هَذَا؟
      مَا هَذَا؟

      تَمْرِيْنٌ (۲)

      أَهَذَا بَيْتٌ؟
      أَهَذَ مِفْتَاحٌ؟
      أَهَذَ قَمِيْصٌ؟
      أَهَذَ نَجْمٌ؟

      اِقْرَأْ وَاكْتُبْ:

      هَذَا مكتب
      هَذَا سرير
      أهذا بيت؟
      هذا مسجد
      ما هذا؟
      لا، هذا مسجد
      هذا قلم
      هذا كرسيّ
      ما هذا؟ هذا مفتاح



      مَنْ هَذَا؟

      مَنْ هَذَا؟
      هَذَا طَبِيْبٌ

      مَنْ هَذَا؟
      هَذَا وَلَدٌ

      مَنْ هَذَا؟
      هَذَا طَالِبٌ

      أَهَذَا وَلَدٌ؟
      لاَ، هَذَا رَجُلٌ


      ما هذا؟ هذا مَسْجِدٌ
      من هذا؟ هذا تَاجِرٌ

      هذا كَلْبٌ

      أهذا كَلْبٌ؟
      لا، هذا قِطٌّ

      هذا حِمَارٌ

      أهذا حِمَارٌ؟
      لا، هذا حِصَانٌ

      وَما هذا؟
      هذا جَمَلٌ

      ما هذا؟
      هذا دِيْكٌ

      من هذا؟
      هذا مٌدَرِّسٌ

      أهذا قَمِيْصٌ؟
      لاَ، هذا مِنْدِيْلٌ

      تَمْرِيْنٌ (۴)

      ما هذا؟ هذا قلم
      هذا كلب
      من هذا؟ هذا طبيب
      هذا حمار
      أهذا كلب؟ لا، هذا قطّ
      أهذا ديك؟ نعم
      أهذا حصان؟ لا، هذا حمار
      هذا منديل
      أهذا ولد؟ نعم
      من هذا؟ هذا رجل

    </section>
  );
}
