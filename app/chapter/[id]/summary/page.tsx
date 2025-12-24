import React from 'react';
import { ChapterId, ModuleId, Question } from '@/lib/types';
import SummaryClient from './SummaryClient';

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const chapterId = resolvedParams.id as ChapterId;

  // Dynamically load questions and chapter data for the specific chapter on the server
  let questions: Question[] = [];
  let chapterTitle = "";
  
  try {
    const { CHAPTERS } = await import("@/lib/constants/global");
    const chapter = CHAPTERS.find((c) => c.id === chapterId);
    chapterTitle = chapter?.title || "";

    if (chapterId === ChapterId.Chapter1) {
      const { CHAPTER1_QUESTIONS } = await import("@/lib/constants/chapter_1");
      questions = CHAPTER1_QUESTIONS[ModuleId.Summary] || [];
    } else if (chapterId === ChapterId.Chapter2) {
      const { CHAPTER2_QUESTIONS } = await import("@/lib/constants/chapter_2");
      questions = CHAPTER2_QUESTIONS[ModuleId.Summary] || [];
    }
  } catch (error) {
    console.error("Error loading summary data:", error);
  }

  return (
    <div className="animate-in fade-in duration-700">
      <SummaryClient 
        chapterId={chapterId} 
        questions={questions}
        chapterTitle={chapterTitle}
      />
    </div>
  );
}

export async function generateStaticParams() {
  const { CHAPTERS } = await import('@/lib/constants');
  return CHAPTERS.map((chapter) => ({
    id: chapter.id,
  }));
}
