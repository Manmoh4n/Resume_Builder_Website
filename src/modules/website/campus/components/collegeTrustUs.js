import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from '@/shared';
import AssessmentImage from "@/assets/images/campus/college-trust/assessment.svg";
import CheatImage from "@/assets/images/campus/college-trust/cheat.svg";
import EngineImage from "@/assets/images/campus/college-trust/engine.svg";
import DrivesImage from "@/assets/images/campus/college-trust/drives.svg";
import AnalyticsImage from "@/assets/images/campus/college-trust/analytics.svg";
import Image from 'next/image';

const FeatureCard = ({ title, description, image }) => {
    return (
        <Card className="relative h-full overflow-hidden rounded-xl border border-white/10 backdrop-blur-[4px] bg-white py-0">
            <CardContent className="relative h-full p-4">
            <div className=" absolute top-0 -right-16 w-70 h-70 bg-[url('@/assets/images/home/productOverview/BlueRay.svg')] bg-no-repeat bg-contain z-0" />
                <div className="relative z-10 lg:max-w-[75%] max-w-[70%] lg:pb-26 pb-16">
                    <h3 className="text-brand-blue font-bold text-lg lg:text-2xl">
                        {title}
                    </h3>
                    <p className="mt-2 text-black text-sm md:text-lg">
                        {description}
                    </p>
                </div>
                <div className="absolute bottom-0 right-0 z-0">
                    {image}
                </div>

            </CardContent>
        </Card>
    )
}

export default function CollegeTrustUs() {
    return (
        <section className="bg-home-product-overview">
            <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-14 py-8">
                <h2 className="text-base md:text-2xl font-bold text-white text-center mb-4">Why Colleges Trust Us</h2>
                <Separator className="bg-separtor-line" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8 md:mt-14">
                    <div className="lg:col-span-9 space-y-6">
                        <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-6 auto-rows-fr">
                            <FeatureCard
                                title="AI-Powered Skill Assessment"
                                description="Auto-evaluated coding, aptitude, and domain tests."
                                image={
                                    <Image
                                        src={AssessmentImage}
                                        alt="AI-Powered Skill Assessment"
                                        className="w-[200px] lg:w-full"
                                        priority
                                    />
                                }
                            />
                            <FeatureCard
                                title="Cheat-Proof Tests"
                                description="Facial recognition + screen tracking ensures authenticity."
                                image={
                                    <Image
                                        src={CheatImage}
                                        alt="Cheat-Proof Tests"
                                        className="w-[200px] lg:w-full"
                                        priority
                                    />
                                }
                            />
                            <FeatureCard
                                title="Strong AI Matching Engine"
                                description="Maps students to best-fit job opportunities."
                                image={
                                    <Image
                                        src={EngineImage}
                                        alt="Strong AI Matching Engine"
                                        className="w-[200px] lg:w-full"
                                        priority
                                    />
                                }
                            />
                            <FeatureCard
                                title="White-Labeled Campus Drives"
                                description="Your brand, our engine."
                                image={
                                    <Image
                                        src={DrivesImage}
                                        alt="White-Labeled Campus Drives"
                                        className="w-[200px] lg:w-full"
                                        priority
                                    />
                                }
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-3 relative space-y-6 ">
                        <FeatureCard
                            title="Realtime Analytics Dashboard"
                            description="Track student performance and company interest."
                            image={
                                <Image
                                    src={AnalyticsImage}
                                    alt="Realtime Analytics Dashboard"
                                    className="w-[160px] lg:w-full"
                                    priority
                                />
                            }
                        />
                    </div>
                </div>

            </div>
        </section>
    )
}
