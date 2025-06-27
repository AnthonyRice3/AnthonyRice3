"use client";
import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/SidebarItems";
import {
  IconArrowLeft,
  
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";

import { cn } from "@/lib/utils";
import { SkillsSection } from "./SkillsSection";



export function SkillsSidebar() {
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
      <SkillsSection />
      </div>
    </div>
  );
}


// const Dashboard = () => {
//   return (
//     <div className="flex flex-1">
//       <div className="flex h-full w-full flex-1 flex-col gap-2 rounded-tl-2xl border border-neutral-200 bg-white p-2 md:p-10 dark:border-neutral-700 dark:bg-neutral-900">
//         <div className="flex gap-2">
//           {[...new Array(4)].map((i, idx) => (
//             <div
//               key={"first-array-demo-2" + idx}
//               className="h-20 w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
//             ></div>
//           ))}
//         </div>
//         <div className="flex flex-1 gap-2">
//           {[...new Array(2)].map((i, idx) => (
//             <div
//               key={"second-array-demo-2" + idx}
//               className="h-full w-full animate-pulse rounded-lg bg-gray-100 dark:bg-neutral-800"
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };
