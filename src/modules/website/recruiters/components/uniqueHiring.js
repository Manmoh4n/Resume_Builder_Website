import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import Inbox from '@/assets/images/recruiter/plan/Inbox.svg';
import uniqueData from '@/assets/json/uniqueHiringData.json';
import { BadgeCheckIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function UniqueHiring() {
    return (
        <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5">
            <div className="grid grid-cols-1 gap-12 md:gap-8 items-end">
                <Card className="relative overflow-hidden rounded-xl bg-white shadow-blue-300 shadow-md py-0">
                    <div className=" pointer-events-none absolute -top-32 -left-32 w-[400px] h-[300px] bg-[#245FFF26] blur-[70px]" />
                    <CardContent className="relative flex items-end">
                        <div className=" relative space-y-3 max-w-xl pt-6 pb-18 lg:pt-6 lg:pb-6 z-10">
                            <p className="text-text-26 md:text-4xl font-bold text-[#0F172A] md:leading-11">Have unique hiring needs or large scale recruitment goals?</p>
                            <p className="text-lg font-normal md:text-xl text-[#000000]">
                                Let’s build a custom plan just for you with dedicated
                                features, unlimited flexibility, and personalised support.
                            </p>
                            <ul className="space-y-3">
                                {uniqueData.features.map((item, index) => (
                                    <li key={index} className="flex items-start gap-3">
                                        <BadgeCheckIcon className="text-blue-600" />
                                        <span className="text-base font-normal md:text-lg text-[#000000]">
                                            {item}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                            <Button className="rounded-lg cursor-pointer bg-brand-blue hover:bg-brand-blue-hover text-white font-semibold px-3 py-2 w-full lg:w-2xs md:w-2xs h-auto text-base shadow-xs shadow-black/10"> Get In Touch </Button>
                        </div>
                        <div className="absolute bottom-0 right-0 xs:w-full">
                            <Image src={Inbox} alt="Enterprise illustration" priority />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}
