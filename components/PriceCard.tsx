"use client";
 
import { Instrument_Serif } from 'next/font/google';
import { cn } from '@/lib/utils';
import Link from 'next/link';
 
const serif = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
});
 
export default function PriceCard() {
  return  (
    <div className="w-full relative min-h-full bg-white text-black font-sans antialiased">
      <section className="relative max-w-7xl sm:px-6 lg:px-8 sm:py-24 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">
        <div className="text-center mb-16 sm:mb-20">
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            <span className={cn("text-7xl font-normal text-lime-900 tracking-tight", serif.className)}>Choose Your</span><br />
            <span className={cn("text-8xl font-normal text-black tracking-tight", serif.className)}>Creative Journey</span>
          </h1>
          <p className="sm:text-lg max-w-3xl text-base text-neutral-600 mr-auto ml-auto">
            From indie creators to enterprise teams, we&apos;ve crafted the perfect plan for every stage of your design evolution
          </p>
        </div>
 
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          <article className="relative hover:border-lime-900 transition-all duration-300 lg:p-10 flex flex-col bg-white border-neutral-200 border-2 rounded-3xl pt-8 pr-8 pb-8 pl-8">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="palette" className="lucide lucide-palette w-5 h-5 text-lime-900"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"></circle><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"></circle><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"></circle><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"></circle></svg>
                <span className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Creative</span>
              </div>
              <span className="text-xs font-medium uppercase bg-red-50 border border-red-200 rounded-full px-3 py-1 text-red-600">
                Perfect Start
              </span>
            </div>
 
            <div className="mb-8">
              <h2 className="lg:text-2xl leading-tight text-2xl font-medium mb-3">Individual Creators</h2>
              <p className="text-neutral-600 text-sm">
                Everything you need to launch your creative projects
              </p>
            </div>
 
            <div className="mb-8">
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl lg:text-5xl font-bold tracking-tight">$150</span>
                <span className="text-neutral-400 mb-1">.00</span>
              </div>
              
            </div>
 
            <div className="flex flex-col gap-3 mb-8">
              <Link href="https://buy.stripe.com/fZu7sKdvYbfVcpSgfG24004" className="w-full rounded-full bg-lime-900 text-white px-6 py-3 text-sm font-semibold hover:bg-red-600 transition-all duration-200">
                Let&lsquo;s Get Started
              </Link>
              {/* <Link href="" className="w-full rounded-full border-2 border-black text-black px-6 py-3 text-sm font-medium hover:bg-black hover:text-white transition-all duration-200">
                Learn More
              </Link> */}
            </div>
 
            <hr className="border-neutral-200 mb-8" />
 
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-circle" className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-lime-900 flex-shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className=""><strong>Custom One-Page Design</strong> - Sleek, responsive landing page tailored to your brand or niche.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-circle" className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-lime-900 flex-shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className=""><strong>Social Media Integration</strong> - Embedded links, feeds, and sharing Links to grow your online presence.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-circle" className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-lime-900 flex-shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className=""><strong>Basic SEO Optimization</strong> - Optimized metadata and structure to help your site rank on Google.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-circle" className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-lime-900 flex-shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span><strong>Mobile-First Performance</strong> - Fully optimized for fast mobile browsing and engagement.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-circle" className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-lime-900 flex-shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span><strong>Contact Form Integration</strong> - Let visitors reach you via email.</span>
              </li>
            </ul>
          </article>
 
          <article className="relative rounded-3xl bg-black text-white border-2 border-black transition-all duration-300 p-8 lg:p-10 flex flex-col scale-105 lg:scale-110 z-10">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-lime-900 text-white text-xs font-bold uppercase px-4 py-2 rounded-full">
                Most Popular
              </div>
            </div>
 
            <div className="flex justify-between items-start mb-8 mt-4">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="rocket" className="lucide lucide-rocket w-5 h-5 text-lime-900"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                <span className="text-sm font-semibold uppercase tracking-wide text-neutral-400">Professional</span>
              </div>
            </div>
 
            <div className="mb-8">
              <h2 className="lg:text-2xl leading-tight text-2xl font-medium mb-3">Growing Businesses</h2>
              <p className="text-neutral-300 text-sm">
                Scale your brand with comprehensive design systems
              </p>
            </div>
 
            <div className="mb-8">
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl lg:text-5xl font-bold tracking-tight">$350</span>
                <span className="text-neutral-400 mb-1">.00</span>
              </div>
              {/* <p className="text-xs text-neutral-400">Billed monthly • 2 months free yearly</p> */}
            </div>
 
            <div className="flex flex-col gap-3 mb-8">
              <Link href="https://buy.stripe.com/3cI14m8bEabRahKe7y24005" className="w-full rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-neutral-100 transition-all duration-200">
                Let&lsquo;s Get Started
              </Link>
              
            </div>
 
            <hr className="border-neutral-700 mb-8" />
 
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-circle" className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-lime-900 flex-shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span className=""><strong>Multi-Page Custom Website</strong> - Professional, scalable site with pages for services, about, and contact.

</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-circle" className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-lime-900 flex-shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span><strong>Web Experience</strong> - 15 pages + e-commerce</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-circle" className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-lime-900 flex-shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span><strong>Analytics + Tracking Setup</strong> - Vercel Analytics and conversion tracking to measure performance</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-circle" className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-lime-900 flex-shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span><strong>Custom Domain & Branding</strong> - Branded experience with your domain, logos, and colors.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-circle" className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-lime-900 flex-shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span><strong>Mobile-First UI & Speed Optimization </strong> - Fully responsive and performance-tuned.</span>
              </li>
            </ul>
          </article>
 
          <article className="relative hover:border-lime-900 transition-all duration-300 lg:p-10 flex flex-col lg:col-span-2 xl:col-span-1 bg-white border-neutral-200 border-2 rounded-3xl pt-8 pr-8 pb-8 pl-8">
            <div className="flex justify-between items-start mb-8">
              <div className="flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="building-2" className="lucide lucide-building-2 w-5 h-5 text-lime-900"><path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path><path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path><path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path><path d="M10 6h4"></path><path d="M10 10h4"></path><path d="M10 14h4"></path><path d="M10 18h4"></path></svg>
                <span className="text-sm font-semibold uppercase tracking-wide text-neutral-500">Enterprise</span>
              </div>
              <span className="text-xs font-medium uppercase bg-neutral-100 border border-neutral-300 rounded-full px-3 py-1 text-neutral-700">
                Custom
              </span>
            </div>
 
            <div className="mb-8">
              <h2 className="lg:text-2xl leading-tight text-2xl font-medium mb-3">Enterprise</h2>
              <p className="text-sm text-neutral-600">
                For established companies needing high-performance web infrastructure.
              </p>
            </div>
 
            <div className="mb-8">
              <div className="flex items-end gap-2 mb-2">
                <span className="text-4xl lg:text-5xl font-bold tracking-tight text-black">$950</span>
                <span className="text-neutral-400 mb-1">.00</span>
              </div>
              
            </div>
 
            <div className="flex flex-col gap-3 mb-8">
              <Link href="https://buy.stripe.com/8x2eVc4Zs97N9dG5B224006" className="w-full rounded-full bg-black text-white px-6 py-3 text-sm font-semibold hover:bg-neutral-800 transition-all duration-200">
                Let&lsquo;s Get Started
              </Link>
              
            </div>
 
            <hr className="border-neutral-200 mb-8" />
 
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-circle" className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-lime-900 flex-shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span><strong>Custom Web App or Platform</strong> - Tailored solutions with advanced UI/UX and backend logic.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-circle" className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-lime-900 flex-shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span><strong>Authentication & User Management</strong> - Secure login systems (e.g. Clerk, Auth0) with roles and permissions.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-circle" className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-lime-900 flex-shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span><strong>Scalable Architecture (SSR, CDN, CI/CD)</strong> - Built with modern stacks (Next.js, Vercel, AWS) for speed and growth.</span>
              </li>
              <li className="flex items-start gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="check-circle" className="lucide lucide-check-circle w-4 h-4 mt-0.5 text-lime-900 flex-shrink-0"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
                <span><strong>AI + Web3 Capabilities (Optional)</strong> - AI chatbots, blockchain wallet support, or NFT tools.</span>
              </li>
            </ul>
          </article>
 
        </div>
 
        <div className="mt-16 sm:mt-20 text-center">
          <p className="text-sm text-neutral-500 mb-8"></p>
          <div className="flex items-center justify-center gap-8 opacity-60">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="shield-check" className="lucide lucide-shield-check w-6 h-6"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
            <span className="text-sm">SSL Secured</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="clock" className="lucide lucide-clock w-6 h-6"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
            <span className="text-sm">24/7 Support</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="refresh-cw" className="lucide lucide-refresh-cw w-6 h-6"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
            <span className="text-sm">Cancel Anytime</span>
          </div>
        </div>
      </section>
    </div>
  )
}