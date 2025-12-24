import React from "react";
import { CHAPTERS } from "@/lib/constants";
import { ChapterSidebar } from "@/components/chapter/ChapterSidebar";
import { ChapterId } from "@/lib/types";

interface ChapterLayoutProps {
  children: React.ReactNode;
  params: Promise<{ id: string }>;
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
