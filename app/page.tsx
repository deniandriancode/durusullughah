'use client'

import Link from 'next/link';
import { SideNav, MainContent } from '@/app/ui/book';
import { useState } from 'react';

export default function Home() {
  const [openSidenav, setOpenSidenav] = useState(true);

  function handleToggleSidenav() {
    setOpenSidenav(!openSidenav);
  }

  return (
    <main>
      <SideNav 
        handleToggleSidenav={handleToggleSidenav} 
        openSidenav={openSidenav}
      />
      <MainContent openSidenav={openSidenav} />
    </main>
  );
}
