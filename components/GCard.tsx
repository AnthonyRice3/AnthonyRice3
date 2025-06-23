"use client";
import React from "react";
import Image from "next/image";
import { CardGradient } from "./ui/CardGradient";


export function GCard() {
  return (
    <div>
      <CardGradient className="rounded-[22px] p-4 sm:p-10 bg-black dark:bg-zinc-900">
        <Image
          src={`/ar1.png`}
          alt="jordans"
          height="400"
          width="400"
          className="object-contain rounded-2xl"
        />
        <p className="text-base sm:text-xl text-black mt-4 mb-2 dark:text-neutral-200">
          
        </p>

        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          
        </p>
        {/* <button className="rounded-full pl-4 pr-1 py-1 text-white flex items-center space-x-1 bg-black mt-4 text-xs font-bold dark:bg-zinc-800">
          <span>Buy now </span>
          <span className="bg-zinc-700 rounded-full text-[0.6rem] px-2 py-0 text-white">
            $100
          </span>
        </button> */}
      </CardGradient>
    </div>
  );
}
