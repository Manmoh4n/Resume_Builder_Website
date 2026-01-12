import Image from 'next/image';
import React from 'react';
import CircularImage from "@/assets/images/home/homeBanner/Card_Circle.svg";
import VerifiedLogo from "@/assets/images/home/homeBanner/VerifiedLogo.svg";
import SkillProgressLogo from "@/assets/images/home/homeBanner/SkillProgressLogo.svg";
import CredFlowLogo from "@/assets/images/home/homeBanner/CredFlowLogo.svg";
import AIInterviewLogo from "@/assets/images/home/homeBanner/AIInterviewLogo.svg";
import ArrowLineUpRight from "@/assets/images/home/homeBanner/ArrowLineUpRight.svg";
import GoogleLogo from "@/assets/images/home/homeBanner/Google_Logo.svg";
import { Button } from '@/components/ui/button';
 
export default function HomeBanner() {
  return (
    <section className="relative w-full overflow-hidden flex items-center">
        <div className="absolute inset-0 opacity-18 pointer-events-none">
          <div className="w-full h-full bg-[url('@/assets/images/home/homeBanner/bg_circular_lines.svg')] bg-no-repeat bg-cover bg-top-center"></div>
        </div>
 
        {/* Main Container */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-3 lg:py-50 md:py-32 py-30">
          <div className="flex flex-row items-start justify-between">
 
            {/* Top Left Badge */}
            <div className="mb-10 md:mb-0 flex items-center">
              <div className="inline-flex items-center gap-1 rounded-full bg-banner-card-gradient backdrop-blur-heavy px-1 py-1 shadow-lg border border-white/20">
                <div className="flex justify-center ">
                  <Image src={AIInterviewLogo} alt="AI Interview" className="w-[25px] h-[25px] md:w-10 md:h-10" />
                </div>
                <div className="flex flex-col gap-[1px] text-white leading-none">
                  <div className="font-bold text-[7px] md:text-xs">AI Interview Analysis</div>
                  <div className="flex items-center gap-0.5 mb-0.5">
                    <span className="flex items-center gap-1 rounded-md bg-white px-0.5 py-[1px] text-[5px] font-semibold md:text-extra-small md:font-semibold text-brand-blue-light ">
                      Confidence
                      <span className="rounded bg-[#FFF7B3] px-1 text-[#FFA500]">50%</span>
                    </span>
                    <span className="flex items-center gap-1 rounded-md bg-white px-0.5 py-[1px] text-[5px] font-semibold md:text-extra-small md:font-semibold text-brand-blue-light">
                      Clarity
                      <span className="rounded bg-[#FFF7B3] px-1 text-[#FFA500]">50%</span>
                    </span>
                  </div>
                  <div className="text-[6px] md:text-extra-small font-bold opacity-90 ">Up Skill Now</div>
                </div>
                <Image src={ArrowLineUpRight} alt=""  className="w-3 h-3 md:w-4 md:h-4 ml-1 mr-1 md:ml-2 md:mr-2" />
              </div>
              <Image src={CircularImage} alt=""  className="ml-2 w-3 h-3 md:w-4 md:h-4" />
            </div>
 
            {/* Top Right Badge */}
            <div className="mb-10 md:mb-0 md:ml-4 flex items-center">
              <Image src={CircularImage} alt=""  className="mr-3 w-3 h-3 md:w-4 md:h-4" />
              <div className="inline-flex items-center gap-1 rounded-full bg-banner-card-gradient backdrop-blur-heavy px-1 py-1 shadow-lg border border-white/20">
                <div className="flex justify-center">
                  <Image src={VerifiedLogo} alt="Verified Scorecard" className="w-[25px] h-[25px] md:w-10 md:h-10" />
                </div>
                <div className="flex flex-col gap-[1px] text-white leading-none">
                  <div className="font-bold text-[7px] md:text-xs">Your Verified Scorecard</div>
                  <div className="text-[5px] md:text-[10px] mb-0.5">Overall Score: 78/100</div>
                  <div className="flex items-center gap-1 text-[5px] font-semibold md:text-extra-small md:font-semibold leading-none">
                    <span className="text-white">Top</span>
                    <span className="rounded-md bg-[#C5E8E4] px-1 py-[1px] text-[#40BFB1] font-semibold">15%</span>
                    <span className="opacity-80">Among candidates</span>
                  </div>
                </div>
                <Image src={ArrowLineUpRight} alt=""  className="w-3 h-3 md:w-4 md:h-4  md:ml-2 md:mr-2" />
              </div>
            </div>
          </div>
 
          {/* Center Content */}
          <div className="text-center max-w-4xl mx-auto mb-10 md:mb-3 leading-none">
            <span className="block text-[33px] font-semibold text-white lg:text-[72px] md:text-[40px] md:font-mono">Your Skills Deserve Better</span>
            <span className=" block font-bold drop-shadow-md text-[37px] lg:text-[87px] md:text-[50px] bg-[linear-gradient(121.52deg,#FFF4D7_-22.23%,rgba(218,222,251,0.982854)_49.03%,rgba(216,255,220,0.972567)_91.79%)] bg-clip-text text-transparent">
              Than Just a Resume.
            </span>
            <p className="text-white font-semibold text-[16px] mt-6 md:text-[20px] opacity-70">
              Whether you are a fresher or early professional stand out with AI
              based assessment and interviews.
            </p>
            <p className="text-white font-semibold text-[16px] mt-2 md:text-[20px] opacity-70">Get your verified scorecard and get hired faster.</p>
          </div>
 
          <div className="flex flex-row items-start justify-between">
 
            {/* Bottom Left Badge */}
            <div className="mb-0 md:mb-0 flex items-center">
              <div className="inline-flex items-center gap-1 rounded-full bg-banner-card-gradient backdrop-blur-heavy px-1 py-1 shadow-lg border border-white/20">
                <div className="flex justify-center">
                  <Image src={CredFlowLogo} alt="CredFlow" className="w-[25px] h-[25px] md:w-10 md:h-10" />
                </div>
                <div className="flex flex-col gap-[1px] text-white leading-none">
                  <div className="font-bold text-[5px] md:text-xs">CredFlow | Associate Engineer</div>
                  <div className="text-[6px] md:text-[10px] font-semibold opacity-70 mb-0.5">Remote | ₹6 LPA</div>
                  <div className="flex items-center gap-1 text-[6px] md:text-[10px] font-bold">
                    <span className="rounded-md bg-[#C5E8E4] px-0.5 py-[1px] text-[6px] text-[#40BFB1] font-semibold">97%</span>
                    <span className="opacity-90">Match with Your Profile</span>
                  </div>
                </div>
                <Image src={ArrowLineUpRight} alt=""  className="w-3 h-3 md:w-4 md:h-4  md:ml-2 md:mr-2" />
              </div>
              <Image src={CircularImage} alt=""  className="ml-2 w-3 h-3 md:w-4 md:h-4" />
            </div>
 
            {/* Bottom Right Badge */}
            <div className="mb-0 md:mb-0 md:ml-4 flex items-center">
              <Image src={CircularImage} alt=""  className="mr-3 w-3 h-3 md:w-4 md:h-4" />
              <div className="inline-flex items-center gap-1 rounded-full bg-banner-card-gradient backdrop-blur-heavy px-1 py-1 shadow-lg border border-white/20">
                <div className="flex justify-center">
                  <Image src={SkillProgressLogo} alt="Skill Progress" className="w-[25px] h-[25px] md:w-10 md:h-10" />
                </div>
                <div className="flex flex-col gap-[1px] text-white leading-none">
                  <div className="font-bold text-[6px] md:text-[10px]">Your Skill Progress</div>
                  <div className="flex items-center gap-1 mb-0.5">
                    <span className="flex items-center gap-1 rounded-md bg-white px-1 py-[1px] text-[6px] font-semibold md:text-extra-small md:font-semibold text-brand-blue-light ">
                      Aptitude
                      <span className="rounded-[2px] bg-[#C5E8E4] px-1 text-[#34C759]">12%</span>
                    </span>
                    <span className="flex items-center gap-1 rounded-md bg-white px-1 py-[1px] text-[6px] font-semibold md:text-extra-small md:font-semibold text-brand-blue-light ">
                      Interview
                      <span className="rounded-[2px] bg-[#C5E8E4] px-1 text-[#34C759]">10%</span>
                    </span>
                  </div>
                  <div className="text-[6px] md:text-extra-small font-bold opacity-90">You are improving! Keep going.</div>
                </div>
                <Image src={ArrowLineUpRight} alt=""  className="w-3 h-3 md:w-4 md:h-4 md:ml-2 md:mr-2" />
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-banner-radial-gradient blur-2xl opacity-40" />
 
          {/* Mobile Buttons */}
          <div className="md:hidden absolute bottom-10 left-1/2 -translate-x-1/2 w-full flex justify-center gap-4">
            <Button className="relative w-[30%] rounded-lg bg-brand-blue py-3 text-[10px] font-bold text-white shadow-lg">
              Get Assessed Now
              <span className="absolute -top-3 right-0 rounded-sm bg-white px-2 py-0.5 text-[8px] font-bold text-[#124CEA]">
                It’s Free
              </span>
            </Button>
            <Button className="flex w-[35%] items-center justify-center gap-2 rounded-lg bg-white py-3 text-[10px] font-bold text-[#1F2937] shadow-lg">
              <Image src={GoogleLogo} alt="Google" className="w-3 h-3" />
              Sign Up with Google
            </Button>
          </div>
        </div>
      </section>
  )
}