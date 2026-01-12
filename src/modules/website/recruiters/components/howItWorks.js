import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from '@/shared';
import BlueRay from "@/assets/images/recruiter/how-works/blue-ray.svg"
import BackgroundImage from "@/assets/images/recruiter/how-works/backgroundImage.svg";
import Image from 'next/image';

const StatCard = ({ title, value }) => {
    return (
        <Card className="bg-[#121C2C] border-white/10 backdrop-blur-xl py-5">
            <CardContent className="px-2">
                <p className="text-white text-xs md:text-lg font-medium">{title}</p>
                <p className="mt-2 text-2xl md:text-[40px] text-white font-bold">{value}</p>
            </CardContent>
        </Card>
    )
}

const Step = ({ step, title, description, active = false }) => {
    return (
        <div className="relative flex gap-6">
            <div className={`flex h-7 w-7 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full text-xs md:text-lg font-bold
                ${active ? "bg-brand-blue shadow-blue-glow text-white" : "border bg-white border-[#121C2C] text-dark-blue"}`}
            >
                {step}
            </div>
            <div>
                <p className={`text-base md:text-text-26 ${active ? "text-brand-blue font-bold" : "text-dark-blue font-semibold"}`}>{title}</p>
                {description && (
                    <p className="mt-1 text-xs md:text-lg text-black font-medium">
                        {description}
                    </p>
                )}
            </div>
        </div>
    )
}

export default function HowItWorks() {
    return (
        <section className="relative">
             <Image src={BackgroundImage} alt="background" priority className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:pt-0 md:pt-0 pt-0 pb-8">
                <h2 className="text-base md:text-2xl font-bold text-dark-blue text-center mb-4">How It Works</h2>
                <Separator className="bg-separtor-line" />
                <div className="relative overflow-hidden mt-8 md:mt-14 rounded-2xl bg-white shadow-[0_0_94px_0_rgba(36,95,255,0.08)] lg:px-14 lg:py-16 md:px-10 md:py-12 px-5 py-8 border border-gray-100">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-6 space-y-6">
                            <Image src={BlueRay} alt="blue ray" priority className="absolute top-0 left-0 w-120 z-0" />
                            <div className="relative z-10">
                                <p className="lg:text-4xl text-xl font-bold text-brand-blue">Hire Smarter in Just 4 Steps with Pre-Verified Candidates</p>
                            </div>
                            <div className="lg:mt-30 mt-8 grid grid-cols-2 gap-3 md:gap-5">
                                <StatCard title="Reduce Hiring Time by" value="60%" />
                                <StatCard title="Avg. Time to Hire" value="5 Days" />
                            </div>
                            <div className="relative md:mt-10 md:w-1/2 w-full">
                                <Button className="cursor-pointer rounded-lg font-semibold text-sm md:text-base px-3 py-2 h-auto bg-brand-blue hover:bg-brand-blue-hover w-full">Start Hiring</Button>
                            </div>
                        </div>
                        <div className="lg:col-span-6 relative space-y-6 ">
                            <div className="relative flex flex-col lg:gap-20 gap-12">
                                <div className="absolute left-3.5 md:left-6 top-0 h-full w-px border-l border-dashed border-black/30" />
                                <Step step="1" title="Define the Role You’re Hiring For" description="Submit your job role with required skills, budget, and experience range. Our engine maps your input to relevant assessments instantly." active />
                                <Step step="2" title="AI-Matched Profiles, Ready to Review" />
                                <Step step="3" title="Go Beyond the Resume" />
                                <Step step="4" title="Make Confident Hiring Decisions" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
