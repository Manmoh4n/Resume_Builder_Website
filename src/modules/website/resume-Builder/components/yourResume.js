import React from "react";
import { Separator } from "@/shared";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { yourResumeData } from "@/assets/mockData";

export default function YourResume() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-8 py-6">
        <p className="text-base md:text-2xl font-bold text-dark-blue text-center mb-4">Your Resume AI-Optimized in Minutes</p>
        <Separator className="w-50 bg-separtor-line" />

        <div className="relative mt-12 md:px-0 lg:px-0 px-14">
          {/* Horizontal line for desktop view */}
          <div className="absolute top-5 left-0 right-0 h-px bg-blue-200 hidden md:block" />
          {/* Vertical line for mobile for view */}
          <div className="absolute top-0 bottom-0 left-1/2 w-px bg-blue-200 -translate-x-1/2 md:hidden" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
            {yourResumeData.map((item) => (
              <div key={item.step} className="relative flex flex-col items-center">
                {/* Step circle */}
                <div className="relative z-10 flex items-center justify-center">
                  <div className="w-11 h-11 rounded-full border border-brand-blue shadow-[0_0_24px_rgba(36,95,255,0.30)] flex items-center justify-center bg-white">
                    <div className="w-8 h-8 rounded-full flex items-center justify-center bg-rounded-inner-circle">
                      <div className="w-8 h-8 rounded-full bg-white border border-blue-300 flex items-center justify-center text-text-26 font-extrabold text-brand-blue shadow-[0_0_12px_rgba(46,95,255,0.9)]">
                        {item.step}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Vertical connector */}
                <div className="w-px h-13 bg-rounded-outer-circle" />

                <Card className="w-full md:h-full bg-white border border-blue-100 rounded-xl shadow-[0_0_30px_rgba(36,95,255,0.1)]">
                  <CardContent className="flex flex-col items-center text-center pt-6">
                    <div className="p-4 md:p-4 lg:p-5 rounded-md bg-white flex items-center justify-center shadow-[0_0_30px_rgba(36,95,255,0.85)]">
                      <Image src={item.icon} alt={item.title} />
                    </div>
                    <p className="font-bold text-dark text-xl md:text-xl lg:text-text-26 mt-8"> {item.title} </p>
                    <p className="md:text-base text-sm font-medium text-dark mt-2 leading-tight"> {item.description} </p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

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
};
