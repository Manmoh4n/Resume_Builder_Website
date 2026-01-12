'use client'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import CapIcon from '@/assets/images/home/aboutUs/cap.svg'
import CapProIcon from '@/assets/images/home/aboutUs/cap2.svg'
import ManImage from '@/assets/images/home/aboutUs/man.svg'
import ProfessionalImage from '@/assets/images/home/aboutUs/professional.svg'
import Image from 'next/image';
import { Separator } from '@/shared';
import BlueEllipse from '@/assets/images/home/aboutUs/BlueEllipse.svg'
import PinkEllipse from '@/assets/images/home/aboutUs/PinkEllipse.svg'
import TopGradient from '@/assets/images/home/aboutUs/angle-left-gradient.svg'
import BottomGradient from '@/assets/images/home/aboutUs/angle-bottom-gradient.svg'
import RightLines from '@/assets/images/home/aboutUs/right-lines.svg'
import LeftLines from '@/assets/images/home/aboutUs/left-lines.svg'
import { freshersData, professionalData } from '@/assets/mockData';
import { AcrossCard, BenefitsCard, InfoCard } from './shared';

export default function WhosFor() {
    return (
        <section className="relative bg-brand-dark-blue overflow-hidden">
            <Image src={TopGradient} alt="Top Gradient" priority className="absolute -top-50 -left-50 z-0"/>
            <Image src={BottomGradient} alt="Bottom Gradient" priority className="absolute -right-80 -bottom-0 z-0"/>
            <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-14 py-8">
                <h2 className="text-base md:text-2xl font-bold text-white text-center mb-4">Who is this for?</h2>
                <Separator className="bg-separtor-line" />
                {/* <div className="relative overflow-hidden lg:mt-14 mt-8 rounded-2xl bg-[#000612] lg:px-14 md:px-10 px-5"> */}
                <div className="relative overflow-hidden lg:mt-14 mt-8 rounded-2xl bg-[#000612]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-5 space-y-6 lg:pr-10 md:pr-10 pr-5 lg:pl-14 md:pl-10 pl-5 lg:py-10 pb-0 pt-6 relative">
                            <Image src={BlueEllipse} alt="blue ellipse" priority className=" absolute -top-20 -left-20 w-64 h-64 opacity-80 pointer-events-none z-0"/>
                            <div className="flex items-center lg:gap-3 gap-1 mb-3 lg:mb-5">
                                <Image src={CapIcon} alt='' className='w-8 h-8 md:w-15 md:h-15' priority />
                                <h2 className="text-base md:text-3xl font-semibold text-white">For Freshers</h2>
                            </div>
                            <p className="text-sm text-white font-regular">
                                Our platform helps freshers stand out with AI‑based assessments,
                                smart resume feedback, and guided learning paths
                            </p>
                            <ul className="space-y-4">
                                {freshersData?.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-slate-200 lg:text-xl text-xs"><Image src={item.icon} alt='' /> {item.name}</li>
                                ))}
                            </ul>
                            <AcrossCard title="Used by" label="20k+ Freshers across India" />
                            <div className="flex items-center gap-3 relative">
                                <Button className="cursor-pointer rounded-lg font-semibold text-base px-3 py-2 h-auto bg-brand-blue hover:bg-brand-blue-hover w-full">Get Assessed Now</Button>
                                <Badge className="absolute top-[-10px] right-[-15px] rounded-md text-[#00009A] font-bold text-sm" variant="secondary">It’s Free</Badge>
                            </div>
                        </div>
                        <div className="lg:col-span-7 relative overflow-hidden space-y-6 lg:border-l border-l-0 lg:border-t-0 border-t border-[#FFFFFF2E] lg:pr-14 md:pr-10 pr-5 lg:pl-10 md:pl-10 pl-5 lg:py-10 py-6">
                            <Image src={RightLines} alt="Bottom Gradient" priority className="absolute top-0 right-0 z-0"/>
                            <h3 className="text-white lg:text-xl text-base font-semibold">Variety of Benefits</h3>
                            <Card className="bg-gradient-to-br from-slate-700/40 to-slate-900/60 border-white/10 backdrop-blur-xl px-6 pt-6 pb-0">
                                <CardContent className="px-0">
                                    <Image src={ManImage} alt="candidate" priority />
                                    <div className="absolute bottom-4 right-6">
                                        <BenefitsCard />
                                    </div>
                                </CardContent>
                            </Card>
                            <div className="grid grid-cols-2 lg:grid-cols-12 gap-4">
                                <div className="lg:col-span-3">
                                    <InfoCard title="Total Benefits" label="Over 6 Career Tools" />
                                </div>
                                <div className="lg:col-span-3">
                                    <InfoCard title="One test" label="Unlock 1000+ Jobs" />
                                </div>
                                <div className="lg:col-span-6">
                                    <InfoCard title="Test Type" label="AI‑powered MCQ & Scenario rounds" />
                                </div>
                                <div className="lg:col-span-12">
                                    <InfoCard title="Avg. Job Offer Time" label="Within 3–5 weeks after profile completion" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="relative overflow-hidden lg:mt-14 mt-8 rounded-2xl bg-[#000612]">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-7 relative overflow-hidden space-y-6 lg:border-r border-r-0 lg:border-t-0 border-t border-[#FFFFFF2E] lg:pr-10 md:pr-10 pr-5 lg:pl-10 md:pl-10 pl-5 lg:py-10 py-6 lg:order-none order-2">
                            <Image src={LeftLines} alt="Bottom Gradient" priority className="absolute top-0 left-0 z-0"/>
                            <h3 className="text-white lg:text-xl text-base font-semibold">Variety of Benefits</h3>
                            <Card className="bg-gradient-to-br from-slate-700/40 to-slate-900/60 border-white/10 backdrop-blur-xl px-6 pt-6 pb-0">
                                <CardContent className="px-0">
                                    <Image src={ProfessionalImage} alt="candidate" priority />
                                    <div className="absolute bottom-4 right-6">
                                        <BenefitsCard />
                                    </div>
                                </CardContent>
                            </Card>
                            <div className="grid grid-cols-2 lg:grid-cols-12 gap-4">
                                <div className="lg:col-span-3">
                                    <InfoCard title="Total Benefits" label="Over 6 Career Tools" />
                                </div>
                                <div className="lg:col-span-4">
                                    <InfoCard title="One test" label="Get mapped to 500+ roles" />
                                </div>
                                <div className="lg:col-span-5">
                                    <InfoCard title="Test Type" label="Role-specific MCQ + Case Scenarios" />
                                </div>
                                <div className="lg:col-span-12">
                                    <InfoCard title="Average Hike" label="45% average salary jump after test" />
                                </div>
                            </div>
                        </div>
                        <div className="lg:col-span-5 space-y-6 lg:pr-10 md:pr-10 pr-5 lg:pl-0 md:pl-10 pl-5 lg:py-10 pb-0 pt-6 relative">
                            <Image src={PinkEllipse} alt="blue ellipse" priority className=" absolute -top-20 -left-20 w-64 h-64 opacity-80 pointer-events-none z-0"/>
                            <div className="flex items-center lg:gap-3 gap-1 mb-3 lg:mb-5">
                                <Image src={CapProIcon} alt='' className='w-8 h-8 md:w-15 md:h-15' priority />
                                <h2 className="text-base md:text-3xl font-semibold text-white">For Working Professionals</h2>
                            </div>
                            <p className="text-sm text-white font-regular">
                                Advance your career with AI-powered assessments, resume optimisation, and role-matching tools tailored to your experience.
                            </p>
                            <ul className="space-y-4">
                                {professionalData?.map((item, index) => (
                                    <li key={index} className="flex items-center gap-3 text-slate-200 lg:text-xl text-xs"><Image src={item.icon} alt='' /> {item.name}</li>
                                ))}
                            </ul>
                            <AcrossCard title="Used by" label="10k+ Professionals across India" />
                            <div className="flex items-center gap-3 relative">
                                <Button className="cursor-pointer rounded-lg font-semibold text-base px-3 py-2 h-auto bg-brand-blue hover:bg-brand-blue-hover w-full">Get Assessed Now</Button>
                                <Badge className="absolute top-[-10px] right-[-15px] rounded-md text-[#00009A] font-bold text-sm" variant="secondary">It’s Free</Badge>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}