'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Rocket, Code, Paintbrush } from 'lucide-react';
import Image from 'next/image';

const features = [
  {
    step: 'Full Stack',
    title: 'Full Stack',
    content:
      'Custom-built applications with both front-end and back-end functionality, optimized for performance, scalability, and user experience across devices.',
    icon: <Rocket className="h-6 w-6 text-green-300" />,
    image: '/site1.PNG',
  },
  {
    step: 'E-Commerce',
    title: 'E-Commerce',
    content:
      'Secure, conversion-focused online stores with integrated payment systems, product management, and mobile-friendly shopping experiences.',
    icon: <Paintbrush className="h-6 w-6 text-green-300" />,
    image: '/site4.PNG',
  },
  {
    step: 'Decentralized Application',
    title: 'Decentralized Application',
    content:
      'Blockchain-powered apps with smart contracts, crypto wallets, and trustless functionality for DeFi, NFTs, or DAO platforms.',
    icon: <Code className="h-6 w-6 text-green-300" />,
    image: '/site14.PNG',
  },
  {
    step: 'Artist Portfolio',
    title: 'Artist Portfolio',
    content:
      'Engaging portfolios for actors, dancers, and musicians, integrating reels, bios, and booking/contact features for talent outreach.',
    icon: <Code className="h-6 w-6 text-green-300" />,
    image: '/site10.PNG',
  },
];

export default function SkillsMarquee() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (4000 / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress]);

  return (
    <div className={'p-8 md:p-12'}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative mx-auto mb-12 max-w-2xl sm:text-center">
          <div className="relative z-10">
            <h2 className="font-geist text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl text-green-300">
              After 5+ Years, I&lsquo;ve Done It All
            </h2>
            <p className="font-geist mt-3 text-green-100/80">
              From full-stack platforms to artist portfolios, I design and develop tailored websites that blend functionality, creativity, and purpose — built to meet the unique needs of each client and industry.
            </p>
          </div>
          <div
            className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
            style={{
              background:
                'linear-gradient(152.92deg, rgba(134,239,172,0.18) 4.54%, rgba(74,222,128,0.22) 34.2%, rgba(134,239,172,0.10) 77.55%)',
            }}
          ></div>
        </div>
        <hr className="mx-auto mb-10 h-px w-1/2 bg-green-300/30" />

        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-10">
          <div className="order-2 space-y-8 md:order-1">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8"
                initial={{ opacity: 0.3, x: -20 }}
                animate={{
                  opacity: index === currentFeature ? 1 : 0.3,
                  x: 0,
                  scale: index === currentFeature ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  className={cn(
                    'flex h-12 w-12 items-center justify-center rounded-full border-2 md:h-14 md:w-14',
                    index === currentFeature
                      ? 'scale-110 border-green-300 bg-green-300/10 text-green-300 [box-shadow:0_0_15px_rgba(134,239,172,0.3)]'
                      : 'border-green-900 bg-green-950',
                  )}
                >
                  {feature.icon}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold md:text-2xl text-green-100">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-green-300/70 md:text-base">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              'relative order-1 h-[200px] overflow-hidden rounded-xl border border-green-300/20 [box-shadow:0_5px_30px_-15px_rgba(134,239,172,0.3)] md:order-2 md:h-[300px] lg:h-[400px]',
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 overflow-hidden rounded-lg"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: 'easeInOut' }}
                    >
                      <Image
                        src={feature.image}
                        alt={feature.title}
                        className="h-full w-full transform object-cover transition-transform hover:scale-105"
                        width={1000}
                        height={500}
                      />
                      <div className="absolute bottom-0 left-0 right-0 h-2/3 bg-gradient-to-t from-green-950 via-green-950/50 to-transparent" />

                      <div className="absolute bottom-4 left-4 rounded-lg bg-green-950/80 p-2 backdrop-blur-sm">
                        <span className="text-xs font-medium text-green-300">
                          {feature.step}
                        </span>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}