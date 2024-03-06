'use client';

import { useState, useEffect, Suspense } from 'react';
import dynamic from 'next/dynamic';

const Quiz = dynamic(() => import('@/app/ui/quiz'), { ssr: false });

export default function Page() {
  return (
    <main className="container min-h-screen max-w-5xl mx-auto p-4">
      <h1 className="text-5xl font-bold">Quiz</h1>
      <Quiz />
    </main>
  );
}
