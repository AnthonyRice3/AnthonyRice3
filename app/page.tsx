"use client";

import AR3 from "@/components/AR3";
import FeatureSection from "@/components/FeatureSection";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Nav from "@/components/Nav";
import { ProjectsSidebar } from "@/components/ProjectSidebar";


export default function Home() {
  return (
    
    <div className="bg-black min-h-screen">
      <Nav />
      <Hero />
      <AR3 /> 
      <FeatureSection />
      <ProjectsSidebar />
      <Footer />
      <div className="absolute -top-20 -left-20 w-72 h-72 bg-lime-900 rounded-full opacity-20 blur-3xl"></div>
      
      <div className="absolute -bottom-450 -left-20 w-72 h-72 bg-green-300 rounded-full opacity-20 blur-3xl"></div>
      
    </div>
  );
}
