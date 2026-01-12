import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from '@/shared';
import Image from 'next/image';
import EvaluationImage from "@/assets/images/recruiter/hire-smarter/evaluation.svg";
import MonitorImage from "@/assets/images/recruiter/hire-smarter/monitor.svg";
import ScoreImage from "@/assets/images/recruiter/hire-smarter/score.svg";
import HiringImage from "@/assets/images/recruiter/hire-smarter/hiring.svg";
import BlueRay from "@/assets/images/recruiter/how-works/blue-ray.svg"
import BackgroundImage from "@/assets/images/recruiter/hire-smarter/backgroundImage.svg"

const FeatureCard = ({ title, description, image }) => {
    return (
        <Card className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#121C2C] py-0">
            <div className='bg-hire-smarter-card absolute bottom-0 left-0 w-full h-26 z-1' />
            <CardContent className="relative h-full p-4">
                <Image src={BlueRay} alt="blue ray" priority className="absolute top-0 left-0 w-120 z-0" />
                <div className="relative z-10 flex flex-col justify-between h-[240px]">
                    <h3 className="text-white font-semibold text-lg">
                        {title}
                    </h3>
                    <p className="text-white font-regular text-sm">
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

export default function HireSmarter() {
    return (
        <section className="relative">
            <Image src={BackgroundImage} alt="background" priority className="absolute bottom-0 z-0 pointer-events-none pb-15" />
            <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-16 py-10">
                <h2 className="text-base md:text-2xl font-bold text-dark-blue text-center mb-4">How Our AI Makes Every Hire Smarter</h2>
                <Separator className="bg-separtor-line mx-auto w-50" />
                <div className="grid grid-cols-12 auto-rows-fr gap-6 mt-8 md:mt-14">
                    <div className="lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-12">
                        <FeatureCard
                            title="Contextual Skill Evaluation"
                            description="Understands intent, logic, and real-world thinking — not just MCQ ticking."
                            image={
                                <Image
                                    src={EvaluationImage}
                                    alt="Contextual Skill Evaluation"
                                    className="w-full"
                                    priority
                                />
                            }
                        />
                    </div>
                    <div className="lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-12">
                        <FeatureCard
                            title="Face Tracking & Browser Monitoring"
                            description="Ensures fair assessment with facial recognition, screen monitoring, and suspicious behavior alerts."
                            image={
                                <Image
                                    src={MonitorImage}
                                    alt="Face Tracking & Browser Monitoring"
                                    className="w-full"
                                    priority
                                />
                            }
                        />
                    </div>
                    <div className="lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-12">
                        <FeatureCard
                            title="Match Score Engine"
                            description="Generates job-fit scores for each role, so you find the perfect hire faster."
                            image={
                                <Image
                                    src={ScoreImage}
                                    alt="Match Score Engine"
                                    className="w-full"
                                    priority
                                />
                            }
                        />
                    </div>
                    <div className="lg:col-span-3 md:col-span-6 sm:col-span-6 col-span-12">
                        <FeatureCard
                            title="Bias-Free Hiring"
                            description="No more over emphasis on resume keywords or college tags it’s all about real skill"
                            image={
                                <Image
                                    src={HiringImage}
                                    alt="Bias-Free Hiring"
                                    className="w-full"
                                    priority
                                />
                            }
                        />
                    </div>
                </div>
                <div className="w-full flex justify-center gap-4 mt-6 md:mt-10">
                    <Button className="rounded-lg font-semibold px-3 py-2 h-auto text-base shadow-xs shadow-black/10 bg-brand-blue hover:bg-brand-blue-hover text-white cursor-pointer">
                    Start Hiring
                    </Button>
                    <Button className="rounded-lg font-semibold px-3 py-2 h-auto text-base shadow-xs shadow-black/10 border bg-white hover:bg-white text-dark-blue cursor-pointer">
                    See How It Works
                    </Button>
                </div>
            </div>
        </section>
    )
}
