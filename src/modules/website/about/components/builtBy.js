import { Separator } from "@/shared";
import React from "react";
import Image from "next/image";
import GradientRectangle from "@/assets/images/about/builtBy/gradientRectangle.svg";
import {builtByData} from "@/assets/mockData";
import BackgroundImage from "@/assets/images/about/builtBy/backgroundImage.svg";
import BlueRay from "@/assets/images/about/builtBy/blueRay.svg";

const TeamCard = ({ image, name, role, index }) => {
  const isLargeCard = index < 2;

  return (
    <div className={`relative rounded-2xl overflow-hidden ${isLargeCard ? "lg:col-span-6 h-107" : "lg:col-span-3 h-80 lg:mt-6"}`}>
      <Image src={GradientRectangle} alt="Gradient Rectangle" className="absolute bottom-0 left-0 z-0"/>
      <Image src={image} alt={name} className="h-full w-full object-cover" priority />

      <div className="absolute inset-0 flex items-end p-5 z-10">
        <div>
          <p className="text-white text-xl md:text-text-26 font-bold">{name}</p>
          <p className="text-white text-base md:text-lg font-medium">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default function BuiltBy() {
  return (
    <section className="relative">
      <Image src={BlueRay} alt="Blue Ray" priority className="absolute right-0 -top-52 z-0" /> 
      <Image src={BackgroundImage} alt="background" priority className="absolute w-full top-1/2 z-0" /> 
     <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-14 py-8">
       <p className="text-base md:text-2xl font-bold text-black text-center mb-4">Built by Doers Who Care</p> 
        <Separator className="mx-auto w-40 bg-separtor-line" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 mt-8 md:mt-14">
          {builtByData.map((member, index) => (
            <TeamCard key={index} index={index} {...member}/>
          ))}
        </div>
      </div>
    </section>
  );
}
