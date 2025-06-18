import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import Packages from "@/components/Packages";

import { Showcase } from "@/components/Showcase";

export default function Pricing() {
    return (
        <div className="">
            <Nav />
            <Showcase />
            
            <Packages />
            <Contact />
            <Footer />
        </div>
    );
}