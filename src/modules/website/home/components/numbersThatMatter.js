import React from "react";
import Image from "next/image";
import { Separator } from "@/shared";
import { Card, CardContent } from "@/components/ui/card";
import HiringCompanies from "@/assets/images/home/numbersThatMatter/HiringCompanies.svg";
import CandidatesAssessed from "@/assets/images/home/numbersThatMatter/CandidatesAssessed.svg";
import InterviewCallRate from "@/assets/images/home/numbersThatMatter/InterviewCallRate.svg";
import CompaniesIcon from "@/assets/images/home/numbersThatMatter/CompaniesIcon.svg";
import AssessedIcon from "@/assets/images/home/numbersThatMatter/AssessedIcon.svg";
import CallRateIcon from "@/assets/images/home/numbersThatMatter/CallRateIcon.svg";

const NumberCard = ({ title, value, icon, image }) => {
  return (
    <Card className="group rounded-xl border border-white/10 bg-[linear-gradient(135deg,#0B1220,#0E1A33)] hover:border-blue-500/90 hover:shadow-[0_0_40px_rgba(59,130,246,0.95)] pt-0 pb-0 z-10">
      <CardContent className="relative">
        <div className="rounded-xl absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 translate-y-6 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 z-20" />
        <div className="flex flex-col">
          <div className="flex justify-between z-10 pt-5">
            <p className="text-white text-lg md:text-text-22 font-medium leading-tight">{title}</p>
            <div className="flex h-10 w-10 items-center justify-center rounded-full border group-hover:bg-blue-700 group-hover:border-blue-300 border-white/70 bg-white/5">
              <Image src={icon} alt="" />
            </div>
          </div>

          <div className="flex flex-1 pt-20 z-10">
            <p className="text-white text-[56px] md:text-6xl font-bold text-center whitespace-nowrap transition-all duration-800 group-hover:font-extrabold group-hover:delay-200 group-hover:scale-115">{value}</p>
          </div>

          <div className="h-[209px]">
            <Image src={image} alt="" fill className="object-cover pt-40" priority />
          </div>

        </div>
      </CardContent>
    </Card>
  );
};


export default function NumbersThatMatter() {
  return (
    <section className="bg-brand-dark-blue relative">
      <div className="absolute inset-0 ">
        <div className="w-full h-full bg-[url('@/assets/images/home/numbersThatMatter/BackgroundLine.svg')] bg-no-repeat"></div>
      </div>
      <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-14 py-8">
        <h2 className="text-base md:text-2xl font-bold text-white text-center mb-4">Numbers That Matter</h2>
        <Separator className="bg-separtor-line mx-auto" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-14">
          <NumberCard title="Hiring Companies" value="500+" icon={CompaniesIcon} image={HiringCompanies} />
          <NumberCard title="Candidates Assessed" value="10,000+" icon={AssessedIcon} image={CandidatesAssessed} />
          <NumberCard title="Interview Call Rate" value="93%" icon={CallRateIcon} image={InterviewCallRate} />
        </div>
      </div>
    </section>
  );
}
