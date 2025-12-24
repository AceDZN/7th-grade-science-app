"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { CHAPTERS } from "@/lib/constants";

export default function Home() {
  return (
    <main
      className="min-h-screen bg-[#f8fafc] p-4 md:p-6 text-slate-900"
      dir="rtl"
    >
      <div className="max-w-6xl mx-auto py-8 md:py-12 lg:py-16">
        <header className="text-center mb-8 md:mb-12 lg:mb-16 space-y-3 md:space-y-4">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="inline-block bg-blue-600 text-white px-4 md:px-6 py-1.5 md:py-2 rounded-full text-xs md:text-sm font-black mb-3 md:mb-4"
          >
            ברוכים הבאים לעתיד הלימוד
          </motion.div>
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 tracking-tight leading-tight">
            מסע אל עולם <span className="text-blue-600 italic">החומר</span>
          </h1>
          <p className="text-base md:text-lg lg:text-2xl text-slate-500 font-medium max-w-3xl mx-auto leading-relaxed px-4">
            גלו את הסודות שמרכיבים את היקום שלנו דרך חוויה אינטראקטיבית, חכמה
            ומרהיבה.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8">
          {CHAPTERS.map((chapter) => (
            <Link
              key={chapter.id}
              href={`/chapter/${chapter.id}/${chapter.modules[0].id}`}
            >
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group relative bg-white p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-xl border border-slate-100 hover:border-blue-300 transition-all overflow-hidden h-full flex flex-col justify-between"
              >
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-blue-50 rounded-bl-full opacity-50 group-hover:bg-blue-600 transition-colors" />

                <div>
                  <div className="mb-4 md:mb-6 relative z-10">
                    <img
                      src={`https://api.iconify.design/fluent-emoji/${chapter.icon}.svg`}
                      alt={chapter.icon}
                      className="w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
                    />
                  </div>
                  <h3 className="text-xs md:text-sm font-black text-blue-600 uppercase tracking-widest mb-2">
                    {chapter.subtitle}
                  </h3>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 mb-3 md:mb-4">
                    {chapter.title}
                  </h2>
                  <p className="text-slate-500 text-base md:text-lg lg:text-xl font-medium leading-relaxed">
                    {chapter.description}
                  </p>
                </div>

                <div className="mt-6 md:mt-8 flex items-center gap-2 text-blue-600 font-extrabold group-hover:gap-4 transition-all">
                  <span>בואו נתחיל</span>
                  <span className="text-xl md:text-2xl">←</span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
