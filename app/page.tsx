import React from "react";
import { CHAPTERS, SITE_NAME } from "@/lib/constants";
import { HeroSection } from "@/components/home/HeroSection";
import { ChapterCard } from "@/components/home/ChapterCard";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: `${SITE_NAME} - לומדים מדעים בדרך חווייתית`,
  description:
    "פלטפורמה לימודית אינטראקטיבית למדעים. גלו את עולם החומר, המסה, הנפח והצפיפות דרך סימולציות, ניסויים ומבחנים חכמים.",
  keywords: [
    "מדעים",
    "פיזיקה",
    "מודל החלקיקים",
    "מסה",
    "נפח",
    "צפיפות",
    "למידה מקוונת",
    "סימולציות"
  ]
};

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
