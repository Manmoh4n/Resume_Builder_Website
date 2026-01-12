import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from '@/shared';
import Image from 'next/image';
import CheckIcon from "@/assets/images/recruiter/whyRecruit/check.svg";
import ShortListIcon from "@/assets/images/recruiter/whyRecruit/shortlist.svg";
import ZapIcon from "@/assets/images/recruiter/whyRecruit/zap.svg";
import InsightsIcon from "@/assets/images/recruiter/whyRecruit/insights.svg";
import EvaluationImage from "@/assets/images/recruiter/hire-smarter/evaluation.svg";
import MonitorImage from "@/assets/images/recruiter/hire-smarter/monitor.svg";
import ScoreImage from "@/assets/images/recruiter/hire-smarter/score.svg";
import HiringImage from "@/assets/images/recruiter/hire-smarter/hiring.svg";

const FeatureCard = ({ title, icon, image }) => {
    return (
        <Card className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#121C2C] py-0 h-[350px]">
            {/* <div className='bg-hire-smarter-card absolute bottom-0 left-0 w-full h-26 z-1' /> */}
            <CardContent className="relative h-full p-4">
                <div className="relative z-10 flex justify-between items-center">
                    <h3 className="text-white font-medium text-lg lg:text-2xl">
                        {title}
                    </h3>
                    <div className='border border-white rounded-full w-10 h-10 flex items-center justify-center'>
                        <Image src={icon} alt="Icon" />
                    </div>
                </div>
                <div className="absolute bottom-0 right-0 z-0">
                    {image}
                </div>

            </CardContent>
        </Card>
    )
}

export default function WhyRecruitWithUs() {
    return (
        <section className="relative bg-[url('@/assets/images/recruiter/challenges/bg-challenge.svg')] bg-no-repeat bg-cover bg-center">
            <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 pt-4 lg:pb-12 md:pb-12 pb-6">
                <h2 className="text-base md:text-2xl font-bold text-dark-blue text-center mb-4">Why Recruit With Us</h2>
                <Separator className="bg-separtor-line" />
                <div className="grid grid-cols-12 auto-rows-fr gap-6 mt-8 md:mt-14">
                    <div className="lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-12">
                        <FeatureCard
                            title={<>Verified<br />Talent</>}
                            icon={CheckIcon}
                            image={
                                <Image
                                    src={EvaluationImage}
                                    alt="Verified Talent"
                                    className="w-full"
                                    priority
                                />
                            }
                        />
                    </div>
                    <div className="lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-12">
                        <FeatureCard
                            title={<>AI-powered<br />Shortlisting</>}
                            icon={ShortListIcon}
                            image={
                                <Image
                                    src={MonitorImage}
                                    alt="AI-powered Shortlisting"
                                    className="w-full"
                                    priority
                                />
                            }
                        />
                    </div>
                    <div className="lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-12">
                        <FeatureCard
                            title={<>Faster<br />Hiring</>}
                            icon={ZapIcon}
                            image={
                                <Image
                                    src={ScoreImage}
                                    alt="Faster Hiring"
                                    className="w-full"
                                    priority
                                />
                            }
                        />
                    </div>
                    <div className="lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-12">
                        <FeatureCard
                            title={<>Real-time<br />Insights</>}
                            icon={InsightsIcon}
                            image={
                                <Image
                                    src={HiringImage}
                                    alt="Real-time Insights"
                                    className="w-full"
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
