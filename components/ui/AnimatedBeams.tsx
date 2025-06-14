"use client";

import React, { forwardRef, useRef } from "react";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import Image from "next/image";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className,
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export function AnimatedBeams({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10",
        className,
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        <div className="flex flex-col justify-center">
          <Circle ref={div7Ref}>
            <Icons.user />
          </Circle>
        </div>
        <div className="flex flex-col justify-center">
          <Circle ref={div6Ref} className="size-32">
            <Image alt="logo" src="/ar3logotr.png" width={250} height={250} />
          </Circle>
        </div>
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div1Ref}>
            <Icons.Nextjs />
          </Circle>
          <Circle ref={div2Ref}>
            <Icons.Tailwind />
          </Circle>
          <Circle ref={div3Ref}>
            <Icons.Supabase />
          </Circle>
          <Circle ref={div4Ref}>
            <Icons.GitHub />
          </Circle>
          <Circle ref={div5Ref}>
            <Icons.Vercel />
          </Circle>
        </div>
      </div>

      {/* AnimatedBeams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={div6Ref}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={div7Ref}
        duration={3}
      />
    </div>
  );
}

const Icons = {
  Nextjs: () => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 512 512"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="nextjs-grad" x1="100%" y1="100%" x2="0%" y2="0%">
        <stop offset="0%" stopColor="#000" stopOpacity="0" />
        <stop offset="100%" stopColor="#fff" />
      </linearGradient>
    </defs>
    <circle cx="256" cy="256" r="256" fill="black" />
    <path
      d="M176 160h24l136 192h-24L176 160Z"
      fill="url(#nextjs-grad)"
    />
    <rect x="312" y="160" width="24" height="100" fill="url(#nextjs-grad)" />
  </svg>
),


  Tailwind: () => (
    <svg width="100" height="100" viewBox="0 0 48 48" fill="none">
      <path
        d="M6 34c10-8 22.5 6 36 0"
        stroke="#38BDF8"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <path
        d="M6 24c10-8 22.5 6 36 0"
        stroke="#06B6D4"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  ),

  Supabase: () => (
  <svg
    width="100"
    height="100"
    viewBox="0 0 256 256"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="supabaseGradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#3ecf8e" />
        <stop offset="100%" stopColor="#0b8f5e" />
      </linearGradient>
    </defs>
    <path
      d="M132.6 0C137.2 0 141.2 3.2 142.6 7.7L168.3 94.2C169.8 99.1 166.4 104 161.2 104H108.3L124.3 156.8C125.8 161.9 121.9 167 116.6 167H27.4C22.8 167 18.9 163.8 17.5 159.3L2.2 108.3C0.7 103.4 4.1 98.5 9.3 98.5H62.2L45.6 45.3C44.1 40.3 48.1 35.3 53.3 35.3H132.6Z"
      fill="url(#supabaseGradient)"
    />
    <path
      d="M122.8 256C118.2 256 114.2 252.8 112.8 248.3L87.1 161.8C85.6 156.9 89 152 94.2 152H147.1L131.1 99.2C129.6 94.1 133.5 89 138.9 89H228.1C232.7 89 236.6 92.2 238 96.7L253.3 147.7C254.8 152.6 251.4 157.5 246.2 157.5H193.3L209.9 210.7C211.4 215.7 207.4 220.7 202.2 220.7H122.8Z"
      fill="#3ecf8e"
    />
  </svg>
),


  GitHub: () => (
    <svg width="100" height="100" viewBox="0 0 16 16" fill="currentColor">
      <path
        d="M8 0C3.58 0 0 3.58 0 8
          c0 3.54 2.29 6.53 5.47 7.59
          .4.07.55-.17.55-.38
          0-.19-.01-.82-.01-1.49
          -2.01.37-2.53-.49-2.69-.94
          -.09-.23-.48-.94-.82-1.13
          -.28-.15-.68-.52-.01-.53
          .63-.01 1.08.58 1.23.82
          .72 1.21 1.87.87 2.33.66
          .07-.52.28-.87.51-1.07
          -1.78-.2-3.64-.89-3.64-3.95
          0-.87.31-1.59.82-2.15
          -.08-.2-.36-1.02.08-2.12
          0 0 .67-.21 2.2.82
          .64-.18 1.32-.27 2-.27
          .68 0 1.36.09 2 .27
          1.53-1.04 2.2-.82 2.2-.82
          .44 1.1.16 1.92.08 2.12
          .51.56.82 1.27.82 2.15
          0 3.07-1.87 3.75-3.65 3.95
          .29.25.54.73.54 1.48
          0 1.07-.01 1.93-.01 2.2
          0 .21.15.46.55.38
          A8.013 8.013 0 0016 8
          c0-4.42-3.58-8-8-8z"
      />
    </svg>
  ),

  Vercel: () => (
    <svg width="100" height="100" viewBox="0 0 60 60" fill="none">
      <path d="M30 5L5 55h50L30 5z" fill="black" />
    </svg>
  ),

  user: () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#000000"
      strokeWidth="2"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
};
