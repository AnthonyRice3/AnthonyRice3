"use client";

import AR3 from "@/components/AR3";
import FeatureSection from "@/components/FeatureSection";
import Hero from "@/components/Hero";
import { Process } from "@/components/Process";


export default function Home() {
  return (
    <div className="bg-black min-h-screen">
    <Hero />
    <AR3 /> 
    <FeatureSection />
    <Process />
    </div>
  );
}
