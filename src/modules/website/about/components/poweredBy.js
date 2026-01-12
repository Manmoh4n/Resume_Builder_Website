import React from "react"
import { Card, CardContent } from "@/components/ui/card"
import RectangularColor from "@/assets/images/about/poweredBy/rectangleImage.svg";
import Image from "next/image"
import {poweredByData} from "@/assets/mockData";

export default function PoweredBy() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-8 py-6">
        <h2 className="lg:text-6xl text-3xl font-bold text-center bg-poweredBy-title bg-clip-text text-transparent leading-tight">
          Trusted by Campuses, Powered by Recruiters
        </h2>
        <div className="relative mt-12 md:mt-12 md:px-0 lg:px-0 px-14">
          <div className="absolute top-5 left-0 right-0 h-px bg-blue-200 md:block lg:block hidden" />
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-blue-200 -translate-x-1/2 md:hidden lg:hidden" />
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {poweredByData.map((step, i) => (
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
                    <Image src={RectangularColor} alt="Rectangular Color" className="absolute bottom-0 left-0"/>
                    <div className="flex flex-col pl-4 pt-4 lg:pb-26 pb-26 lg:max-w-[80%] max-w-[85%]">
                      <p className="font-bold text-2xl text-[#245FFF] leading-tight">{step.count}</p>
                      <p className="text-base font-bold text-dark-blue leading-tight">
                        {step.title}
                      </p>
                    </div>
                    <div className="absolute bottom-0 right-0 z-0">
                      <Image src={step.icon} alt={step.title} priority />
                    </div>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
