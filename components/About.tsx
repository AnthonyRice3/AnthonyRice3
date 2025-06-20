"use client"

import Link from "next/link";
import { motion } from 'framer-motion';
import Interests from "./Interests";
import { Spotlight } from "./ui/spotlight";

export default function About () {

    return (
        <section id="AboutMe" className="py-14">
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
                        ABOUT ME
                      </span>
                      <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-light md:text-5xl lg:text-7xl text-white">
                        My Journey Through{' '}
                        <span className="text-green-300">Tech, Design,</span> and <span className="text-green-300"> Security</span>.
                      </h1>
                      <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 md:text-xl">
                        Curious to know more? Feel free to reach out anytime, I&lsquo;m always open to share more of my story and experience.
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
                <Interests />
            <div className=" mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className=" px-4 space-y-3  sm:px-0 md:mt-0 lg:max-w-2xl">
                        <p className="text-green-300 text-3xl font-semibold sm:text-4xl pb-4">
                            About Me
                        </p>
                        <p className=" text-white leading-9 text-xl">
                            My name is Anthony Rice III, and I&lsquo;m a multidisciplinary technologist from Michigan with a deep-rooted passion for both art and technology. I&lsquo;ve always been driven to excel — graduating with a 3.9 GPA, earning a spot on the honor roll, and receiving an academic scholarship to the University of Toledo, where I studied Business Management and played on the Men’s Basketball team. While I valued business and athletics, my creative side kept pulling me toward something more expressive. That led me to transfer to American Intercontinental University in Atlanta, where I pursued a degree in Video and Audio Production. It was there that I discovered my passion for blending creativity with technology — the moment everything began to click.

                            After graduation, I dove into graphic design, which evolved into web design, and eventually matured into full-scale web development. As I built projects for myself and freelance clients, word of mouth began to grow. My work ethic, quality, and design sensibility opened doors I hadn&lsquo;t expected. I was invited to collaborate on a nonprofit mental health tech initiative, and that marked the start of my professional network in tech. That network led to an opportunity in blockchain development around 2021, where I found my stride building smart contracts, DeFi DApps, and contributing to the decentralized future of the web.
                        </p>
                    </div>
                    <div className=" px-4 space-y-3 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <p className=" text-white leading-9 text-xl">
                            Hungry to understand the deeper layers of tech, I began studying computer science on my own, then expanded into networking and infrastructure to better understand system security. That led me to enroll in Springboard&lsquo;s Cybersecurity Career Track, a nine-month intensive program where I completed hands-on labs in application security, network analysis, and threat detection. Simultaneously, I earned my CompTIA Security+ certification, solidifying my foundational knowledge in defensive security and compliance.

                            Today, I&lsquo;m equipped with a unique hybrid skill set that spans design, development, blockchain, and cybersecurity — giving me the perspective to build secure systems from the ground up. Whether it&lsquo;s securing web applications, writing smart contracts, or protecting data across cloud platforms, I approach every challenge with the same curiosity and drive that&lsquo;s defined my journey. My next goal is to complete a bachelor&lsquo;s degree in Computer Science while continuing to work and grow in the cybersecurity and fintech
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}