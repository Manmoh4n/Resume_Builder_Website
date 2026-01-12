import React from "react";
import Image from "next/image";
import { Separator } from "@/shared";
import ArrowIcon from "@/assets/images/home/LetsBuild/ArrowIcon.svg";
import BuildingImg from "@/assets/images/home/LetsBuild/Building.jpg";
import SocietyImg from "@/assets/images/home/LetsBuild/Society.jpg";
import StudentImage from "@/assets/images/about/readyToBePart/student.jpg";

export default function ReadyToBePart() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-14 py-8">
        <p className="text-base md:text-2xl font-bold text-black text-center mb-4">Ready to Be Part of the Change</p>
        <Separator className="mx-auto w-40 bg-separtor-line" />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-8 md:mt-14 auto-rows-fr">
          {/* LEFT CARD */}
          <div className="relative lg:col-span-5 rounded-2xl overflow-hidden group cursor-pointer">
            <Image src={BuildingImg} alt="Job-ready candidates" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-112" priority />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
            <div className=" absolute inset-0 bg-gradient-to-t from-[#1E40FF]/80 via-[#1E40FF]/40 to-transparent opacity-0 translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0" />
              <div className="absolute inset-0 flex items-end justify-between p-5 z-10">
                <p className="text-white text-xl md:text-2xl font-medium transition-all duration-300 group-hover:font-bold">Get access to job-ready candidates</p>
                <Image src={ArrowIcon} alt="arrow" className="opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" priority />
            </div>
          </div>

        {/* Middle CARD */}
        <div className="relative lg:col-span-4 rounded-2xl overflow-hidden group cursor-pointer">
          <Image src={SocietyImg} alt="Assessments and mock interviews" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-112" priority/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
            <div className=" absolute inset-0 bg-gradient-to-t from-[#1E40FF]/80 via-[#1E40FF]/40 to-transparent opacity-0 translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 " />
            <div className="absolute inset-0 flex items-end justify-between p-5 z-10">
              <p className="text-white text-xl md:text-2xl  font-medium  transition-all duration-300  group-hover:font-bold">Run assessments & mock interviews for your students</p>
                {/* Arrow – only on hover */}
                <Image src={ArrowIcon} alt="arrow" className="opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" priority/>
            </div>
          </div>
          
          {/* Right CARD */}
          <div className="relative lg:col-span-3 rounded-2xl overflow-hidden group cursor-pointer">
           <Image src={StudentImage} alt="Student Image" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-112" priority/>
           {/* Dark overlay (default) */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
            {/* Blue overlay (on hover) */}
            <div className=" absolute inset-0 bg-gradient-to-t from-[#1E40FF]/80 via-[#1E40FF]/40 to-transparent opacity-0 translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 " />
            <div className="absolute inset-0 flex items-end justify-between p-5 z-10">
              <p className="text-white text-xl md:text-2xl  font-medium  transition-all duration-300  group-hover:font-bold">Learn. Practice. Get hired. Ready?</p>
                {/* Arrow – only on hover */}
                <Image src={ArrowIcon} alt="arrow" className="opacity-0 translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0" priority/>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
