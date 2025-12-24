"use client";

import React from 'react';
import { ChapterId, ModuleId, DynamicModuleData } from '@/lib/types';
import { ContentRenderer } from '@/components/DynamicContent/ContentRenderer';

interface ModuleClientProps {
  chapterId: ChapterId;
  moduleId: ModuleId;
  dynamicData?: DynamicModuleData | null;
}

export default function ModuleClient({ chapterId, moduleId, dynamicData }: ModuleClientProps) {
  const handleQuizComplete = (score: number) => {
    const saved = localStorage.getItem(`completed_${chapterId}`);
    const completed = saved ? JSON.parse(saved) : [];
    if (!completed.includes(moduleId)) {
      completed.push(moduleId);
      localStorage.setItem(`completed_${chapterId}`, JSON.stringify(completed));
      // Refresh to update sidebar (in a more complex app, we'd use a context/store)
      window.dispatchEvent(new Event('storage'));
    }
  };

  if (dynamicData) {
    return <ContentRenderer blocks={dynamicData.blocks} onQuizComplete={handleQuizComplete} />;
  }

  // Fallback if data is missing or loading failed
  return (
    <div className="p-10 text-center text-slate-400 font-bold">
        <p>טוען תוכן...</p>
        <p className="text-sm font-normal mt-2 opacity-70">אם התוכן לא מופיע, ייתכן שיש בעיה בטעינת הנתונים.</p>
    </div>
  );
}
