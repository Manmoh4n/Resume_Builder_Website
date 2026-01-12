import React from 'react'
import Image from 'next/image'
import ResumeImage from "@/assets/images/resume-Builder/resumeSection/resumeImage.png";

export default function ResumeSection() {
  return (
    <div className="w-full max-w-7xl mx-auto lg:px-0 md:px-10 px-5">
      <div className="relative overflow-hidden rounded-xl">
        <Image src={ResumeImage} alt="Resume preview" className="w-full h-auto" priority />
        {/*  Fade gradient */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 md:h-50 lg:h-71 bg-[linear-gradient(180deg,rgba(255,255,255,0)_0%,#FFFFFF_85%)]" />
      </div>
    </div>
  )
}
