'use client';

import Link from 'next/link';
import { AiOutlineMenu, AiOutlineCopyright } from 'react-icons/ai';
import { Noto_Naskh_Arabic } from 'next/font/google';
import clsx from 'clsx';
import { useState } from 'react';

import styles from '@/app/ui/side-navigation.module.css';

const arabicFont = Noto_Naskh_Arabic({ subsets: ['arabic'], weight: ['400', '700'] });

export function ChapterList() {
  const linkStyle = "hover:underline";

  const [collapse, setCollapse] = useState(true);

  function handleCollapseMenu(event: any) {
    event.stopPropagation();
    setCollapse(!collapse);
  }

  return (
    <ul className="my-4">
      <li><Link href="/" className={linkStyle}>Introduction</Link></li>
      <li>
        <Link href="/lesson/vol-1" className={clsx(linkStyle, 'bg-gray-300 inline-block w-full')} onClick={handleCollapseMenu}>Volume I</Link>
        <ul className={clsx("ms-4 overflow-y-hidden transition-all duration-500", collapse ? 'max-h-[1000px]' : 'max-h-0')}>
          <li><Link href="/lesson/vol-1/chapter-1" className="hover:underline">1. What is This?</Link></li>
          <li><Link href="#" className="hover:underline">2. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">3. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">4. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">5. Chapter Name</Link></li>
        </ul>
      </li>
      <li>
        <Link href="/lesson/vol-2" className={linkStyle}>Volume II</Link>
        <ul className="ms-4">
          <li><Link href="#" className="hover:underline">1. Chapter Name Amet voluptatum culpa exercitationem earum corrupti. Ipsam eaque</Link></li>
          <li><Link href="#" className="hover:underline">2. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">3. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">4. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">5. Chapter Name</Link></li>
        </ul>
      </li>
      <li>
        <Link href="/lesson/vol-3" className={linkStyle}>Volume III</Link>
        <ul className="ms-4">
          <li><Link href="#" className="hover:underline">1. Chapter Name Amet voluptatum culpa exercitationem earum corrupti. Ipsam eaque</Link></li>
          <li><Link href="#" className="hover:underline">2. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">3. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">4. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">5. Chapter Name</Link></li>
        </ul>
      </li>
      <li>
        <Link href="/lesson/vol-4" className={linkStyle}>Volume IV</Link>
        <ul className="ms-4">
          <li><Link href="#" className="hover:underline">1. Chapter Name Amet voluptatum culpa exercitationem earum corrupti. Ipsam eaque</Link></li>
          <li><Link href="#" className="hover:underline">2. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">3. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">4. Chapter Name</Link></li>
          <li><Link href="#" className="hover:underline">5. Chapter Name</Link></li>
        </ul>
      </li>
    </ul>
  );
}

interface SideNavPlacehoderT {
  width: number,
  openSideNavigation: boolean
};
function SideNavPlacehoder({ width, openSideNavigation }: SideNavPlacehoderT) {
  return (
    <div className={clsx(`w-[${width}px] transition-all duration-300 hidden lg:block`, !openSideNavigation && 'w-0')}>
    </div>
  );
}

export function SideNavigation() {
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

  return (
    <>
      <button 
        className={clsx('fixed top-4 hidden lg:inline transition-all duration-300', openSideNavigation ? `left-[310px]` : 'left-4')}>
          <AiOutlineMenu onClick={handleToggleSidenav} />
      </button>
      <nav 
        className={clsx('fixed top-0', openSideNavigation ? 'left-0' : 'left-[-300px]', 'bg-white h-full px-4 py-6 w-[300px] transition-all duration-300 overflow-y-auto hidden lg:block')}>
        <p className="text-xl">Chapter List</p>
        <ChapterList />
      </nav>

      { /* Mobile Navigation */ }
      <button 
        className={clsx('fixed z-[2] top-4 inline lg:hidden', openMobileSideNavigation ? `right-4 min-[487px]:left-[310px]` : `right-4 min-[487px]:left-4`)}>
          <AiOutlineMenu onClick={handleToggleMobileSidenav} />
      </button>
      <nav className={clsx(`fixed z-[1] top-0 left-0 bg-white h-full px-4 py-6 w-full min-[487px]:w-[300px] overflow-y-auto lg:hidden`, !openMobileSideNavigation && 'hidden')}>
        <p className="text-xl">Chapter List</p>
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
