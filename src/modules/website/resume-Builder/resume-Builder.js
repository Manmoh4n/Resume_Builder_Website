'use client'
import { Faq } from "@/shared";
import {ResumeBuilderBanner, ResumeSection, WhyMostResumes, YourResume, WhatMakesResume, Blog  } from "./components";

export const ResumeBuilder = () => {
  return (
    <div className="relative bg-[#FDFFFF]">
      <ResumeBuilderBanner />
      <ResumeSection />
      <WhyMostResumes />
      <YourResume />
      <WhatMakesResume />
      <section>
        <Faq textColor="text-black"/>
      </section>
      <Blog />
    </div>
  )
};
export default ResumeBuilder;
