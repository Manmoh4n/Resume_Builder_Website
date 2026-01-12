import React from "react";
import Image from "next/image";
import { Separator } from "@/shared";
import ArrowIcon from "@/assets/images/home/LetsBuild/ArrowIcon.svg";
import BuildingImg from "@/assets/images/home/LetsBuild/Building.jpg";
import SocietyImg from "@/assets/images/home/LetsBuild/Society.jpg";

export default function LetsBuild() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-14 py-8">
        <p className="text-base md:text-2xl font-bold text-white text-center mb-4">Let’s Build the Future Together</p>
        <Separator className="mx-auto w-40 bg-separtor-line" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-8 md:mt-14">
          {/* LEFT CARD */}
          <div className="relative lg:col-span-5 h-[260px] md:h-[360px] rounded-2xl overflow-hidden group cursor-pointer">
            <Image src={BuildingImg} alt="Job-ready candidates" fill className="object-cover transition-transform duration-500 group-hover:scale-112" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
            <div className=" absolute inset-0 bg-gradient-to-t from-[#1E40FF]/80 via-[#1E40FF]/40 to-transparent opacity-0 translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" />
              <div className="absolute inset-0 flex items-end justify-between p-5 z-10">
                <p className="text-white text-xl md:text-2xl font-medium transition-all duration-300 group-hover:font-bold">Get access to job-ready candidates</p>
                <Image src={ArrowIcon} alt="arrow" className="opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" priority />
            </div>
          </div>

        {/* RIGHT CARD */}
        <div className="relative lg:col-span-7 h-[260px] md:h-[360px] rounded-2xl overflow-hidden group cursor-pointer">
          <Image src={SocietyImg} alt="Assessments and mock interviews" fill className="object-cover transition-transform duration-500 group-hover:scale-112" priority/>
          {/* Dark overlay (default) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
            {/* Blue overlay (on hover) */}
            <div className=" absolute inset-0 bg-gradient-to-t from-[#1E40FF]/80 via-[#1E40FF]/40 to-transparent opacity-0 translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 " />
            <div className="absolute inset-0 flex items-end justify-between p-5 z-10">
              <p className="text-white text-xl md:text-2xl  font-medium  transition-all duration-300  group-hover:font-bold">Run assessments & mock interviews for your students</p>
                {/* Arrow – only on hover */}
                <Image src={ArrowIcon} alt="arrow" className="opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" priority/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
