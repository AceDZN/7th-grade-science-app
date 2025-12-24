import React from "react";
import { CHAPTERS } from "@/lib/constants";
import { HeroSection } from "@/components/home/HeroSection";
import { ChapterCard } from "@/components/home/ChapterCard";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-[#f8fafc] p-4 md:p-6 text-slate-900"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto py-8 md:py-12 lg:py-16">
        <HeroSection />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {CHAPTERS.map((chapter) => (
            <ChapterCard key={chapter.id} chapter={chapter} />
          ))}
        </div>
      </div>
    </main>
  );
}
