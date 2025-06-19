import Image from "next/image";

export default function AR3 () {
    return (
        <section className="pt-14">
            <div className="max-w-screen-xl mx-auto md:px-8">
                <div className="items-center gap-x-12 sm:px-4 md:px-0 lg:flex">
                    <div className="flex-1 sm:hidden lg:block pl-6">
                        <Image src="/ar3.jpg" width={350} height={300} className="md:max-w-lg sm:rounded-lg rounded-2xl" alt="" />
                    </div>
                    <div className="max-w-xl px-4 space-y-3 mt-6 sm:px-0 md:mt-0 lg:max-w-2xl">
                        <h3 className="text-lime-900 text-3xl font-semibold sm:text-4xl">
                            Professional Services
                        </h3>
                        <h1>
                            AR3: Your Partner in High-Performance Web Development
                        </h1>
                        <p className="mt-3 text-white">
                            At AR3, we specialize in crafting high-performance websites that merge cutting-edge design with seamless functionality. Whether you&apos;re a startup, an established brand, or an independent creator, our mission is to transform your vision into a digital experience that captivates, converts, and scales. With a strong foundation in modern web technologies and a deep understanding of UX/UI best practices, we bring more than just code — we bring clarity, strategy, and polish to every project.
                        </p>
                        <p className="mt-3 text-white">
                            Founded on a passion for clean design and performance-first development, AR3 blends creative artistry with technical expertise. Our process is collaborative and transparent, ensuring that your goals remain at the center of every decision. From simple landing pages to complex, e-commerce-ready platforms, we’re here to make sure your web presence works as hard as you do.
                        </p>
                        {/* <a href="/Pricing" className="inline-flex gap-x-1 items-center text-[#22240c] hover:text-green-600 duration-150 font-medium">
                            Learn more
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                            </svg>
                        </a> */}
                    </div>
                </div>
            </div>
        </section>
    )
}