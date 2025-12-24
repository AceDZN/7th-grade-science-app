import fs from "fs/promises";
import path from "path";
import { ChapterId, ModuleId, DynamicModuleData } from "@/lib/types";
// Client component for interactive module content
import ModuleClient from "./module-client";
import type { Metadata, ResolvingMetadata } from "next";

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
  return {
    title: dynamicData?.title || "משפט מספר 1",
    description: dynamicData?.title || "משפט מספר 1"
  };
}

export default async function Page({ params }: PageProps) {
  const resolvedParams = await params;
  const chapterId = resolvedParams.id as ChapterId;
  const moduleId = resolvedParams.moduleId as ModuleId;

  const dynamicData = await getModuleData(chapterId, moduleId);

  return (
    <div className="animate-in fade-in duration-700">
      <ModuleClient
        chapterId={chapterId}
        moduleId={moduleId}
        dynamicData={dynamicData}
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
