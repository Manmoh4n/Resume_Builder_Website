import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from '@/shared';
import BlueRay from "@/assets/images/home/howItWorks/BlueRay.svg"
import Image from 'next/image';

const StatCard = ({ title, value }) => {
    return (
        <Card className="bg-white/10 border-white/10 backdrop-blur-xl py-5">
            <CardContent className="px-2">
                <p className="text-white text-xs md:text-lg font-medium">{title}</p>
                <p className="mt-2 text-2xl md:text-[40px] text-white font-bold">{value}</p>
            </CardContent>
        </Card>
    )
}

const Step = ({ step, title, description, active = false }) => {
    return (
        <div className="relative flex gap-6 items-center">
            <div className={`flex h-7 w-7 md:h-12 md:w-12 shrink-0 items-center justify-center rounded-full text-white text-xs md:text-lg font-bold
                ${active ? "bg-brand-blue shadow-blue-glow" : "border border-white/40 bg-[#121C2C]"}`}
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
        <section className="bg-brand-dark-blue">
            <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-14 py-8">
                <h2 className="text-base md:text-2xl font-bold text-white text-center mb-4">How It Works</h2>
                <Separator className="bg-separtor-line" />
                <div className="relative overflow-hidden mt-8 md:mt-14 rounded-2xl bg-[#121C2C] lg:px-14 lg:py-16 md:px-10 md:py-12 px-5 py-8 border border-[#FFFFFF1A]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-6 space-y-6">
                            <Image src={BlueRay} alt="blue ray" priority className="absolute -top-32 -left-32 w-125 z-0" />
                            <div className="relative z-10">
                                <p className="lg:text-4xl text-xl font-bold text-white whitespace-pre-line">
                                    {`Get Skill-Matched in Just 3 
                                    Steps with AI-Powered Hiring
                                    Tools.`}
                                </p>
                            </div>
                            <div className="md:mt-10 grid grid-cols-2 gap-3 md:gap-5">
                                <StatCard title="Resume Score Boost" value="+35%" />
                                <StatCard title="1000+ Job Opportunities" value="1 Test" />
                            </div>
                            <div className="relative md:mt-10 md:w-1/2 w-full">
                                <Button className="cursor-pointer rounded-lg font-bold  text-sm md:text-base px-3 py-2 h-auto bg-brand-blue hover:bg-brand-blue-hover w-full">Get Assessed Now</Button>
                                <Badge className="absolute top-[-10px] right-[-15px] rounded-md text-[#00009A] font-bold text-[10px] md:text-xs" variant="secondary">It’s Free</Badge>
                            </div>
                        </div>
                        <div className="lg:col-span-6 relative space-y-6 ">
                            <div className="relative flex flex-col lg:gap-24 gap-14">
                                <div className="absolute left-3.5 md:left-6 top-0 h-full w-px border-l border-dashed border-white/30" />
                                <Step step="1" title="Upload Resume & Sign Up" description="Your journey starts with a simple sign-up and resume upload." active />
                                <Step step="2" title="AI-Based Assessment & Mock Interview" />
                                <Step step="3" title="Get Skill Score + Job Recommendations" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
