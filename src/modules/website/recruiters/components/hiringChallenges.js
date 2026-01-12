import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import {hiringChallengesData} from "@/assets/mockData"

export default function HiringChallenges() {
  return (
    <section className="relative bg-[url('@/assets/images/recruiter/challenges/bg-challenge.svg')] bg-no-repeat bg-cover bg-bottom">
      <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-8 py-6">
        <h2 className="lg:text-6xl text-3xl font-bold text-center bg-poweredBy-title bg-clip-text text-transparent leading-tight">
          Discover & Hire Top Talent Through Challenges
        </h2>
        <p className="mt-4 lg:text-xl text-base text-black font-semibold text-center">
          Host Skill-Based Hiring Contests & Reach pre-screened, skill-ranked candidates through branded AI-powered competitions.
        </p>
        <div className="relative mt-12 md:mt-12 lg:px-0 px-14">
          <div className="absolute top-5 left-0 right-0 h-px bg-blue-200 lg:block hidden" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-blue-200 -translate-x-1/2 lg:hidden" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {hiringChallengesData?.map((step, i) => (
              <div key={i} className="relative flex flex-col items-center">
                <div className="relative z-10 flex items-center justify-center">
                  <div className=" w-10 h-10 rounded-full border-1 border-brand-blue shadow-[0_0_24px_0_rgba(36,95,255,0.35)] flex items-center justify-center bg-white">
                    <div className=" w-8 h-8 rounded-full flex items-center justify-center bg-rounded-inner-circle">
                      <div className="w-6 h-6 rounded-full bg-white" />
                    </div>
                  </div>
                </div>
                <div className="w-px h-10 bg-rounded-outer-circle" />
                <Card className="w-full h-full bg-white border border-blue-100 shadow-[0_0_52.92px_0_rgba(36,95,255,0.18)] rounded-xl py-0">
                  <CardContent className="p-0 relative h-full overflow-hidden">
                    <div className="lg:pb-26 pb-26 lg:max-w-[90%] max-w-[85%]">
                      <p className="text-base font-bold text-dark-blue p-4">
                        {step.title}
                      </p>
                    </div>
                    <div className="absolute bottom-0 right-0 z-0">
                      <Image src={step.icon} alt={step.title} priority className="w-[190px] lg:w-full" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Background Glow */}
      {/* <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-[700px] h-[700px] 
                        -translate-x-1/2 -translate-y-1/2
                        bg-blue-500/10 rounded-full blur-[120px]" />
      </div> */}
    </section>
  )
}
