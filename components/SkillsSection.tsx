"use client"

import React from "react";
import { motion } from 'framer-motion';
import Link from "next/link";
import { BentoGrid, BentoGridItem } from "../components/ui/BentoGrid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { Spotlight } from "./ui/spotlight";
import SkillsCards from "./SkillsCards";
import { HonorableMentions } from "./HonorableMentions";

export function SkillsSection() {
  return (
    <section id="SkillsAndTools" className="bg-black pt-8">
    <Spotlight
                    gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, #36531420 0, #86EFAC10 50%, hsla(336, 100%, 45%, 0) 80%)"
                    gradientSecond="radial-gradient(50% 50% at 50% 50%, #36531420 0, #86EFAC10 80%, transparent 100%)"
                    gradientThird="radial-gradient(50% 50% at 50% 50%, #36531420 0, #86EFAC10 80%, transparent 100%)"
                />
    <div className="container relative z-10 px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="mb-6 inline-block rounded-full text-white border border-green-300/30 px-3 py-1 text-xs">
            SKILLS & TOOLS
          </span>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-light md:text-5xl lg:text-7xl text-white">
            What I Use to {' '}
            <span className="text-green-300">Build</span> & <span className="text-green-300"> Secure Systems</span>.
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 md:text-xl">
            Want more details about my stack or workflow? Just send a message, I&lsquo;d be happy to walk you through it.
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
        {/* <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
        >
          <div className="relative flex h-40 w-full overflow-hidden md:h-64">
            <Image
              src="https://blocks.mvp-subha.me/assets/earth.png"
              alt="Earth"
              width={350}
              height={350}
              className="absolute left-1/2 top-0 -z-10 mx-auto -translate-x-1/2 px-4 opacity-80"
            />
          </div>
          <div className="relative z-10 mx-auto max-w-5xl overflow-hidden rounded-lg shadow-[0_0_50px_rgba(155,135,245,0.2)]">
            <Image
              src="https://blocks.mvp-subha.me/assets/lunexa-db.png"
              alt="Lunexa Dashboard"
              width={1920}
              height={1080}
              className="h-auto w-full rounded-lg border border-white/10"
            />
          </div>
        </motion.div> */}
      </div>  
      <SkillsCards />
      <h1 className="text-center text-white text-2xl py-8">My Favorite Tools</h1>
    <BentoGrid className="w-screen mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          img={item.img}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    <div className="py-12">
      <h1 className="text-white text-2xl text-center py-8">Honorable Mentions</h1>
      <HonorableMentions />
    </div>
    </section>
  );
}

const items = [
  {
    title: "Wire Shark",
    description: "Network protocol analyzer for capturing and inspecting traffic to identify suspicious patterns or intrusions.",
    img: "/WireShark.png",
    icon: <IconClipboardCopy className="h-4 w-4 text-white" />,
  },
  {
    title: "Splunk",
    description: "A popular SIEM platform used for log aggregation, threat detection, alerting, and compliance.",
    img: "/Splunk.png",
    icon: <IconFileBroken className="h-4 w-4 text-white" />,
  },
  {
    title: "AWS Security Hub / CloudTrail",
    description: "Cloud-native tools for auditing changes, monitoring activity, and enforcing security policies in AWS.",
    img: "/Aws.png",
    icon: <IconSignature className="h-4 w-4 text-white" />,
  },
  {
    title: "Github",
    description:
      "A cloud-based platform for version control and collaboration using Git. I use GitHub to manage codebases, contribute to open-source projects, and collaborate efficiently with teams through branching, pull requests, and CI integrations",
    img: "/Github.png",
    icon: <IconTableColumn className="h-4 w-4 text-white" />,
  },
  {
    title: "Metasploit Framework",
    description: "Penetration testing framework for exploit development, testing vulnerabilities, and simulating attacks.",
    img: "/Metasploit.png",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-white" />,
  },
  {
    title: "Operating Systems I Use",
    description: "Operating systems manage hardware, run applications, and allow users to interact with computers through an organized software environment. These are the ones I'm most familiar with.",
    img: "/Opsystem.png",
    icon: <IconBoxAlignTopLeft className="h-4 w-4 text-white" />,
  },
  {
    title: "Adobe Suite",
    description: "A suite of industry-leading creative tools used for design, video editing, digital art, and multimedia production. I use Adobe software (Photoshop, Illustrator, Premiere Pro) to create high-quality visual assets and streamline content workflows.",
    img: "/Adobe.png",
    icon: <IconBoxAlignRightFilled className="h-4 w-4 text-white" />,
  },
];
