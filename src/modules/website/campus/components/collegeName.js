import Image from "next/image";
import {Avatar,AvatarFallback,AvatarImage,} from "@/components/ui/avatar";
import Marquee from "react-fast-marquee";
import StarIcon from "@/assets/images/campus/collegeName/star.svg";
import {collegeData} from "@/assets/mockData";

const TestimonialCard = ({ name, role, image, rating, text }) => {
  return (
    <div className="h-full rounded-2xl bg-white p-6 shadow-[0_10px_40px_rgba(0,0,0,0.15)] flex flex-col">
      <div className="flex gap-4 mb-4">
        <Avatar className="h-12 w-12 shrink-0">
          <AvatarImage src={image?.src} alt={name} />
          <AvatarFallback>{name?.[0]}</AvatarFallback>
        </Avatar>
        <div className={`flex-1 flex ${role ? "flex-col" : "items-center"}`}>
          <div className="flex items-center justify-between w-full">
            <p className="font-semibold md:text-xl text-base">{name}</p>

            <div className="flex gap-1 shrink-0">
              {Array.from({ length: rating }).map((_, i) => (
                <Image key={i} src={StarIcon} alt="star"/>
              ))}
            </div>
          </div>

          {role && (
            <p className="text-sm md:text-base font-medium text-[#52597A]">{role}</p>
          )}
        </div>
      </div>
      {/* Divider Line  */}
      <div className="h-px w-full bg-[#E5E7EB] mb-4" />
      
      <p className="text-sm font-medium md:text-lg text-[#52597A] leading-tight">{text}</p>
    </div>
  );
};

export default function CollegeName() {
  return (
    <section className="bg-home-product-overview overflow-hidden">
      <div className="mx-auto max-w-7xl px-5 md:px-10 lg:px-0 py-4">
        <div className="relative">
          {/* LEFT GRADIENT */}
          <div className="pointer-events-none absolute left-0 top-0 h-full md:w-12 w-6 z-10 bg-[linear-gradient(97.87deg,#081225_1%,rgba(8,18,37,0)_98%)]" />
          {/* RIGHT GRADIENT */}
          <div className="pointer-events-none absolute right-0 top-0 h-full md:w-12 w-6 z-10 bg-[linear-gradient(287.87deg,#081225_1%,rgba(8,18,37,0)_98%)]" />
          
          <Marquee speed={40} gradient={false}>
            {collegeData.map((item) => (
              <div key={item.id} className="px-3 w-[300px] md:w-[360px] lg:w-[420px]">
                <TestimonialCard {...item} />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
