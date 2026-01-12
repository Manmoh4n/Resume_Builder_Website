import React from 'react';
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupInput } from '@/components/ui/input-group';
import { MailIcon } from 'lucide-react';
import BlueArrow from "@/assets/images/campus/campusBanner/blueArrow.svg"
import Image from 'next/image';

export default function CampusBanner() {
    return (
        <section className="relative w-full overflow-hidden flex items-center bg-campus-banner">
            <div className="absolute inset-0 opacity-18 pointer-events-none">
                <div className="w-full h-full bg-[url('@/assets/images/campus/campusBanner/bg-lines.svg')] bg-no-repeat bg-cover lg:bg-[position:100%_100px] bg-bottom" />
            </div>
            <div className="absolute inset-0 opacity-95 pointer-events-none">
                <div className="w-full h-full bg-[url('@/assets/images/campus/campusBanner/backgroundEllipse.svg')] bg-no-repeat bg-cover lg:bg-[position:100%_100px] bg-bottom" />
            </div>
            <div className="relative z-10 w-full max-w-7xl mx-auto px-3 lg:pt-50 lg:pb-50 md:pt-32 md:pb-14 pt-30 pb-10">
                {/* <div className="absolute inset-0 bg-[#245FFF80] blur-[207.2px] opacity-20" /> */}
                <div className="flex items-center justify-center mb-6 lg:mb-10">
                    <Image src={BlueArrow} alt="AI-Powered Skill Assessment" priority className='rotate-180 mr-4 hidden md:block' />                               
                    <div className="inline-flex border border-brand-blue bg-[#245FFF21] rounded-full px-6 py-1">
                        <h4 className='text-white font-medium lg:text-lg text-xs'>Powering Campus Placements with AI-Driven Assessments</h4>
                    </div>
                    <Image src={BlueArrow} alt="AI-Powered Skill Assessment" priority className='ml-4 hidden md:block'/>                               
                </div>
                <div className="text-center">
                    <h2 className="text-white block lg:text-7xl md:text-5xl text-4xl font-medium leading-tight">From Campus to Corporate</h2>
                    <h1 className="mt-3 block font-bold drop-shadow-[0px_3.27px_3.27px_rgba(78,110,192,0.30)] text-4xl lg:text-[87px] md:text-5xl bg-[linear-gradient(121.52deg,rgba(153,166,213,0.88)_-22.23%,#5C76FD_23.37%,#245FFF_91.79%)] bg-clip-text text-transparent">
                        Future-Proof Your Placements.
                    </h1>
                    <p className="text-white font-semibold mt-8 lg:text-xl md:text-lg text-base px-4">
                        Partner with us to conduct white-labeled hiring contests, AI-based assessments, and attract top<br /> companies for your students
                    </p>
                </div>
                <div className="flex justify-center mt-8 md:mt-12">
                    <div className="">
                        <InputGroup className="bg-white border border-white-300 h-13 rounded-lg">
                            <InputGroupInput
                                placeholder="Enter your Email Here"
                                type='email'
                                className="h-13 text-black md:text-lg font-medium"
                            />
                            <InputGroupAddon>
                                <MailIcon />
                            </InputGroupAddon>
                            <InputGroupAddon align="inline-end">
                                <InputGroupButton
                                    type="button"
                                    className="rounded-lg font-semibold px-3 py-2 h-auto text-base shadow-xs shadow-black/10 bg-brand-blue hover:bg-brand-blue-hover hover:text-white text-white cursor-pointer"
                                    // onClick={handleSubmit}
                                >
                                    Request Demo
                                </InputGroupButton>
                            </InputGroupAddon>
                        </InputGroup>
                    </div>

                </div>
            </div>
        </section>
    )
}