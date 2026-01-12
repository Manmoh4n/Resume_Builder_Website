import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
import Image from 'next/image';
import CollegeImage from "@/assets/images/campus/talent/college.svg";
import MapImage from "@/assets/images/campus/talent/Union.svg";
import DegreeImage from "@/assets/images/campus/talent/degree.svg";
import BlueRay from '@/assets/images/campus/talent/blueRay.svg'
import AirBnbLogo from '@/assets/images/recruiter/usedBy/Airbnb.svg'
import AdobeLogo from '@/assets/images/recruiter/usedBy/Adobe.svg'
import AirtableLogo from '@/assets/images/recruiter/usedBy/Airtable.svg'
import AmazonLogo from '@/assets/images/recruiter/usedBy/Amazon.svg'
import AmplitudeLogo from '@/assets/images/recruiter/usedBy/Amplitude.svg'
import AnimaLogo from '@/assets/images/recruiter/usedBy/Anima.svg'
import WhiteRay from '@/assets/images/campus/talent/whiteRay.svg'
import Marquee from 'react-fast-marquee';

const logos = [
    AirBnbLogo,
    AdobeLogo,
    AirtableLogo,
    AmazonLogo,
    AmplitudeLogo,
    AnimaLogo
]

const FeatureCard = ({ title, description, image }) => {
    return (
        <Card className="relative h-full overflow-hidden rounded-2xl border border-white/10 bg-[#121C2C] py-0">
            {/* <div className='bg-hire-smarter-card absolute bottom-0 left-0 w-full h-26 z-1' /> */}
            <CardContent className="relative h-full p-4">
                <Image src={BlueRay} alt="blue ray" priority className="absolute top-0 left-0 z-0" />
                <div className="relative z-10 flex flex-col justify-between h-[170px]">
                    <h3 className="text-white font-semibold text-2xl lg:text-4xl">
                        {title}
                    </h3>
                    <p className="text-white font-regular text-base">
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

function Logo({ src }) {
    return (
        <div className="mx-10 flex items-center">
            <Image src={src} alt="brand logo" className="transition" />
        </div>
    )
}

export default function ConnectingTalent() {
    return (
        <section className="relative bg-talent-section rounded-tl-4xl rounded-tr-4xl mt-10">
            <Image src={WhiteRay} alt="White ray" priority className="absolute top-0 right-0 rounded-4xl opacity-70 z-0" />
            <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-14 py-8">
                <h2 className="text-3xl md:text-5xl font-bold text-white text-center leading-tight">Connecting Talent from Top Institutions Across India</h2>
                <p className="mt-6 lg:text-xl text-base text-white font-medium text-center">We collaborate with forward-thinking colleges and universities to bridge the gap between education and employability. Our growing network of institutions enables students to access real-world assessments, </p>
                <div className="grid grid-cols-12 auto-rows-fr gap-6 mt-8 md:mt-14">
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                        <FeatureCard
                            title="50+"
                            description="Colleges Onboarded."
                            image={<Image src={CollegeImage} alt="50+" className="w-full" priority />}
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                        <FeatureCard
                            title="10+"
                            description="Cities & 7 States."
                            image={<Image src={MapImage} alt="10+" className="w-full" priority /> }
                        />
                    </div>
                    <div className="lg:col-span-4 md:col-span-6 sm:col-span-12 col-span-12">
                        <FeatureCard
                            title="10,000+"
                            description="Students Get Job-Ready."
                            image={<Image src={DegreeImage} alt="10,000+" className="w-full" priority />}
                        />
                    </div>
                </div>
            </div>
            <div className='relative'>
                <div className="absolute inset-0 opacity-18 pointer-events-none">
                    <div className="w-full h-full bg-[url('@/assets/images/campus/talent/bg-curves.svg')] bg-no-repeat bg-cover bg-top" />
                </div>
                <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:pt-14 lg:pb-24 md:pb-14 pt-4 pb-10">
                    <div className="grid grid-cols-12 gap-6 items-center">
                        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12 lg:pr-10 pr-0">
                            <h2 className="text-lg md:text-2xl font-bold text-white text-left">Empower your campus with access to 1M+ job opportunities helping students land their first, second, and third roles with confidence.</h2>
                        </div>
                        <div className="lg:col-span-6 md:col-span-12 sm:col-span-12 col-span-12 lg:mt-0 md:mt-8 mt-4">
                            <Marquee speed={80} gradient={false}>
                                {logos.map((logo, i) => (
                                    <Logo key={i} src={logo} />
                                ))}
                            </Marquee>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
