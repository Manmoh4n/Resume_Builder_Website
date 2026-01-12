import React from 'react';
import { Button } from '@/components/ui/button';
import WizardIcon from "@/assets/images/recruiter/banner/token.svg";
import Image from 'next/image';

export default function ResumeBuilderBanner() {
  return (
    <section className="relative w-full overflow-hidden flex bg-[url('@/assets/images/resume-Builder/banner/bg-banner.svg')] bg-no-repeat lg:bg-auto bg-cover bg-center">
      <div className="relative z-10 w-full max-w-7xl mx-auto lg:pt-50 md:pt-32 lg:pb-12 md:pb-10 pt-30 pb-8">
        <div className="flex items-center justify-center mb-6 lg:mb-10">
          <div className="inline-flex rounded-full p-[2px] bg-[linear-gradient(356.49deg,rgba(18,76,234,0.6)_-16.3%,rgba(18,76,234,0)_87.54%)] shadow-[0px_1px_30px_rgba(36,95,255,0.38)]">
            <div className="w-full h-full bg-white flex items-center justify-center gap-2 rounded-full px-6 py-1">
              <Image src={WizardIcon} alt="Token Zap Icon" />
              <h4 className='text-black font-medium lg:text-lg text-base'>Build ATS-Friendly Resumes with <span className='font-extrabold text-brand-blue'>AI</span></h4>
            </div>
          </div>
        </div>
        <div className="text-center leading-none">
          <h2 className="block bg-[linear-gradient(104.64deg,rgba(8,18,37,0.9)_31.77%,rgba(8,18,37,0.58)_130.47%)] bg-clip-text text-transparent lg:text-7xl md:text-5xl text-4xl font-semibold"> Free AI Resume Analyzer & Builder   </h2>
          <h1 className="block font-bold drop-shadow-[0px_3.27px_3.27px_rgba(78,110,192,0.30)] text-4xl lg:text-[87px] md:text-5xl bg-[linear-gradient(121.52deg,rgba(153,166,213,0.88)_-22.23%,#5C76FD_23.37%,#245FFF_91.79%)] bg-clip-text text-transparent">
            Get Hired Faster!
          </h1>
          <p className="text-black font-semibold mt-8 lg:text-xl md:text-lg text-base px-4">
            Our AI-powered Resume Analyser helps you craft ATS-friendly, recruiter-ready resumes that stand out.
          </p>
        </div>
        <div className="w-full flex justify-center mt-8 md:mt-12">
          <Button className="rounded-lg font-semibold px-3 py-2 h-auto text-base shadow-xs shadow-black/10 border bg-white hover:bg-white text-dark-blue cursor-pointer">
            Start Building
          </Button>
        </div>
      </div>
    </section>
  )
}