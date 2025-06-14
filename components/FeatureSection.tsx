"use client";

import { AnimatedBeams } from "./ui/AnimatedBeams";

export default function Setup () {
    return (
        <section className="relative max-w-screen-xl mx-auto px-4 md:px-8">
            <div className="absolute top-0 left-0 w-full h-full opacity-40"></div>
            <div className="relative z-10 gap-5 items-center lg:flex">
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                    <h3 className="text-3xl text-[#22240c] font-semibold md:text-4xl">
                        I use a Enterprise Stack For<span className="text-[#16130b]"> Everyone</span>
                    </h3>
                    <p className="text-gray-500 leading-relaxed mt-3">
                        I build with Next.js, a powerful React framework that enables lightning-fast performance, server-side rendering, and seamless routing. My interfaces are styled using Tailwind CSS, giving each site a clean, responsive design system with pixel-perfect precision. For backend functionality and database management, I rely on Supabase — a secure, real-time backend as a service that lets us ship features quickly and reliably.
                    </p>
                    <p className="text-gray-500 leading-relaxed mt-3">
                         All code is version-controlled with GitHub, ensuring collaboration and transparency throughout the development process. Finally, I will deploy to Vercel, the creators of Next.js, which allows us to push updates instantly and serve content globally with best-in-class speed and uptime.

                        This stack empowers us to build professional-grade websites that are both beautiful and robust — and more importantly, built to grow with your brand.
                    </p>
                    <a
                        className="mt-5 px-4 py-2 text-[#22240c] font-medium bg-indigo-50 rounded-full inline-flex items-center"
                        href="/Pricing">
                        Try it out
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-1 duration-150" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                    </a>
                </div>
                <div className="flex-1 mt-5 mx-auto sm:w-9/12 lg:mt-0 lg:w-auto">
                    <AnimatedBeams />
                </div>
            </div>
        </section>
    )
}
