import React from "react";
import { CHAPTERS, SITE_NAME } from "@/lib/constants";
import { ChapterSidebar } from "@/components/chapter/ChapterSidebar";
import { ChapterId } from "@/lib/types";
import type { Metadata } from "next";

interface ChapterLayoutProps {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ id: string }>;
}): Promise<Metadata> {
  const { id } = await params;
  const chapter = CHAPTERS.find((c) => c.id === id);
  const chapterName = chapter?.title || "";

  return {
    title: `${SITE_NAME} - ${chapterName}`,
    description: chapter?.description || SITE_NAME
  };
}

export default async function ChapterLayout({
  children,
  params
}: ChapterLayoutProps) {
  const resolvedParams = await params;
  const chapterId = resolvedParams.id as ChapterId;

  const chapter = CHAPTERS.find((c) => c.id === chapterId);

  if (!chapter) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-black text-slate-900 mb-4">
            פרק לא נמצא
          </h1>
          <a href="/" className="text-blue-600 font-bold">
            חזרה לדף הבית
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-slate-900" dir="rtl">
      <ChapterSidebar chapter={chapter} chapterId={chapterId} />

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 lg:p-10 overflow-x-hidden">
        <div className="max-w-5xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
