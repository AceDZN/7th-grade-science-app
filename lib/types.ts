
export enum ChapterId {
  Chapter1 = 'chapter1',
  Chapter2 = 'chapter2'
}

export enum ModuleId {
  // Chapter 1: Introduction to Matter & Particle Model
  MatterIntro = 'matter-intro',
  ParticleModel = 'particle-model',
  Compression = 'compression',
  Diffusion = 'diffusion',
  SurfaceTension = 'surface-tension',
  VolumeBasics = 'volume-basics',
  PhaseTransitions = 'phase-transitions',
  
  // Chapter 2: Body and Matter (Existing)
  Intro = 'intro',
  Volume = 'volume',
  MassWeight = 'mass-weight',
  Density = 'density',
  
  // Shared
  Summary = 'summary'
}

export interface Question {
  id: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category?: ModuleId;
}

export interface ModuleData {
  id: ModuleId;
  title: string;
  description: string;
  icon: string;
}

export interface Chapter {
  id: ChapterId;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  modules: ModuleData[];
}

export interface LearningState {
  currentChapter: ChapterId | null;
  currentModule: ModuleId;
  completedModules: Record<ChapterId, ModuleId[]>;
  quizScores: Record<string, number>;
  examActive: boolean;
}

export type ContentBlockType = 'text' | 'hero' | 'grid_cards' | 'quiz' | 'simulation' | 'enrichment' | 'scientific_table';

export interface BaseContentBlock {
  type: ContentBlockType;
  id?: string;
}

export interface TextBlock extends BaseContentBlock {
  type: 'text';
  content: string; // HTML allowed
  className?: string; // Optional tailwind classes
}

export interface HeroBlock extends BaseContentBlock {
    type: 'hero';
    title: string;
    subtitle?: string;
}

export interface GridCardsBlock extends BaseContentBlock {
  type: 'grid_cards';
  cards: {
    title: string;
    content: string;
    variant?: 'blue' | 'indigo' | 'emerald' | 'slate';
  }[];
}

export interface QuizBlock extends BaseContentBlock {
  type: 'quiz';
  questions: Question[];
}

export interface SimulationBlock extends BaseContentBlock {
  type: 'simulation';
  componentName: string; // 'VolumeSimulation', etc.
}

export interface EnrichmentBlock extends BaseContentBlock {
    type: 'enrichment';
    title: string;
    icon: string;
    content: string;
}

export interface ScientificTableBlock extends BaseContentBlock {
    type: 'scientific_table';
    title: string;
    headers: string[];
    rows: any[];
    variant?: 'emerald' | 'blue';
    note?: string;
}

export type ContentBlock = TextBlock | HeroBlock | GridCardsBlock | QuizBlock | SimulationBlock | EnrichmentBlock | ScientificTableBlock;

export interface DynamicModuleData {
  id: string;
  title: string;
  blocks: ContentBlock[];
}
