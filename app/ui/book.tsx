import Link from 'next/link';
import { AiOutlineMenu, AiOutlineCopyright } from 'react-icons/ai';

import { Noto_Naskh_Arabic } from 'next/font/google';

const arabicFont = Noto_Naskh_Arabic({ subsets: ['arabic'], weight: ['400', '700'] });

interface SideNavT {
  handleToggleSidenav: any,
  openSidenav: boolean
};
export function SideNav({ handleToggleSidenav, openSidenav }: SideNavT) {
  return (
    <>
      <button className={`fixed top-4 hidden lg:inline left-4 ${openSidenav && 'lg:left-[310px]'}`}><AiOutlineMenu onClick={handleToggleSidenav} /></button>
      { openSidenav && <nav className={`fixed top-0 left-0 bg-white h-full px-4 py-6 w-[300px] overflow-y-auto hidden lg:block`}>
        <p className="text-xl">Chapter List</p>
        <ul className="my-4">
          <li><Link href="#" className="hover:underline">1. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">2. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">3. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">4. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">5. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">6. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">7. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">8. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">9. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">10. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">11. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">12. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">13. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">14. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">15. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">16. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">17. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">18. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">19. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">20. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">21. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">22. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">23. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">24. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">25. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">26. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">27. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">28. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">29. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">30. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">31. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">32. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">33. Chapter Name</Link></li>
        </ul>
      </nav> }
      <button className={`fixed top-4 inline lg:hidden z-[10] ${openSidenav ? 'right-4 min-[487px]:left-[310px]' : 'right-4 min-[487px]:left-4'}`}><AiOutlineMenu onClick={handleToggleSidenav} /></button>
      { openSidenav && <nav className={`fixed top-0 left-0 bg-white h-full px-4 py-6 w-full min-[487px]:w-[300px] overflow-y-auto block lg:hidden`}>
        <p className="text-xl">Chapter List</p>
        <ul className="my-4">
          <li><Link href="#" className="hover:underline">1. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">2. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">3. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">4. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">5. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">6. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">7. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">8. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">9. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">10. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">11. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">12. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">13. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">14. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">15. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">16. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">17. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">18. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">19. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">20. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">21. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">22. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">23. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">24. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">25. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">26. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">27. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">28. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">29. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">30. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">31. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">32. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">33. Chapter Name</Link></li>
        </ul> 
      </nav> }
    </>
  );
}

function SideNavPlacehoder() {
  return (
    <div className="w-[300px] h-full hidden lg:block">
    </div>
  );
}

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer>
      <p>Copyright <AiOutlineCopyright className="inline" /> {year}</p>
    </footer>   
  );
}

interface MainContentT {
  openSidenav: boolean
};
export function MainContent({ openSidenav }: MainContentT) {
  return (
    <section className="flex">
      { openSidenav && <SideNavPlacehoder /> }
      <div className="container max-w-xl mx-auto px-4 py-12">
        <h1 className="text-5xl font-bold">Main Content</h1>
        <div>
          <p className={`${arabicFont.className} arabic my-4`} dir="rtl">
            بال وقام التقليدي الأوربيين عل, لدحر ايطاليا، كما هو. هذا في للصين الإكتفاء الأوربيين. الى جيما بلاده لم, لم خلاف ليركز تزامناً ضرب, تم ومن عُقر أثره،. ما الشمل الكونجرس الاندونيسية يتم, عملية سبتمبر لليابان أي هذا. الطريق الإنذار، الى لم, ان قادة اليميني الدولارات كما.
          </p>
          <p className="my-4">Dolor velit perspiciatis sunt nesciunt perspiciatis Autem neque pariatur rem reiciendis vitae. Totam cumque laudantium nostrum neque voluptate sit. Ex libero iusto magni autem rerum quod Dolorem molestiae laboriosam voluptas</p>
          <p className="my-4">Amet non aliquid nesciunt officia dolorem? Dolorem incidunt dolor repudiandae architecto porro. Dolorem error explicabo dolore esse molestiae consectetur distinctio? Quo reiciendis saepe amet ipsum amet, qui nam Praesentium omnis unde earum beatae repellat Quibusdam necessitatibus possimus minus corrupti veniam consectetur Unde iste aperiam labore voluptatem necessitatibus. Quod officia ducimus odit unde corporis. Quidem odit consectetur doloribus consequatur sint Autem harum ipsum id animi enim incidunt? At atque deleniti consequatur quo consectetur. Fuga porro sit voluptates</p>
        </div>
        <p className="my-4">Sit tenetur reiciendis nesciunt tempore nemo debitis Harum voluptates dolore placeat placeat eveniet expedita officiis. Aliquid aspernatur quod corrupti fugit architecto! Commodi doloremque eligendi soluta rem ipsa Perferendis nesciunt omnis eum ea rerum illo. Vel cumque sunt qui harum quasi Quibusdam corporis omnis praesentium magnam vitae Dolores ipsum culpa autem nesciunt blanditiis. At eius quae.</p>
        <p className="my-4">Ipsum soluta laudantium provident similique sed Vero eius esse repellendus nam assumenda Aliquid quasi quo voluptas molestias delectus quaerat suscipit voluptates Quia totam ut sint deleniti natus in sapiente ducimus! Nam cumque vero unde quis eum quo. Beatae voluptates neque amet quasi earum quaerat deserunt! Consequatur ex veritatis nemo atque minus maxime Repudiandae iusto animi nostrum dolores laboriosam? Nihil fugit minus expedita quo saepe! Fugiat veniam esse laboriosam ullam modi? Earum asperiores optio reprehenderit commodi expedita Magni aspernatur facilis quis.</p>
        <Footer />
      </div>
    </section>
  );
}
