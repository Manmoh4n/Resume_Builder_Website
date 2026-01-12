import React from 'react';
import { Button } from '@/components/ui/button';
import WizardIcon from "@/assets/images/recruiter/banner/token.svg";
import Image from 'next/image';

export default function RecruiterBanner() {
  return (
    <section className="relative w-full overflow-hidden flex items-center bg-[url('@/assets/images/recruiter/banner/bg-banner.svg')] bg-no-repeat lg:bg-auto bg-cover lg:bg-[position:15px_100%] bg-bottom">
      {/* <div className="absolute inset-0 opacity-100 pointer-events-none">
        <div className="w-full h-full bg-[url('@/assets/images/recruiter/banner/bg-banner.svg')] bg-no-repeat bg-[position:15px_100%] bg-auto"></div>
      </div> */}
      <div className="relative z-10 w-full max-w-7xl mx-auto lg:pt-50 lg:pb-20 md:pt-32 md:pb-16 pt-30 pb-15">
        <div className="flex items-center justify-center mb-6 lg:mb-10">
          <div className="inline-flex rounded-full p-[2px] bg-[linear-gradient(356.49deg,rgba(18,76,234,0.6)_-16.3%,rgba(18,76,234,0)_87.54%)] shadow-[0px_1px_30px_rgba(36,95,255,0.38)]">
            <div className="w-full h-full bg-white flex items-center justify-center gap-2 rounded-full px-6 py-1">
              <Image src={WizardIcon} alt="Token Zap Icon" />
              <h4 className='text-black font-medium lg:text-lg text-base'>Reduce Hiring time by <span className='font-extrabold text-brand-blue'>70%</span></h4>
            </div>
          </div>
        </div>
        <div className="text-center leading-none">
          <h2 className="block bg-[linear-gradient(104.64deg,rgba(8,18,37,0.9)_31.77%,rgba(8,18,37,0.58)_130.47%)] bg-clip-text text-transparent lg:text-7xl md:text-5xl text-4xl font-semibold">Hire Smarter, Not Harder </h2>
          <h1 className="block font-bold drop-shadow-[0px_3.27px_3.27px_rgba(78,110,192,0.30)] text-4xl lg:text-[87px] md:text-5xl bg-[linear-gradient(121.52deg,rgba(153,166,213,0.88)_-22.23%,#5C76FD_23.37%,#245FFF_91.79%)] bg-clip-text text-transparent">
            Discover Pre-Assessed Talent.
          </h1>
          <p className="text-black font-semibold mt-8 lg:text-xl md:text-lg text-base px-4">
            Access a verified pool of job-ready candidates with resume insights, aptitude scores, and AI mock <br />interview results.
          </p>
        </div>
        <div className="w-full flex justify-center gap-4 mt-8 md:mt-12">
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