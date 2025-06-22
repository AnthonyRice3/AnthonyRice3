"use client"

import React from "react";
import { motion } from 'framer-motion';
import Link from "next/link";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@heroui/react";
import { Spotlight } from "./ui/spotlight";
import Image from "next/image";



export function ExperienceSection() {

  const checkIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.2} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const tristar = [
  {
    icon: checkIcon,
    title: "Architect & Secure Web Applications",
    desc: "Design and implement secure, scalable web applications that improve system reliability and reduce long-term technical debt."
  },
  {
    icon: checkIcon,
    title: "Review Code for Security and Performance",
    desc: "Conduct in-depth code reviews to maintain quality standards, optimize performance, and proactively eliminate security vulnerabilities."
  },
  {
    icon: checkIcon,
    title: "Build and Maintain RESTful APIs",
    desc: "Develop and manage secure APIs with strong authentication protocols, enabling seamless integration and data protection across services."
  },
];

const bullrun = [
  {
    icon: checkIcon,
    title: "Live Stream Quality Monitoring",
    desc: "Monitored and optimized live audio/video quality across platforms, ensuring smooth broadcasts that enhanced viewer retention and brand trust."
  },
  {
    icon: checkIcon,
    title: "Encoder & Broadcast Configuration",
    desc: "Configured streaming software and hardware for live sessions, improving broadcast stability and elevating production quality across all channels."
  },
  {
    icon: checkIcon,
    title: "Content Scheduling & Distribution",
    desc: "Managed content scheduling and multi-platform distribution, streamlining delivery and increasing content visibility and engagement over time."
  },
];

