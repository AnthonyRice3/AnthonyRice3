"use client"

import React from "react";
import { motion } from 'framer-motion';
import Link from "next/link";

export default function ResumeHeader () {

    return (

        <div className="container relative z-10 px-4 text-center md:max-w-4xl md:px-6 lg:max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <span className="mb-6 inline-block rounded-full border border-green-300/30 px-3 py-1 text-xs text-green-300border-green-300">
            NEXT GENERATION OF CRYPTO TRADING
          </span>
          <h1 className="mx-auto mb-6 max-w-4xl text-4xl font-light md:text-5xl lg:text-7xl">
            Trade Smarter with{' '}
            <span className="text-green-300border-green-300">AI-Powered</span> Crypto Insights
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-lg text-white/60 md:text-xl">
            Lunexa combines artificial intelligence with cutting-edge trading
            strategies to help you maximize your crypto investments with
            precision and ease.
          </p>
 
          <div className="mb-10 flex flex-col items-center justify-center gap-4 sm:mb-0 sm:flex-row">
            <Link
              href="/docs/get-started"
              className="neumorphic-button hover:shadow-[0_0_20px_rgba(155, 135, 245, 0.5)] relative w-full overflow-hidden rounded-full border border-white/10 bg-gradient-to-b from-white/10 to-white/5 px-8 py-4 text-white shadow-lg transition-all duration-300 hover:border-green-300/30 sm:w-auto"
            >
              Get Started
            </Link>
            <a
              href="#how-it-works"
              className="flex w-full items-center justify-center gap-2 text-white/70 transition-colors hover:text-white sm:w-auto"
            >
              <span>Learn how it works</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m6 9 6 6 6-6"></path>
              </svg>
            </a>
          </div>
        </motion.div>
      </div>
    )
}