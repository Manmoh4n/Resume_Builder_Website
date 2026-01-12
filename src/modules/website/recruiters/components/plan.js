import React from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/shared";
import EnterpriseIcon from '@/assets/images/recruiter/plan/EnterpriseIcon.svg';
import GrowthIcon from '@/assets/images/recruiter/plan/GrowthIcon.svg';
import StarterIcon from '@/assets/images/recruiter/plan/StarterIcon.svg';
import { Button } from '@/components/ui/button';
import { Badge } from "@/components/ui/badge"
import { BadgeCheckIcon } from "lucide-react";
import plansData from '@/assets/json/plans.json';

const PLAN_ICONS = {
  starter: StarterIcon,
  growth: GrowthIcon,
  enterprise: EnterpriseIcon,
};

const PlanCard = ({ icon, title, price, subtitle, features, popular = false, }) => {
  return (
    <Card className={`relative h-full rounded-2xl border ${popular ? "bg-gradient-to-b from-[#0F2C6E] to-[#0B1220] text-white shadow-xl scale-[1.03]" : "bg-white text-[#0F172A] overflow-hidden"}`}>
      {popular ?
        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-semibold text-white">
          <Badge className="bg-recuriter-most-popular border-blue-600 shadow-[0_5.25px_13.14px_0_rgba(0,0,0,0.3)] px-4 py-2 font-normal text-sm">MOST POPULAR</Badge>
        </div> :
        <div className="absolute -top-24 -left-24 w-[360px] h-[260px] bg-[radial-gradient(circle_at_top_left,rgba(36,95,255,0.35),transparent_100%)] blur-[80px] z-0" />
      }

      <CardContent className="px-6 py-2 h-full flex flex-col">
        <div className="flex items-center gap-2">
          <Badge className="bg-white/30 backdrop-blur-md">
            <Image src={icon} alt="" />
            <p className={`md:text-sm lg:text-base text-sm font-medium ${popular ? "text-white" : "text-brand-blue"}`}>
              {title}
            </p>
          </Badge>
        </div>

        <div className="mt-6">
          <p className="flex items-baseline gap-1 lg:text-5xl md:text-3xl text-[43px] font-bold">₹{price}
            <span className="lg:text-text-22 md:text-base text-xl font-normal opacity-70"> /month</span>
          </p>
          <p className={`mt-2 mb-5 ml-3 text-lg md:text-lg font-normal md:leading-none ${popular ? "text-white/80" : "text-black"}`}>
            {subtitle}
          </p>
        </div>

        <ul className="space-y-5 mb-5">
          {features.map((item, i) => (
            <li key={i} className="flex items-start gap-3 text-sm">
              {popular ? <BadgeCheckIcon className="text-white shrink-0" /> : <BadgeCheckIcon className="text-brand-blue shrink-0" />}
              <span className={popular ? "text-white/90 md:text-base lg:text-lg font-normal text-base" : " lg:text-lg md:text-base font-normal text-base"}>
                {item}
              </span>
            </li>
          ))}
        </ul>
        <Button className={`mt-auto w-full cursor-pointer p-6 font-normal md:text-lg text-base rounded-full ${popular ? "bg-white text-[#0F2C6E] hover:bg-white/90" : "bg-brand-blue hover:bg-brand-blue-hover text-white"}`}>
          Sign Up
        </Button>
      </CardContent>
    </Card>
  );
};

export default function Plan() {
  return (
    <section>
      <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-14 py-8">
        <p className="text-base md:text-2xl font-bold text-center mb-4">A Plan For Every Need</p>
        <Separator className="mx-auto w-40 bg-separtor-line" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-4 lg:gap-6 items-end md:mt-18 lg:mt-18 mt-8">
          {plansData.plans.map((data) => (
            <PlanCard
              key={data.id}
              icon={PLAN_ICONS[data.id]}
              title={data.title}
              price={data.price}
              subtitle={data.subtitle}
              features={data.features}
              popular={data.popular}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
