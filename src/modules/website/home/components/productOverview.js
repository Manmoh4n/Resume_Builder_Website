'use client'
import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from '@/shared';
import AnalyzerImage from "@/assets/images/home/productOverview/analyzer.svg";
import AssessmentImage from "@/assets/images/home/productOverview/assessment.svg";
import AIImage from "@/assets/images/home/productOverview/ai.png";
import MatchImage from "@/assets/images/home/productOverview/match.png";
import LearningImage from "@/assets/images/home/productOverview/learning.png";
import Image from 'next/image';

const FeatureCard = ({ title, description, image }) => {
    return (
        <Card className="relative h-full overflow-hidden rounded-xl border border-white/10 bg-[linear-gradient(135deg,#0B1220,#0E1A33)] py-0">
            <CardContent className="relative h-full p-4">
            <div className=" absolute top-0 -right-16 w-70 h-70 bg-[url('@/assets/images/home/productOverview/BlueRay.svg')] bg-no-repeat bg-contain z-0" />
                <div className="relative z-10 lg:max-w-[60%] max-w-[60%] lg:pb-26 pb-16">
                    <h3 className="text-brand-blue font-bold text-lg lg:text-2xl">
                        {title}
                    </h3>
                    <p className="mt-2 text-white/80 text-sm md:text-lg">
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

export default function ProductOverview() {
    return (
        <section className="bg-home-product-overview">
            <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-14 py-8">
                <h2 className="text-base md:text-2xl font-bold text-white text-center mb-4">Product Overview</h2>
                <Separator className="bg-separtor-line" />
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-8 md:mt-14">
                    <div className="lg:col-span-9 space-y-6">
                        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 auto-rows-fr">
                            <FeatureCard
                                title="Resume Analyzer"
                                description="Get smart, skill-based feedback instantly"
                                image={
                                    <Image
                                        src={AnalyzerImage}
                                        alt="Resume Analyzer"
                                        className="w-[200px] lg:w-full"
                                        priority
                                    />
                                }
                            />
                            <FeatureCard
                                title="Skill Assessments"
                                description="Industry-standard MCQs + scenario-based rounds"
                                image={
                                    <Image
                                        src={AssessmentImage}
                                        alt="Skill Assessments"
                                        className="w-[200px] lg:w-full"
                                        priority
                                    />
                                }
                            />
                            <FeatureCard
                                title="AI Mock Interviews"
                                description="Practice with real-time scoring and analysis"
                                image={
                                    <Image
                                        src={AIImage}
                                        alt="AI Mock Interviews"
                                        className="w-[200px] lg:w-full"
                                        priority
                                    />
                                }
                            />
                            <FeatureCard
                                title="Job Match Engine"
                                description="Discover roles aligned with your assessment score"
                                image={
                                    <Image
                                        src={MatchImage}
                                        alt="Job Match Engine"
                                        className="w-[200px] lg:w-full"
                                        priority
                                    />
                                }
                            />
                        </div>
                    </div>
                    <div className="lg:col-span-3 relative space-y-6 ">
                        <FeatureCard
                            title="Learning Paths"
                            description="Curated upskilling journeys based on your goals"
                            image={
                                <Image
                                    src={LearningImage}
                                    alt="Learning Paths"
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