const saviink = [
  {
    icon: checkIcon,
    title: "Brand Asset Creation",
    desc: "Designed logos, flyers, and marketing assets that strengthened client brand identity and improved visual consistency across campaigns."
  },
  {
    icon: checkIcon,
    title: "Client Collaboration & Revisions",
    desc: "Worked closely with clients to interpret feedback and refine designs, ensuring project goals were met with clarity and style."
  },
  {
    icon: checkIcon,
    title: "Client Collaboration & Revisions",
    desc: "Worked closely with clients to interpret feedback and refine designs, ensuring project goals were met with clarity and style."
},
];

  return (
    <section id="Experience" className="bg-black pt-8">
    <Spotlight
                    gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, #36531420 0, #86EFAC10 50%, hsla(336, 100%, 45%, 0) 80%)"
                    gradientSecond="radial-gradient(50% 50% at 50% 50%, #36531420 0, #86EFAC10 80%, transparent 100%)"
                    gradientThird="radial-gradient(50% 50% at 50% 50%, #36531420 0, #86EFAC10 80%, transparent 100%)"
                />    
    <div className="container text-center relative z-10 px-4  md:max-w-4xl md:px-6 lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="mb-6 inline-block rounded-full text-white border border-green-300/30 px-3 py-1 text-xs">
                    Experience & Education
                </span>
                <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-light md:text-5xl lg:text-7xl text-white">
                    Where I&lsquo;ve {' '}
                    <span className="text-green-300">Grown, Built,</span> & <span className="text-green-300"> Led Projects</span>.
                </h1>
                <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 md:text-xl">
                    Have questions about my roles or responsibilities? Don&lsquo;t hesitate to reach out — Id love to share more insights.
                </p>
 
          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:mb-0 sm:flex-row pb-8">
            <Link
              href="/Contact"
              className="neumorphic-button hover:shadow-[0_0_20px_rgba(155, 135, 245, 0.5)] relative w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:border-green-300/30 sm:w-auto"
            >
              Contact
            </Link>
          </div>
          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:mb-0 sm:flex-row pb-8">
            <Image
              src="/sec+.jpg" 
              alt="Security+ Cert"
              width={350}
              height={350}
              className="rounded-2xl"
            />
          </div>
        </motion.div>
      </div>
          <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
              <div className="max-w-xl px-8">
                  <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                      Tri Star Labs -  Atlanta, GA
                  </h3>
                  <p className="mt-3">
                      Lead Web Developer - AUG 2020 - PRESENT 
                  </p>
              </div>
              <div className="py-12 mt-12 lg:mt-0">
                  <ul className="grid gap-8 sm:grid-cols-2">
                      {
                          tristar.map((item, idx) => (
                              <li key={idx} className="flex gap-x-4">
                                  <div className="flex-none w-12 h-12 bg-green-300 text-lime-950 rounded-lg flex items-center justify-center">
                                      {item.icon}
                                  </div>
                                  <div>
                                      <h4 className="text-lg text-gray-100 font-semibold">
                                          {item.title}
                                      </h4>
                                      <p className="mt-3">
                                          {item.desc}
                                      </p>
                                  </div>
                              </li>
                          ))
                      }
                  </ul>
              </div>
          </div>
        
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
              <div className="max-w-xl px-8">
                  <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                      Bullrun Studios -  Atlanta, Ga
                  </h3>
                  <p className="mt-3">
                      Streaming Operations Manager - FEB 2019 - FEB 2020
                  </p>
              </div>
              <div className="py-12 mt-12 lg:mt-0">
                  <ul className="grid gap-8 sm:grid-cols-2">
                      {
                          bullrun.map((item, idx) => (
                              <li key={idx} className="flex gap-x-4">
                                  <div className="flex-none w-12 h-12 bg-green-300 text-lime-950 rounded-lg flex items-center justify-center">
                                      {item.icon}
                                  </div>
                                  <div>
                                      <h4 className="text-lg text-gray-100 font-semibold">
                                          {item.title}
                                      </h4>
                                      <p className="mt-3">
                                          {item.desc}
                                      </p>
                                  </div>
                              </li>
                          ))
                      }
                  </ul>
              </div>
          </div>
        
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
              <div className="max-w-xl px-8">
                  <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                      Savi Ink LLC
                  </h3>
                  <p className="mt-3">
                      GRAPHIC DESIGNER - JAN 2015 - NOV 2018
                  </p>
              </div>
              <div className="py-12 mt-12 lg:mt-0">
                  <ul className="grid gap-8 sm:grid-cols-2">
                      {
                          saviink.map((item, idx) => (
                              <li key={idx} className="flex gap-x-4">
                                  <div className="flex-none w-12 h-12 bg-green-300 text-lime-950 rounded-lg flex items-center justify-center">
                                      {item.icon}
                                  </div>
                                  <div>
                                      <h4 className="text-lg text-gray-100 font-semibold">
                                          {item.title}
                                      </h4>
                                      <p className="mt-3">
                                          {item.desc}
                                      </p>
                                  </div>
                              </li>
                          ))
                      }
                  </ul>
              </div>
          </div>
        
        
        <div className="text-center text-white py-24">
          <h1 className="text-2xl text-green-300 py-4 ">EDUCATION</h1>
          <Table removeWrapper aria-label="static collection table">
            <TableHeader>
              <TableColumn className="bg-green-300 text-lg text-black font-bold text-start">SCHOOL</TableColumn>
              <TableColumn className="bg-green-300 text-lg text-black font-bold text-start">PLACE</TableColumn>
              <TableColumn className="bg-green-300 text-lg text-black font-bold text-start">STUDY</TableColumn>
            </TableHeader>
            <TableBody>
              <TableRow key="1">
                <TableCell>Springboard</TableCell>
                <TableCell>Online</TableCell>
                <TableCell>Cyber Security</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>American InterContinental University</TableCell>
                <TableCell>Atlanta, GA</TableCell>
                <TableCell>Audio/ Video Production</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>University of Toledo</TableCell>
                <TableCell>Toledo, OH</TableCell>
                <TableCell>Business Management</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>Ferdale HS</TableCell>
                <TableCell>Ferndale, MI</TableCell>
                <TableCell>General Studies</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
    </section>
  );
}
