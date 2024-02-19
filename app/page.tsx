'use client'

import Link from 'next/link';
import { SideNav, MainContent } from '@/app/ui/book';
import { useState } from 'react';

export default function Home() {
  const [openSidenav, setOpenSidenav] = useState(true);
  const [openMobileSidenav, setOpenMobileSidenav] = useState(false);

  function handleToggleSidenav() {
    setOpenSidenav(!openSidenav);
    setOpenMobileSidenav(!openMobileSidenav);
  }

  return (
    <main>
      <SideNav 
        handleToggleSidenav={handleToggleSidenav} 
        openSidenav={openSidenav}
        openMobileSidenav={openMobileSidenav}
      />
      <MainContent openSidenav={openSidenav} />
    </main>
  );
}
