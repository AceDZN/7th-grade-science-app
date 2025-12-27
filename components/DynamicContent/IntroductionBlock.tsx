import React from 'react';
import { IntroductionBlock as IntroductionBlockType, InnerTextBlock, InnerListBlock } from '@/lib/types';

// Theme maps
const THEME_STYLES = {
  'primary-orange': {
    container: 'bg-gradient-to-br from-orange-50 to-amber-50 border-orange-100',
    title: 'text-orange-900',
    listMarker: 'bg-orange-600',
  },
  'primary-blue': {
    container: 'bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-100',
    title: 'text-indigo-900',
    listMarker: 'bg-indigo-600',
  },
  'primary-purple': {
    container: 'bg-gradient-to-br from-purple-50 to-fuchsia-50 border-purple-100',
    title: 'text-purple-900',
    listMarker: 'bg-purple-600',
  },
  'primary-emerald': {
    container: 'bg-gradient-to-br from-emerald-50 to-teal-50 border-emerald-100',
    title: 'text-emerald-900',
    listMarker: 'bg-emerald-600',
  },
   // Fallback
   default: {
    container: 'bg-slate-50 border-slate-100',
    title: 'text-slate-900',
    listMarker: 'bg-slate-600',
   }
};

const getTheme = (themeName?: string) => {
    return THEME_STYLES[themeName as keyof typeof THEME_STYLES] || THEME_STYLES.default;
};

const InnerText = ({ block }: { block: InnerTextBlock }) => {
    const sizeClasses = {
        sm: 'text-base',
        md: 'text-lg',
        lg: 'text-xl'
    };
    const className = `leading-relaxed text-slate-700 ${sizeClasses[block.size || 'md']}`;
    return (
        <div className={className} dangerouslySetInnerHTML={{ __html: block.content }} />
    );
};

const InnerList = ({ block, themeName }: { block: InnerListBlock, themeName?: string }) => {
    const theme = getTheme(themeName);
    
    return (
        <div className="grid gap-4 mt-4">
            {block.content.map((item, idx) => (
                <div key={idx} className="flex items-start gap-4 bg-white p-5 rounded-2xl border border-slate-100 shadow-sm">
                   {block.theme === 'circular' && (
                       <span className={`shrink-0 w-10 h-10 ${theme.listMarker} text-white rounded-full flex items-center justify-center font-black text-lg`}>
                           {idx + 1}
                       </span>
                   )}
                   <div className="flex-1">
                       {item.title && (
                           <strong className={`block text-lg mb-1 ${theme.title}`}>{item.title}</strong>
                       )}
                       {item.content.map((subBlock, subIdx) => (
                           <InnerText key={subIdx} block={subBlock} />
                       ))}
                   </div>
                </div>
            ))}
        </div>
    );
};

export const IntroductionBlock = ({ block }: { block: IntroductionBlockType }) => {
    const theme = getTheme(block.theme);
    
    return (
        <div className={`${theme.container} p-8 rounded-3xl border shadow-sm mb-8`}>
             <h3 className={`text-2xl font-black ${theme.title} mb-6 text-center`}>
                {block.icon && (
                    <img 
                        src={`https://api.iconify.design/fluent-emoji/${block.icon}.svg`}
                        alt={block.icon}
                        className="w-8 h-8 inline ml-2" 
                    />
                )}
                {block.title}
             </h3>
             
             <div className="space-y-4 text-center">
                 {block.content.map((innerBlock, idx) => {
                     if (innerBlock.type === 'text') {
                         return <div key={idx}><InnerText block={innerBlock} /></div>;
                     }
                     if (innerBlock.type === 'list_items') {
                         return <div key={idx} className="text-right"><InnerList block={innerBlock} themeName={block.theme} /></div>;
                     }
                     return null;
                 })}
             </div>
        </div>
    );
};

