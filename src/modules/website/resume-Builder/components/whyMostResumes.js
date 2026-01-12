import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from '@/shared';
import Image from 'next/image';
import BackgroundImage from "@/assets/images/recruiter/how-works/backgroundImage.svg";
import BlueRay from "@/assets/images/recruiter/hire-smarter/backgroundImage.svg";
import {whyMostResumesData} from "@/assets/mockData"
import { Badge } from "@/components/ui/badge";

const FeatureCard = ({ title, image, alt  }) => {
    return (
        <Card className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#121C2C] py-0 h-[374px]">
            <CardContent className="relative h-full p-4">
                <div>
                  <p className="text-white font-medium text-lg lg:text-2xl"> {title} </p>
                </div>
                <div className="absolute bottom-0 right-0">
                  <Image src={image} alt={alt} priority />
                </div>
            </CardContent>
        </Card>
    )
};

export default function WhyMostResumes() {
    return (
        <section className="relative">
            <Image src={BackgroundImage} alt="background" priority className="absolute left-0 top-0" />
            <Image src={BlueRay} alt="Blue Ray" priority className="absolute bottom-0 z-0 w-full pb-10" />
            <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 pt-4 lg:pb-12 md:pb-12 pb-6">
              <p className="text-base md:text-2xl font-bold text-dark-blue text-center mb-4">Why most resumes don’t get shortlisted?</p>
                <Separator className="w-50 bg-separtor-line" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8 md:mt-14">
                  {whyMostResumesData.map((item, index) => (
                  <FeatureCard
                    key={index}
                    title={item.title}
                    image={item.image}
                    alt={item.alt}
                    />
                  ))}
                </div>

                <div className="mt-12 relative flex justify-center">
                  <div className="relative inline-block">
                    <Button className="cursor-pointer rounded-lg font-semibold text-base px-3 py-3 h-auto bg-brand-blue hover:bg-brand-blue-hover"> Build your resume with AI</Button>
                    <Badge className="absolute -top-4 -right-3 bg-green-500 text-white font-bold text-sm rounded-md"> It’s Free </Badge>
                </div>
                </div>
            </div>
        </section>
    )
}
