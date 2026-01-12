'use client'
import React from 'react'
import { Badge } from "@/components/ui/badge";
import Image from 'next/image';
import { Separator } from '@/shared';
import { Card, CardContent } from '@/components/ui/card';
import MapImage from '@/assets/images/recruiter/college-network/map.svg'
import College1 from '@/assets/images/recruiter/college-network/college1.svg'
import College2 from '@/assets/images/recruiter/college-network/college2.svg'
import College3 from '@/assets/images/recruiter/college-network/college3.svg'
import College4 from '@/assets/images/recruiter/college-network/college4.svg'
import College5 from '@/assets/images/recruiter/college-network/college5.svg'
import College6 from '@/assets/images/recruiter/college-network/college6.svg'

const InfoCard = ({ image, title, label }) => {
    return (
        <Card className="bg-white border-[#245FFF47] rounded-lg p-3 shadow-[0px_0px_24px_rgba(36,95,255,0.22)]">
            <CardContent className="px-0 flex items-center gap-2">
                <div>
                    <Image src={image} alt="Badge" />
                </div>
                <div>
                    <p className="text-black lg:text-xs text-[10px] font-semibold">Avg Score <Badge className="bg-[#C5E8E4] text-[#40BFB1] font-semibold rounded ml-1">{title}</Badge></p>
                    <p className="text-black pt-2 lg:text-xs text-[10px] font-semibold">No. of Candidates - {label}</p>
                </div>
            </CardContent>
        </Card>
    )
}

export default function CollegeNetwork() {
    return (
        <section className="relative">
            <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-8 py-6">
                <h2 className="text-base md:text-2xl font-bold text-dark-blue text-center mb-4">College Network</h2>
                <Separator className="bg-separtor-line" />
                <div className="relative overflow-hidden lg:mt-14 mt-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                        <div className="lg:col-span-5 lg:order-none order-2">
                            <Image src={MapImage} alt="Bottom Gradient" priority />
                        </div>
                        <div className="lg:col-span-7">
                            <h3 className="text-dark-blue lg:text-4xl text-2xl font-bold">Partnered with 500+ colleges to run skill-based campus hiring.</h3>
                            <p className='text-brand-blue lg:text-2xl text-base font-medium mt-4'>Get access to pre-tested talent from IITs, NITs, and more.</p>
                            <div className="grid grid-cols-2 lg:grid-cols-12 lg:gap-x-4 lg:gap-y-12 gap-x-4 gap-y-4 lg:mt-10 mt-4">
                                <div className="lg:col-span-4">
                                    <InfoCard image={College1} title="97/100" label="1000" />
                                </div>
                                <div className="lg:col-span-4">
                                    <InfoCard image={College2} title="97/100" label="1000" />
                                </div>
                                <div className="lg:col-span-4">
                                    <InfoCard image={College3} title="97/100" label="1000" />
                                </div>
                                <div className="lg:col-span-4">
                                    <InfoCard image={College4} title="97/100" label="1000" />
                                </div>
                                <div className="lg:col-span-4">
                                    <InfoCard image={College5} title="97/100" label="1000" />
                                </div>
                                <div className="lg:col-span-4">
                                    <InfoCard image={College6} title="97/100" label="1000" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}