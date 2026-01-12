'use client'
import { Faq } from "@/shared";
import { CampusBanner, CollegeTrustUs, ConnectingTalent, HiringPartners,HowItWorks,BuiltForPlacement,RealResults,CollegeName } from "./components";

export const Campus = () => {
    return (
        <div className="relative bg-brand-dark-blue">
            <CampusBanner />
            <HiringPartners />
            <ConnectingTalent />
            <CollegeTrustUs />
            <HowItWorks />
            <BuiltForPlacement />
            <RealResults />
            <CollegeName />
            <section>
            <Faq textColor="text-white" />
            </section>
        </div>
    );
};

export default Campus;