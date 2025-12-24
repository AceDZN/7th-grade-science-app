"use client";

import React, { useState, useEffect } from "react";
import { useParams, usePathname } from "next/navigation";
import Link from "next/link";
import { CHAPTERS } from "@/lib/constants";
import { ModuleCard } from "@/components/ModuleCard";
import { ChapterId, ModuleId } from "@/lib/types";
import { motion } from "framer-motion";

export default function ChapterLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const params = useParams();
  const pathname = usePathname();
  const chapterId = params.id as ChapterId;
  const currentModuleId = params.moduleId as ModuleId;

  const chapter = CHAPTERS.find((c) => c.id === chapterId);

  // Progress tracking (client-side for now, can be server actions later)
  const [completedModules, setCompletedModules] = useState<ModuleId[]>([]);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem(`completed_${chapterId}`);
    if (saved) setCompletedModules(JSON.parse(saved));
  }, [chapterId]);

  if (!chapter) return <div>Chapter not found</div>;

  return (
    <div className="flex min-h-screen bg-[#f8fafc] text-slate-900" dir="rtl">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="fixed top-4 right-4 z-50 md:hidden bg-blue-600 text-white p-3 rounded-xl shadow-lg"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {sidebarOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Sidebar */}
      <aside
        className={`
        ${sidebarOpen ? "translate-x-0" : "translate-x-full"}
        md:translate-x-0
        fixed md:sticky
        top-0 right-0
        w-full md:w-80 lg:w-96
        bg-white border-l border-slate-200
        h-screen overflow-y-auto
        p-4 md:p-6 lg:p-8
        shadow-sm
        transition-transform duration-300
        z-40
      `}
      >
        <Link
          href="/"
          className="flex items-center gap-2 md:gap-3 mb-6 md:mb-8 lg:mb-10 text-slate-400 hover:text-blue-600 transition-colors group"
        >
          <span className="text-xl md:text-2xl group-hover:-translate-x-1 transition-transform">
            →
          </span>
          <span className="font-extrabold text-xs md:text-sm uppercase tracking-widest">
            חזרה לתפריט הראשי
          </span>
        </Link>

        <div className="mb-6 md:mb-8">
          <div className="mb-3 md:mb-4">
            <img
              src={`https://api.iconify.design/fluent-emoji/${chapter.icon}.svg`}
              alt={chapter.icon}
              className="w-12 h-12 md:w-16 md:h-16"
            />
          </div>
          <h2 className="text-2xl md:text-3xl font-black text-slate-900">
            {chapter.title}
          </h2>
          <p className="text-slate-500 font-bold text-sm md:text-base">
            {chapter.subtitle}
          </p>
        </div>

        <nav>
          {chapter.modules.map((m) => {
            const isActive = currentModuleId === m.id;
            const isCompleted = completedModules.includes(m.id);

            return (
              <Link
                key={m.id}
                href={`/chapter/${chapterId}/${m.id}`}
                className="block mb-4 md:mb-6"
                onClick={() => setSidebarOpen(false)}
              >
                <ModuleCard
                  module={{ ...m, description: "" }} // Sidebar version doesn't need desc
                  isActive={isActive}
                  isCompleted={isCompleted}
                />
              </Link>
            );
          })}
        </nav>
      </aside>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="flex-1 p-4 md:p-6 lg:p-10 overflow-x-hidden">
        <div className="max-w-5xl mx-auto">{children}</div>
      </main>
    </div>
  );
}
