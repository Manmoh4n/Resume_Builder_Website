import { Separator } from "@/shared";
import StudentImage from "@/assets/images/about/ourMisson/studentImage.jpg";
import GradientEllipse from "@/assets/images/about/ourMisson/gradientEllipse.svg";
import GridImage from "@/assets/images/about/ourMisson/gridImage.svg";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function OurMisson() {
    return (
        <section className="relative">
            <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-14 py-8">
                <h2 className="text-base md:text-2xl font-bold text-black text-center mb-4">Our Misson</h2>
                <Separator className="bg-separtor-line" />
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mt-8 md:mt-14 lg:items-center ">
                  <div className="md:col-span-6">
                    <Image src={GridImage} alt="student image" priority className="absolute bottom-0 left-0 z-0 hidden md:hidden lg:block"  />
                    <Image src={StudentImage} alt="student image" priority className="rounded-2xl relative z-10" />
                  </div>
                  <div className="md:col-span-6">
                    <p className="text-2xl md:text-2xl lg:text-text-28 font-bold bg-clip-text text-transparent bg-[linear-gradient(90deg,#081225_71.01%,#245FFF_100%)] mb-4 md:mb-2">
                        Mission-Driven. Future-Focused.
                    </p>
                    <p className="font-medium text-base md:text-base lg:text-2xl text-start">
                      We’re on a mission to unlock the true potential 
                       of India’s youth by building a hiring ecosystem 
                       that is fast, fair, and accessible. With our 
                       assessments and verified network, we help 
                       candidates showcase skills — not just resumes
                    </p>
                    <Image src={GradientEllipse} alt="Ellipse image" priority className="absolute bottom-0 md:top-0 right-0 z-0" />
                    <div className="flex items-center gap-3 relative md:mt-4 lg:mt-10 mt-5">
                       <Button className="cursor-pointer rounded-lg font-semibold text-base lg:text-base md:text-sm px-3 py-2 h-auto bg-brand-blue hover:bg-brand-blue-hover">Explore Opportunities</Button>
                       <Button className="cursor-pointer text-black rounded-lg font-semibold text-base lg:text-base md:text-sm  px-2 md:px-4 py-2 h-auto bg-white hover:bg-white border border-blue-100 shadow">Join as a Campus</Button>
                    </div>
                  </div>
                </div>
            </div>
        </section>
    )
}
