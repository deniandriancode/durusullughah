'use client';

import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';

const Quiz = dynamic(() => import('@/app/ui/quiz'), { ssr: false });

export default function Page() {
  return (
    <main>
      <h1 className="text-6xl font-bold">Quiz</h1>
    </main>
  );
}
