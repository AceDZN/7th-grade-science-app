
import React from 'react';
import { GridCardsBlock } from '@/lib/types';

const VARIANT_STYLES = {
  blue: {
    container: 'bg-blue-50 border-blue-100',
    title: 'text-blue-900',
    text: 'text-blue-800'
  },
  indigo: {
    container: 'bg-indigo-50 border-indigo-100',
    title: 'text-indigo-900',
    text: 'text-indigo-800'
  },
  emerald: {
    container: 'bg-emerald-50 border-emerald-100',
    title: 'text-emerald-900',
    text: 'text-emerald-800'
  },
  amber: {
    container: 'bg-amber-50 border-amber-100',
    title: 'text-amber-900',
    text: 'text-amber-800'
  },
  slate: {
    container: 'bg-slate-50 border-slate-100',
    title: 'text-slate-900',
    text: 'text-slate-800'
  }
};

export const DynamicGridCards = ({ block }: { block: GridCardsBlock }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 lg:gap-8 text-right mb-6 md:mb-8">
      {block.cards.map((card, idx) => {
        // Safe access with fallback
        const variantKey = (card.variant && card.variant in VARIANT_STYLES) ? card.variant : 'slate';
        const styles = VARIANT_STYLES[variantKey as keyof typeof VARIANT_STYLES];
        return (
          <div key={idx} className={`${styles.container} p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl border-2`}>
            <h3 className={`text-xl md:text-2xl font-black ${styles.title} mb-3 md:mb-4`}>{card.title}</h3>
            <div 
              className={`text-base md:text-lg font-bold leading-relaxed ${styles.text}`}
              dangerouslySetInnerHTML={{ __html: card.content }}
            />
          </div>
        );
      })}
    </div>
  );
};
