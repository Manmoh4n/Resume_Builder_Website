import Image from 'next/image';
import CheckIcon from "@/assets/images/campus/builtForPlacement/checkIcon.svg";
import { builtForPlacementData } from "@/assets/mockData";
import BackgroundImage from "@/assets/images/campus/builtForPlacement/backgroundImage.svg";

export default function BuiltForPlacement() {
    return (
        <section className="bg-brand-dark-blue relative bg-[url('@/assets/images/campus/builtForPlacement/backgroundGrid.svg')] bg-no-repeat bg-center bg-contain">
            <Image src={BackgroundImage} alt="background" priority className="absolute bottom-0 z-0 pointer-events-none pb-30 object-cover" />
            <div className="relative mx-auto max-w-7xl lg:px-0 lg:py-14 md:px-10 px-5 py-8">
                <h2 className="text-2xl md:text-5xl font-extrabold text-center bg-[linear-gradient(90.95deg,#FFFFFF_51.62%,#245FFF_110.42%)] bg-clip-text text-transparent mb-4">
                  Built for Placement Cells
                </h2>
                <div className='bg-[radial-gradient(ellipse,#245FFF66,transparent_90%)] '>
                    <p className="w-full max-w-4xl mx-auto text-white text-center text-base md:text-xl font-semibold pl-3 pr-3 md:pl-5 md:pr-5">
                      Host Skill-Based Hiring Contests & Reach pre-screened, skill-ranked candidates through branded AI-powered competitions.
                    </p>
                    <div className="relative z-10 w-full max-w-7xl mx-auto px-3 md:pt-12 md:pb-10 pt-10 pb-8">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 ">
                            {builtForPlacementData?.map((data, index) => (
                                <div key={index} className="flex items-center gap-2 bg-white border-blue-700 border-2 rounded-xl px-5 py-4">
                                    <Image src={CheckIcon} alt="check" />
                                    <p className="text-[#245FFF] font-semibold text-lg md:text-2xl">
                                        {data.item}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
