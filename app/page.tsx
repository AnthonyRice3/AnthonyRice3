"use client";

import AR3 from "@/components/AR3";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import { Process } from "@/components/Process";


export default function Home() {
  return (
    
    <div className="bg-black min-h-screen">
      <Nav />
      <Hero />
      <AR3 /> 
      <FeatureSection />
      <Process />
      <Footer />
    </div>
  );
}
