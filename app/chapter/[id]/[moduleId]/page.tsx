import fs from "fs/promises";
import path from "path";
import { ChapterId, ModuleId, DynamicModuleData, Question } from "@/lib/types";
// Client component for interactive module content
import ModuleClient from "./module-client";
import type { Metadata, ResolvingMetadata } from "next";
import { SITE_NAME, CHAPTERS } from "@/lib/constants";

interface PageProps {
  params: Promise<{
    id: string;
    moduleId: string;
  }>;
}

async function getModuleData(
  chapterId: string,
  moduleId: string
): Promise<DynamicModuleData | null> {
  const filePath = path.join(
    process.cwd(),
    "Data",
    "Modules",
    chapterId,
    `${moduleId}.json`
  );
  try {
    await fs.access(filePath);
    const fileContent = await fs.readFile(filePath, "utf-8");
    return JSON.parse(fileContent);
  } catch (e) {
    return null;
  }
}

export async function generateMetadata(
  { params }: PageProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { id, moduleId } = await params;
  const dynamicData = await getModuleData(id, moduleId);

  const chapter = CHAPTERS.find((c) => c.id === id);
  const chapterName = chapter?.title || "";
  const moduleName = dynamicData?.title || "";

  return {
    title: `${SITE_NAME} - ${chapterName} - ${moduleName}`,
    description:
      dynamicData?.metadata?.description || chapter?.description || SITE_NAME,
    keywords: dynamicData?.metadata?.keywords || [
      chapterName,
      moduleName,
      SITE_NAME
    ]
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const chapterId = resolvedParams.id as ChapterId;
  const moduleId = resolvedParams.moduleId as ModuleId;

  const dynamicData = await getModuleData(chapterId, moduleId);

  // Dynamically load questions for the specific chapter on the server
  let questions: Question[] = [];
  try {
    if (chapterId === ChapterId.Chapter1) {
      const { CHAPTER1_QUESTIONS } = await import("@/lib/constants/chapter_1");
      questions = CHAPTER1_QUESTIONS[moduleId] || [];
    } else if (chapterId === ChapterId.Chapter2) {
      const { CHAPTER2_QUESTIONS } = await import("@/lib/constants/chapter_2");
      questions = CHAPTER2_QUESTIONS[moduleId] || [];
    }
  } catch (error) {
    console.error("Error loading questions:", error);
  }

  return (
    <div className="animate-in fade-in duration-700">
      <ModuleClient
        chapterId={chapterId}
        moduleId={moduleId}
        dynamicData={dynamicData}
        questions={questions}
      />
    </div>
  );
}

// Optimization: Pre-generate static paths for all chapters and modules
export async function generateStaticParams() {
  const { CHAPTERS } = await import("@/lib/constants");

  const paths = CHAPTERS.flatMap((chapter) =>
    chapter.modules.map((module) => ({
      id: chapter.id,
      moduleId: module.id
    }))
  );

  return paths;
}
