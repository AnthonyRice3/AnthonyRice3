"use client"

import { motion } from 'framer-motion';
import Link from "next/link";
import { Timeline } from './Timeline';
import { Spotlight } from './ui/spotlight';
import SkillsMarquee from './SkillsMarquee';


const colors = {
  50: "#365314",
  100: "#365314",
  200: "#BBF7D0",
  300: "#365314",
  400: "#365314",
  500: "#365314",
  600: "#365314",
  700: "#365314",
  800: "#365314",
  900: "#365314",
};

const svgStyle = {
    transform: `translateY(${scrollY * 0.15}px)`,
    transition: "transform 0.1s linear",
  };
export default function ProjectSection () {

    return(
      
      
        <section id="Projects">
          <Spotlight
                          gradientFirst="radial-gradient(68.54% 68.72% at 55.02% 31.46%, #36531420 0, #86EFAC10 50%, hsla(336, 100%, 45%, 0) 80%)"
                          gradientSecond="radial-gradient(50% 50% at 50% 50%, #36531420 0, #86EFAC10 80%, transparent 100%)"
                          gradientThird="radial-gradient(50% 50% at 50% 50%, #36531420 0, #86EFAC10 80%, transparent 100%)"
                      />
                      <svg
        className="nset-0 w-full h-full"
        style={svgStyle}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(200,180,160,0.08)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <line x1="0" y1="20%" x2="100%" y2="20%" className="grid-line" style={{ animationDelay: "0.5s" }} />
        <line x1="0" y1="80%" x2="100%" y2="80%" className="grid-line" style={{ animationDelay: "1s" }} />
        <line x1="20%" y1="0" x2="20%" y2="100%" className="grid-line" style={{ animationDelay: "1.5s" }} />
        <line x1="80%" y1="0" x2="80%" y2="100%" className="grid-line" style={{ animationDelay: "2s" }} />
        <line
          x1="50%"
          y1="0"
          x2="50%"
          y2="100%"
          className="grid-line"
          style={{ animationDelay: "2.5s", opacity: 0.05 }}
        />
        <line
          x1="0"
          y1="50%"
          x2="100%"
          y2="50%"
          className="grid-line"
          style={{ animationDelay: "3s", opacity: 0.05 }}
        />
        <circle cx="20%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3s" }} />
        <circle cx="80%" cy="20%" r="2" className="detail-dot" style={{ animationDelay: "3.2s" }} />
        <circle cx="20%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.4s" }} />
        <circle cx="80%" cy="80%" r="2" className="detail-dot" style={{ animationDelay: "3.6s" }} />
        <circle cx="50%" cy="50%" r="1.5" className="detail-dot" style={{ animationDelay: "4s" }} />
      </svg>

      {/* Corner elements */}
      <div className="corner-element top-8 left-8" style={{ animationDelay: "4s" }}>
        <div
          className="absolute top-0 left-0 w-2 h-2 opacity-30"
          style={{ background: colors[200] }}
        ></div>
      </div>
      <div className="corner-element top-8 right-8" style={{ animationDelay: "4.2s" }}>
        <div
          className="absolute top-0 right-0 w-2 h-2 opacity-30"
          style={{ background: colors[200] }}
        ></div>
      </div>
      <div className="corner-element bottom-8 left-8" style={{ animationDelay: "4.4s" }}>
        <div
          className="absolute bottom-0 left-0 w-2 h-2 opacity-30"
          style={{ background: colors[200] }}
        ></div>
      </div>
      <div className="corner-element bottom-8 right-8" style={{ animationDelay: "4.6s" }}>
        <div
          className="absolute bottom-0 right-0 w-2 h-2 opacity-30"
          style={{ background: colors[200] }}
        ></div>
      </div>
            <div className="container text-center relative z-10 px-4  md:max-w-4xl md:px-6 lg:max-w-7xl">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                      <span className="my-8 inline-block rounded-full text-white border border-green-300/30 px-3 py-1 text-xs">
                                Procjects & Labs
                            </span>
                            <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-light md:text-5xl lg:text-7xl text-white">
                                Real Work, Real Results, {' '}
                                <span className="text-green-300">Hands-On</span> & <span className="text-green-300"> Virtual</span>.
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
                  <SkillsMarquee />
                  <Timeline />
        </section>
    )
}