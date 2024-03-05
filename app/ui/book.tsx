'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AiOutlineMenu, AiOutlineCopyright, AiOutlineRight } from 'react-icons/ai';
import { Noto_Naskh_Arabic } from 'next/font/google';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

import './book.css';

import volumeLinkList from '@/app/lib/lesson';

const arabicFont = Noto_Naskh_Arabic({ subsets: ['arabic'], weight: ['400', '700'] });

export function ChapterList() {
  const linkStyle = "";

  const volumeLink = volumeLinkList.map((v, idx) => {
    const lis = v.children.map(vv => {
        return <li className={linkStyle + ' ' + 'px-1 mt-1 lesson-menu'} key={vv.id}><Link className="inline-block w-full" href={vv.href}>{vv.text}</Link></li>
    });

    return (
      <li key={idx} className={"px-1"}>
        <button 
          className={clsx('flex justify-between items-center w-full text-left lesson-head-menu')} 
        >
            {v.text}
        </button>
        <ul className={clsx("ms-2 overflow-y-hidden")}>
          {lis}
        </ul>
      </li>
    );
  });

  return (
    <ul className="my-4 p-1">
      <li><Link href="/lesson" className={linkStyle + ' ' + 'px-1 mt-1 inline-block w-full lesson-menu'}>Introduction</Link></li>
      {volumeLink}
    </ul>
  );
}

interface SideNavPlacehoderT {
  width: number,
  openSideNavigation: boolean
};
function SideNavPlacehoder({ width, openSideNavigation }: SideNavPlacehoderT) {
  return (
    <div className={clsx(`transition-all duration-300 hidden lg:block`, openSideNavigation ? 'w-[300px]' : 'w-0')}>
    </div>
  );
}

export function SideNavigation() {
  const routePath = usePathname();
  const [openSideNavigation, setOpenSideNavigation] = useState(true);
  const [openMobileSideNavigation, setOpenMobileSideNavigation] = useState(false);

  const sideNavWidthPX = 300;
  const mobileBreakPointPX = 487;


  function handleToggleSidenav() {
    setOpenSideNavigation(!openSideNavigation);
  }

  function handleToggleMobileSidenav() {
    setOpenMobileSideNavigation(!openMobileSideNavigation);
  }

  useEffect(() => {
    // if (window.innerWidth > mobileBreakPointPX) return;
    setOpenMobileSideNavigation(false);
  }, [routePath]);

  return (
    <>
      <button 
        className={clsx('fixed top-4 hidden lg:inline transition-all duration-300', openSideNavigation ? `left-[310px]` : 'left-4')}>
          <AiOutlineMenu onClick={handleToggleSidenav} />
      </button>
      <nav 
        className={clsx('lesson-nav fixed top-0 border-e-2', openSideNavigation ? 'left-0' : 'left-[-300px]', 'bg-white rounded h-full px-1 py-6 w-[300px] transition-all duration-300 overflow-y-auto hidden lg:block')}>
        <Link className="text-lg mx-2" href='/'>Home</Link>
        <ChapterList />
      </nav>

      { /* Mobile Navigation */ }
      <button 
        className={clsx('fixed z-[2] top-4 transition-all duration-300 inline lg:hidden', openMobileSideNavigation ? `right-4 min-[487px]:left-[310px]` : `right-4 min-[487px]:left-4`)}>
          <AiOutlineMenu onClick={handleToggleMobileSidenav} />
      </button>
      <nav className={clsx(`lesson-nav fixed z-[1] top-0 transition-all duration-300 bg-white h-full px-4 py-6 w-full min-[487px]:border-e-2 min-[487px]:w-[300px] overflow-y-auto`, openMobileSideNavigation ? 'left-[0%] min-[487px]:left-0' : 'left-[-100%] min-[487px]:left-[-300px]')}>
        <Link className="text-lg" href='/'>Home</Link>
        <ChapterList />
      </nav>
      <SideNavPlacehoder width={sideNavWidthPX} openSideNavigation={openSideNavigation} />
    </>
  );
}

export function Footer() {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="absolute bottom-0 left-0 right-0 px-4 py-6">
      <p>Copyright <AiOutlineCopyright className="inline" /> {year}</p>
    </footer>   
  );
}
