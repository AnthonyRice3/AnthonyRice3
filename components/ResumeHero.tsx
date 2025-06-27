
import Image from "next/image";
import { GCard } from "./GCard";
import Link from "next/link";
import { ArrowBigLeftDashIcon } from "lucide-react";
import { InteractiveHoverButton } from "./magicui/interactive-hover-button";

export default function RHero () {
    return (
        <section className="relative mx-auto py-4 px-4 md:px-8 bg-black">
            <div className="relative z-10 gap-5 items-center lg:flex">
                <div className="flex-1 max-w-lg py-5 sm:mx-auto sm:text-center lg:max-w-max lg:text-left">
                    <Link href="/" className="text-green-200 font-semibold text-lg">
                    <ArrowBigLeftDashIcon className="inline-block mr-2 h-5 w-5" />
                    Back to Home
                    </Link>
                    <Image 
                        src="/ar3logotran.png"
                        alt="Anthony Rice III Logo"
                        width={200}
                        height={200}
                        className="z-50"
                    />
                    <h3 className="text-3xl text-white font-semibold md:text-4xl">
                        Welcome to My Virtual Resume. My Name is <span className="text-green-300">Anthony Rice III</span> I am a Full Stack Developer with <span className="text-green-300">7+ Years</span> of Experience in Tech. a <span className="text-green-300">Security+</span> certified developer and cybersecurity professional passionate about building secure, scalable web applications and protecting digital systems from real-world threats. Have a look around and feel free to reach out if you have any questions or would like to <span className="text-green-300">CONNECT!</span> 
                    </h3>
                    <p className="text-gray-500 leading-relaxed my-4">
                        If you are a potential employer, recruiter, or just someone who wants to understand my skills and experience, you can download my resume below. It contains detailed information about my professional background, technical skills, and accomplishments. I hope it gives you a good overview of what I can bring to the table.
                    </p>
                    <Link href={"/AR3Resume.pdf"} target="_blank" rel="noopener noreferrer" download={"Resume.pdf"}>
                        <InteractiveHoverButton className="hover:bg-green-300">My Resume</InteractiveHoverButton>
                    </Link>
                </div>
                <div className="flex-1 max-w-md mt-5 sm:w-9/12 lg:mt-0 lg:w-auto">
                    <GCard />
                </div>
            </div>
        </section>
    )
}
