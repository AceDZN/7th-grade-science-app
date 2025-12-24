"use client";

import React from "react";
import { SimulationBlock } from "@/lib/types";
import {
  VolumeSimulation,
  DisplacementSimulation,
  GravitySimulation,
  FloatingExperiment,
  CompressionSimulation,
  DiffusionSimulation,
  ParticleModelSimulation,
  SurfaceTensionSimulation,
  PhaseTransitionSimulation,
  DensityCalculator
} from "@/components/simulations";
import { PhaseGraph } from "@/components/PhaseGraph";

// Registry of available simulations
const SIMULATION_REGISTRY: Record<string, React.ComponentType> = {
  VolumeSimulation,
  DisplacementSimulation,
  GravitySimulation,
  FloatingExperiment,
  CompressionSimulation,
  DiffusionSimulation,
  ParticleModelSimulation,
  SurfaceTensionSimulation,
  PhaseTransitionSimulation,
  DensityCalculator,
  PhaseGraph
};

export const DynamicSimulation = ({ block }: { block: SimulationBlock }) => {
  const Component = SIMULATION_REGISTRY[block.componentName];

  if (!Component) {
    return (
      <div className="p-4 bg-red-100 text-red-600 rounded-xl">
        Simulation "{block.componentName}" not found
      </div>
    );
  }

  return (
    <div className="bg-white p-4 md:p-6 lg:p-10 rounded-xl md:rounded-2xl lg:rounded-3xl shadow-sm border border-slate-200 mb-6 md:mb-8">
      <Component />
    </div>
  );
};
