import React from 'react';
import { ChapterId, ModuleId } from '@/lib/types';
import SummaryClient from './SummaryClient';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const chapterId = resolvedParams.id as ChapterId;

  return (
    <div className="animate-in fade-in duration-700">
      <SummaryClient chapterId={chapterId} />
    </div>
  );
}

export async function generateStaticParams() {
  const { CHAPTERS } = await import('@/lib/constants');
  return CHAPTERS.map((chapter) => ({
    id: chapter.id,
  }));
}
