'use client'
import { Faq } from "@/shared";
import {OurMisson, WhereItAll, PoweredBy, BuiltBy, ReadyToBePart, AboutBanner} from "./components";

export const About = () => {
    return (
        <div className="relative bg-[#FDFFFF]">
            <AboutBanner />
            <OurMisson />
            <WhereItAll />
            <PoweredBy />
            <BuiltBy />
            <ReadyToBePart />
            <section>
            <Faq textColor="text-black" />
            </section>
        </div>
    );
};

export default About;