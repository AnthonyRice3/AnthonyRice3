"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/SidebarItems";
import {
  IconArrowLeft,
  
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import ProjectSection from "./ProjectionSectoin";


export function ProjectsSidebar() {
  const links = [
    {
      label: "About",
      href: "/Resume#AboutMe",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-green-200 dark:text-neutral-200" />
      ),
    },
    {
      label: "Skills / Tools",
      href: "/Resume/Skills#SkillsAndTools",
      icon: (
        <IconUserBolt className="h-5 w-5 shrink-0 text-green-200 dark:text-neutral-200" />
      ),
    },
    {
      label: "Experience / Education",
      href: "/Resume/Experience#Experience",
      icon: (
        <IconSettings className="h-5 w-5 shrink-0 text-green-200 dark:text-neutral-200" />
      ),
    },
    {
      label: "Projects / Labs",
      href: "/Resume/Projects#Projects",
      icon: (
        <IconArrowLeft className="h-5 w-5 shrink-0 text-green-200 dark:text-neutral-200" />
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "mx-auto flex w-full flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-black md:flex-row dark:border-neutral-700 dark:bg-neutral-800",
        "h-auto",
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={false}>
        <SidebarBody className="justify-between gap-10 bg-black">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
          
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          
        </SidebarBody>
      </Sidebar>
      <div>
      
      <ProjectSection />
      </div>
    </div>
  );
}

