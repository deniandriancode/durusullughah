import Link from 'next/link';
import { AiOutlineMenu } from 'react-icons/ai';

export function SideNav({ handleToggleSidenav, openSidenav }) {
  return (
    <>
      <button className={`fixed top-4 ${openSidenav ? 'left-[254px]' : 'left-4'}`}><AiOutlineMenu onClick={handleToggleSidenav} /></button>
      { openSidenav && <nav className={`fixed top-0 left-0 h-full px-4 py-4 w-[244px] overflow-y-auto hidden lg:block`}>
        <p className="text-xl">Chapter List</p>
        <ul className="my-4">
          <li><Link href="#" className="hover:underline">Chapter 1</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 2</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 3</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 4</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 5</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 6</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 7</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 8</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 9</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 10</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 11</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 12</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 13</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 14</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 15</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 16</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 17</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 18</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 19</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 20</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 21</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 22</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 23</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 24</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 25</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 26</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 27</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 28</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 29</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 30</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 31</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 32</Link></li>
          <li><Link href="#" className="hover:underline">Chapter 33</Link></li>
        </ul>
      </nav> }
    </>
  );
}

function SideNavPlacehoder() {
  return (
    <div className="w-56 h-full hidden lg:block">
    </div>
  );
}

export function MainContent({ openSidenav }) {
  return (
    <section className="flex">
      { openSidenav && <SideNavPlacehoder /> }
      <div className="container max-w-xl mx-auto px-4 py-8">
        <h1 className="text-5xl font-bold">Main Content</h1>
        <div>
          <p className="my-4 text-right">
            بال وقام التقليدي الأوربيين عل, لدحر ايطاليا، كما هو. هذا في للصين الإكتفاء الأوربيين. الى جيما بلاده لم, لم خلاف ليركز تزامناً ضرب, تم ومن عُقر أثره،. ما الشمل الكونجرس الاندونيسية يتم, عملية سبتمبر لليابان أي هذا. الطريق الإنذار، الى لم, ان قادة اليميني الدولارات كما.
          </p>
          <p className="my-4">Dolor velit perspiciatis sunt nesciunt perspiciatis Autem neque pariatur rem reiciendis vitae. Totam cumque laudantium nostrum neque voluptate sit. Ex libero iusto magni autem rerum quod Dolorem molestiae laboriosam voluptas</p>
          <p className="my-4">Amet non aliquid nesciunt officia dolorem? Dolorem incidunt dolor repudiandae architecto porro. Dolorem error explicabo dolore esse molestiae consectetur distinctio? Quo reiciendis saepe amet ipsum amet, qui nam Praesentium omnis unde earum beatae repellat Quibusdam necessitatibus possimus minus corrupti veniam consectetur Unde iste aperiam labore voluptatem necessitatibus. Quod officia ducimus odit unde corporis. Quidem odit consectetur doloribus consequatur sint Autem harum ipsum id animi enim incidunt? At atque deleniti consequatur quo consectetur. Fuga porro sit voluptates</p>
        </div>
        <p className="my-4">Sit tenetur reiciendis nesciunt tempore nemo debitis Harum voluptates dolore placeat placeat eveniet expedita officiis. Aliquid aspernatur quod corrupti fugit architecto! Commodi doloremque eligendi soluta rem ipsa Perferendis nesciunt omnis eum ea rerum illo. Vel cumque sunt qui harum quasi Quibusdam corporis omnis praesentium magnam vitae Dolores ipsum culpa autem nesciunt blanditiis. At eius quae.</p>
        <p className="my-4">Ipsum soluta laudantium provident similique sed Vero eius esse repellendus nam assumenda Aliquid quasi quo voluptas molestias delectus quaerat suscipit voluptates Quia totam ut sint deleniti natus in sapiente ducimus! Nam cumque vero unde quis eum quo. Beatae voluptates neque amet quasi earum quaerat deserunt! Consequatur ex veritatis nemo atque minus maxime Repudiandae iusto animi nostrum dolores laboriosam? Nihil fugit minus expedita quo saepe! Fugiat veniam esse laboriosam ullam modi? Earum asperiores optio reprehenderit commodi expedita Magni aspernatur facilis quis.</p>
      </div>
    </section>
  );
}
