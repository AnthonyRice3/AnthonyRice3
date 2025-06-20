import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import PriceCard from "@/components/PriceCard";

import { Showcase } from "@/components/Showcase";

export default function Pricing() {
    return (
        <div className="">
            <Nav />
            <Showcase />
            <PriceCard />
            {/* <Packages /> */}
            <Contact />
            <Footer />
        </div>
    );
}