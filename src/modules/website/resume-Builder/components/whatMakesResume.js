import { Separator } from '@/shared'
import Image from 'next/image'
import React from 'react'
import ResumeImage from "@/assets/images/resume-Builder/whatMakesResume/resumeImage.png";
import CheckIcon from "@/assets/images/resume-Builder/whatMakesResume/checkIocn.svg";

const checklist = [
    "Resume Formatting",
    "Keyword Optimisation",
    "Contact Info Accuracy",
    "Work Experience Clarity",
    "Skills Coverage",
    "Education Detail Clarity",
    "Language & Grammar Check",
    "Achievements Highlighted",
    "ATS-Friendly Structure",
    "Smart File Naming & Export",
];

export default function WhatMakesResume() {
    return (
        <section className="relative">
          <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-8 py-6">
            <p className="text-base md:text-2xl font-bold text-dark-blue text-center mb-4">What makes our Resume Analyser different?</p>
              <Separator className="w-50 bg-separtor-line" />

               <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-12 mt-12 items-start">
                 <div className="lg:col-span-4 flex flex-col space-y-3 bg-[#F7FAFF] shadow-[0_0_94px_rgba(36,95,255,0.08)]">
                    {checklist.map((item, index) => (
                      <div key={index} className="flex items-center gap-2 bg-white px-3 py-2 rounded-lg">
                        <Image src={CheckIcon} alt="check" />
                          <p className="text-base md:text-text-26 font-medium text-dark">{item}</p>
                        </div>
                    ))}
                </div>
                <div className='lg:absolute lg:col-span-8 flex justify-end lg:top-5 lg:right-50'>
                  <Image src={ResumeImage} alt='Resume Image' />
                </div>
                </div>
            </div>
        </section>

    )
}
