"use client"

export default function AboutHeader () {
    return (
        <section className="py-14 bg-green-950 w-screen">
            <div className="relative z-10 mx-auto px-4 py-28 md:px-8">
                    <div className="space-y- mx-auto text-center">
                        <h2 className="text-4xl text-white font-extrabold mx-auto md:text-5xl">
                            Build and scale up your startup with the best tools
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-400">
                            Sed ut perspiciatis unde omnis iste natus voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae.
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="justify-center items-center gap-x-3 sm:flex">
                            <input
                                type="text"
                                placeholder="Enter your email"
                                className="w-full px-3 py-2.5 text-gray-400 bg-gray-700 focus:bg-gray-900 duration-150 outline-none rounded-lg shadow sm:max-w-sm sm:w-auto"
                            />
                            <button className="flex items-center justify-center gap-x-2 py-2.5 px-4 mt-3 w-full text-sm text-white font-medium bg-sky-500 hover:bg-sky-400 active:bg-sky-600 duration-150 rounded-lg sm:mt-0 sm:w-auto">
                                Get started
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                    <path fillRule="evenodd" d="M2 10a.75.75 0 01.75-.75h12.59l-2.1-1.95a.75.75 0 111.02-1.1l3.5 3.25a.75.75 0 010 1.1l-3.5 3.25a.75.75 0 11-1.02-1.1l2.1-1.95H2.75A.75.75 0 012 10z" clipRule="evenodd" />
                                </svg>
                            </button>
                        </form>
                        <div className="flex justify-center items-center gap-x-4 text-gray-400 text-sm">
                            <div className="flex">
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                                <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"><path d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" /></svg>
                            </div>
                            <p><span className="text-gray-100">5.0</span> by over 200 users</p>
                        </div>
                    </div>
                </div>
                <div className="absolute -top-20 -left-20 w-72 h-72 bg-lime-900 rounded-full opacity-20 blur-3xl"></div>
                <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-green-300 rounded-full opacity-20 blur-3xl"></div>
        </section>
    )
}