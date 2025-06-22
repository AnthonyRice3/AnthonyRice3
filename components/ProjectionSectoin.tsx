"use client"

import { motion } from 'framer-motion';
import Link from "next/link";
import { Timeline } from './Timeline';
import { Spotlight } from './ui/spotlight';
import SkillsMarquee from './SkillsMarquee';

export default function ProjectSection () {

    return(
        <section id="Projects">
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