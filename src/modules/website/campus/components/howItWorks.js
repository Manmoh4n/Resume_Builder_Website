import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from '@/shared';
import BlueRay from "@/assets/images/campus/howItWorks/blueRay.svg"
import Rectangle from "@/assets/images/campus/howItWorks/rectangle.svg";
import Image from 'next/image';

const StatCard = ({ title, value }) => {
    return (
        <Card className="border-white/20 bg-[#121C2C] backdrop-blur-xl py-5">
            <CardContent className="relative px-2">
                <Image src={Rectangle} alt="rectangle ray" priority className="absolute -top-5 rounded-md left-0 z-0" />
                <p className="text-white text-xs md:text-lg font-medium">{title}</p>
                <p className="mt-2 text-2xl md:text-[40px] text-white font-bold">{value}</p>
            </CardContent>
        </Card>
    )
}

const Step = ({ step, title, description, active = false }) => {
    return (
        <div className="relative flex gap-6 items-center">
            <div className={`flex h-7 w-7 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full text-black text-xs md:text-lg font-bold
                ${active ? "bg-brand-blue shadow-blue-glow text-white" : "border border-white/40 bg-white"}`}
            >
                {step}
            </div>
            <div>
                <p className={`text-base md:text-text-26 ${active ? "text-brand-blue font-bold" : "text-white font-semibold"}`}>{title}</p>
                {description && (
                    <p className="mt-1 text-xs md:text-lg text-white font-medium">
                        {description}
                    </p>
                )}
            </div>
        </div>
    )
}

export default function HowItWorks() {
    return (
        <section className="bg-brand-dark-blue relative overflow-hidden">
            <div className="pointer-events-none absolute top-0 -right-42 h-1/2 w-1/2 rounded-lg bg-howIt-works-section"/>
            <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-14 py-18">
                <h2 className="text-base md:text-2xl font-bold text-white text-center mb-4">How It Works</h2>
                <Separator className="bg-separtor-line" />
                <div className="relative overflow-hidden mt-8 md:mt-14 rounded-2xl bg-[#121C2C] lg:px-14 lg:py-16 md:px-10 md:py-12 px-5 py-8 border border-[#FFFFFF1A]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-6 space-y-6">
                            <Image src={BlueRay} alt="blue ray" priority className="absolute -top-32 -left-32 z-0" />
                            <div className="relative z-10">
                                <p className="lg:text-4xl md:text-4xl text-xl font-bold text-[#245FFF]">Seamless Campus Integration in 4 Steps</p>
                            </div>
                            <div className="md:mt-30 grid grid-cols-2 gap-3 md:gap-5">
                                <StatCard title="Reduce Hiring Time by" value="60%" />
                                <StatCard title="Avg. Time to Hire" value="5 Days" />
                            </div>
                            <div className="relative md:mt-10 md:w-1/2 w-full">
                                <Button className="cursor-pointer rounded-lg font-bold  text-sm md:text-base px-3 py-2 h-auto bg-brand-blue hover:bg-brand-blue-hover w-full">Start Hiring</Button>
                            </div>
                        </div>
                        <div className="lg:col-span-6 relative space-y-6 ">
                            <div className="relative flex flex-col lg:gap-20 gap-14">
                                <div className="absolute left-3.5 md:left-6 top-0 h-full w-px border-l border-dashed border-white/30" />
                                <Step step="1" title="Create Your College Portal" description="We set up a white-labeled platform for your institution." active />
                                <Step step="2" title="Add Students & Courses" />
                                <Step step="3" title="Host AI Assessments" />
                                <Step step="4" title="Share Student Profiles with Companies" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
