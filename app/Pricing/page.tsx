import Contact from "@/components/Contact";
import Packages from "@/components/Packages";

import { Showcase } from "@/components/Showcase";

export default function Pricing() {
    return (
        <div className="">
            <Showcase />
            
            <Packages />
            <Contact />
        </div>
    );
}