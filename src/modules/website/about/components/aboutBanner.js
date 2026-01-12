import React from "react";
import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Button } from '@/components/ui/button';
import PeopleImage from "@/assets/images/about/aboutBanner/peopleImage.png";
import AirBnbLogo from '@/assets/images/recruiter/usedBy/Airbnb.svg';
import AdobeLogo from '@/assets/images/recruiter/usedBy/Adobe.svg';
import AirtableLogo from '@/assets/images/recruiter/usedBy/Airtable.svg';
import AmazonLogo from '@/assets/images/recruiter/usedBy/Amazon.svg';
import AmplitudeLogo from '@/assets/images/recruiter/usedBy/Amplitude.svg';
import AnimaLogo from '@/assets/images/recruiter/usedBy/Anima.svg';
import AtlassianLogo from '@/assets/images/recruiter/usedBy/Atlassian.svg';
import Auth0Logo from '@/assets/images/recruiter/usedBy/Auth0.svg';
import StackLogo from '@/assets/images/recruiter/usedBy/Better-Stack.svg';
import BitbucketLogo from '@/assets/images/recruiter/usedBy/Bitbucket.svg';
import BubbleLogo from '@/assets/images/recruiter/usedBy/Bubble.svg';
import AvoLogo from '@/assets/images/recruiter/usedBy/Avo.svg';

const logoRow1 = [AirBnbLogo, AdobeLogo, AirtableLogo, AmazonLogo, AmplitudeLogo, AirBnbLogo, AdobeLogo, AirtableLogo, AmazonLogo, AmplitudeLogo, AnimaLogo];
const logoRow2 = [AtlassianLogo, Auth0Logo, StackLogo, BitbucketLogo, BubbleLogo, AtlassianLogo, Auth0Logo, StackLogo, BitbucketLogo, BubbleLogo, AvoLogo];

function Logo({ src }) {
  return (
    <div className="mx-10 flex items-center">
      <Image src={src} alt="brand logo" className="transition" />
    </div>
  )
};

export default function AboutBanner() {
  return (
    <section className="relative w-full overflow-hidden bg-[url('@/assets/images/about/aboutBanner/BackgroundImage.png')] bg-cover bg-center bg-no-repeat">
      {/* Left Section */}
      <div className="relative  lg:justify-center z-10 mx-auto max-w-7xl px-3 lg:py-50 md:py-32 py-30">
        <div className="max-w-5xl relative z-10">
          <div className="relative inline-block">
            <div className="absolute -z-10 -top-6 -left-10 w-full h-full bg-[#245FFF63] blur-2xl rounded-full opacity-60 " />
            <p className="text-white text-3xl md:text-7xl lg:text-[88px] font-bold leading-none">Redefining How Talent Meets Opportunity</p>
          </div>
          <p className="mt-4 font-semibold text-black text-base md:text-2xl">
            Bridging the gap between skill and hiring for campuses, job-seekers, and  <br className="hidden lg:block" />
            recruiters alike.
          </p>
          <div className="mt-10 flex justify-center md:justify-center lg:justify-start gap-4">
            <Button className="cursor-pointer rounded-lg font-semibold text-sm md:text-base px-3 py-3 h-auto bg-brand-blue hover:bg-brand-blue-hover">Explore Opportunities</Button>
            <Button className="cursor-pointer text-black rounded-lg font-semibold text-sm md:text-base px-3 py-3 h-auto bg-white hover:bg-white border border-blue-100 shadow">Join as a Campus</Button>
          </div>

          <div className="relative lg:right-1/2 w-screen top-10 mt-25">
            <div className="hidden lg:block">
            <div className="pointer-events-none absolute top-0 left-0 h-full w-80 z-10 backdrop-blur-[3px] bg-[linear-gradient(90deg,rgba(178,200,217,0.18)_0%,rgba(178,200,217,0.05)_60%,transparent_100%)]" />
            <div className="pointer-events-none absolute top-0 right-0 h-full w-160 z-10 backdrop-blur-[3px] bg-[linear-gradient(270deg,rgba(178,200,217,0.18)_0%,rgba(178,200,217,0.05)_60%,transparent_100%)] " />
            </div>
            <Marquee speed={80}>
              {logoRow1.map((logo, i) => (
                <Logo key={i} src={logo} />
              ))}
            </Marquee>

            <Marquee speed={80} className="mt-12">
              {logoRow2.map((logo, i) => (
                <Logo key={i} src={logo} />
              ))}
            </Marquee>
          </div>
        </div>
      </div>
      {/* Right Section */}
      <div className="absolute z-0 md:z-0 lg:z-10 bottom-0 right-20 ">
        <Image src={PeopleImage} alt="People" priority />
      </div>
    </section>
  );
};