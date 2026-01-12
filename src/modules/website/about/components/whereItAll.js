import { Separator } from '@/shared'
import Image from 'next/image'
import {whereItAllData} from "@/assets/mockData";

const TimelineItem = ({ year, title, icon, position }) => {
  const isTop = position === 'top'

  return (
    <div className="relative flex flex-col items-center">
      {/* DESKTOP CONNECTORS */}
      <div className={`hidden md:block absolute ${isTop ? '-top-35' : '-bottom-30'} left-1/2 -translate-x-1/2`}>
        <div className="relative">
          {/* Vertical line */}
          <div className={`absolute left-0 ${isTop ? 'top-0' : 'bottom-0'} w-[0.5px] h-40 bg-[#245FFFE0]`} />
          {/* Horizontal line */}
          <div className={`absolute ${isTop ? 'top-0' : 'bottom-0'} w-4 h-[0.5px] bg-[#245FFFE0] ${!isTop ? 'md:right-0 md:left-auto' : 'md:left-0'} lg:left-0 lg:right-auto`} />
          {/* Dot */}
          <div className={`absolute ${isTop ? '-top-1' : '-bottom-1'} size-2 rounded-full bg-[#245FFFE0] ${!isTop ? 'md:right-4 md:left-auto' : 'md:left-4'} lg:left-4 lg:right-auto`} />

          <div className={`absolute w-48 ${isTop ? '-top-10' : '-bottom-27'} ${!isTop ? 'md:right-10 md:text-right' : 'md:left-10 md:text-left'} lg:left-10 lg:right-auto lg:text-left`}>
           <p className="text-brand-blue font-bold md:text-text-28">
             {year}
           </p>
           <p className="font-medium md:text-xl mt-1">{title}</p>
          </div>
        </div>
      </div>

      <div className="size-20 rounded-full bg-white flex items-center justify-center shadow-[0_0_30px_rgba(36,95,255,0.6)] z-10">
        <Image src={icon} alt={title} />
      </div>

      {/* MOBILE CONTENT */}
      <div className="md:hidden mt-10 mb-10 text-center px-6">
        <p className="text-brand-blue font-bold text-xl">{year}</p>
        <p className="text-base font-medium mt-1">{title}</p>
      </div>
    </div>
  )
}


export default function WhereItAll() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-14 py-8">
        <h2 className="text-base md:text-2xl font-bold text-black text-center mb-4">Where It All Started</h2>
        <Separator className="bg-separtor-line" />

        <div className="mt-5">
           <p className="font-medium text-base md:text-lg lg:text-xl text-center lg:px-60">
            Born out of frustration with outdated hiring practices and lack of job-readiness tools, we
              created a platform where skills take center stage. What started as a simple test platform
              is now used by thousands of candidates, colleges, and employers.
          </p>
        </div>

        {/* Background Image */}
        <div className="absolute inset-0 opacity-20 pointer-events-none top-60">
          <div className="w-full h-full bg-[url('@/assets/images/home/successStory/backgroundMap.svg')] bg-no-repeat bg-cover bg-center" />
        </div>

        <div className="relative mt-20 mb-10 md:mt-62 md:mb-62 lg:px-0 px-2">
          {/* Desktop horizontal line */}
          <div className="absolute top-10 left-0 right-0 h-px bg-blue-200 hidden md:block" />
          {/* Mobile vertical line */}
          <div className="absolute top-0 bottom-25 left-1/2 w-px bg-blue-200 -translate-x-1/2 md:hidden" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 relative">
            {whereItAllData.map((item, index) => (
              <TimelineItem key={index} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
