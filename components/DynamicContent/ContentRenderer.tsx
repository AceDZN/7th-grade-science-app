
import React from 'react';
import { ContentBlock } from '@/lib/types';
import { DynamicHero } from './DynamicHero';
import { DynamicGridCards } from './DynamicGridCards';
import { DynamicSimulation } from './DynamicSimulation';
import { Quiz } from '@/components/Quiz';
import { Enrichment } from '@/components/Enrichment';
import { ScientificTable } from '@/components/ScientificTable';

export const ContentRenderer = ({ blocks, onQuizComplete }: { blocks: ContentBlock[], onQuizComplete?: (score: number) => void }) => {
  return (
    <div className="space-y-8">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case 'hero':
            return <DynamicHero key={idx} block={block} />;
          case 'grid_cards':
            return <DynamicGridCards key={idx} block={block} />;
          case 'simulation':
            return <DynamicSimulation key={idx} block={block} />;
          case 'quiz':
            return (
                <div key={idx} className="bg-slate-50 p-4 md:p-6 lg:p-8 rounded-xl md:rounded-2xl lg:rounded-3xl border border-slate-200">
                    <Quiz questions={block.questions || []} onComplete={onQuizComplete || (() => {})} />
                </div>
            );
          case 'enrichment':
             return (
                 <Enrichment key={idx} title={block.title} icon={block.icon}>
                     <div dangerouslySetInnerHTML={{__html: block.content}} />
                 </Enrichment>
             );
          case 'scientific_table':
              return (
                  <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-200 mb-8">
                      <ScientificTable 
                          title={block.title}
                          headers={block.headers}
                          rows={block.rows}
                          variant={block.variant}
                          note={block.note}
                      />
                  </div>
              )
          case 'text':
             return (
                 <div key={idx} className={`bg-white p-8 rounded-[2rem] border border-slate-200 text-right ${block.className || ''}`}>
                     <div className="text-xl leading-relaxed text-slate-700 font-medium" dangerouslySetInnerHTML={{__html: block.content}} />
                 </div>
             );
          default:
            return null;
        }
      })}
    </div>
  );
};
