"use client"

import React from "react";
import { motion } from 'framer-motion';
import Link from "next/link";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell} from "@heroui/react";



export function ExperienceSection() {

  const features = [
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                </svg>,
            title: "Fast Refresh",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>,
            title: "Datacenter security",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue."
        },
        {
            icon:
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0l4.179 2.25L12 21.75 2.25 16.5l4.179-2.25m11.142 0l-5.571 3-5.571-3" />
                </svg>,
            title: "Build on your terms",
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue."
        },
    ]

  return (
    <section id="Experience" className="bg-black pt-8">
        
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
        </motion.div>
      </div>
          <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
              <div className="max-w-xl">
                  <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                      Do more with less complexity
                  </h3>
                  <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus
                  </p>
              </div>
              <div className="py-12 mt-12 lg:mt-0">
                  <ul className="grid gap-8 sm:grid-cols-2">
                      {
                          features.map((item, idx) => (
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
        <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
              <div className="max-w-xl">
                  <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                      Do more with less complexity
                  </h3>
                  <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus
                  </p>
              </div>
              <div className="py-12 mt-12 lg:mt-0">
                  <ul className="grid gap-8 sm:grid-cols-2">
                      {
                          features.map((item, idx) => (
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
        <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 text-gray-300 justify-between gap-24 lg:flex md:px-8">
              <div className="max-w-xl">
                  <h3 className="text-white text-3xl font-semibold sm:text-4xl">
                      Do more with less complexity
                  </h3>
                  <p className="mt-3">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec congue, nisl eget molestie varius, enim ex faucibus purus
                  </p>
              </div>
              <div className="py-12 mt-12 lg:mt-0">
                  <ul className="grid gap-8 sm:grid-cols-2">
                      {
                          features.map((item, idx) => (
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
        <div className="absolute inset-0 max-w-md mx-auto h-72 blur-[118px]" style={{ background: "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)" }}></div>
        
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
                <TableCell>Tony Reichert</TableCell>
                <TableCell>CEO</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="2">
                <TableCell>Zoey Lang</TableCell>
                <TableCell>Technical Lead</TableCell>
                <TableCell>Paused</TableCell>
              </TableRow>
              <TableRow key="3">
                <TableCell>Jane Fisher</TableCell>
                <TableCell>Senior Developer</TableCell>
                <TableCell>Active</TableCell>
              </TableRow>
              <TableRow key="4">
                <TableCell>William Howard</TableCell>
                <TableCell>Community Manager</TableCell>
                <TableCell>Vacation</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
    </section>
  );
}
