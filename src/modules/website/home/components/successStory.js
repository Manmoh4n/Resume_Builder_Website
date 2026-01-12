import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Separator } from "@/shared";
import DummyPerson1 from "@/assets/images/home/successStory/DummyPerson1.jpg";
import DummyPerson2 from "@/assets/images/home/successStory/DummyPerson2.jpg";
import DummyPerson3 from "@/assets/images/home/successStory/DummyPerson3.jpg";
import DummyCompanyLogo from "@/assets/images/home/successStory/DummyCompanyLogo.svg";
import { Carousel, CarouselContent, CarouselItem, } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import storiesData from "@/assets/json/successStories.json";

const Dummy_Images = {
  person1: DummyPerson1,
  person2: DummyPerson2,
  person3: DummyPerson3,
  company: DummyCompanyLogo,
};

export default function SuccessStory() {
  const [api, setApi] = useState(null);
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick = (index) => {
    if (api && index !== activeIndex) {
      api.scrollTo(index);
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    if (!api) return;
    api.scrollTo(1);
    setActiveIndex(1);

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section className="relative">
      <div className="relative mx-auto max-w-5xl px-5 lg:py-14 py-8 text-white">
        <h2 className="text-base md:text-2xl font-bold text-center mb-4">Success Story</h2>
        <Separator className="bg-separtor-line mx-auto" />
        <div className="absolute inset-0 opacity-40 pointer-events-none top-20">
          <div className="w-full h-full bg-[url('@/assets/images/home/successStory/backgroundMap.svg')] bg-no-repeat bg-cover bg-top-center" />
        </div>
        <Carousel setApi={setApi} plugins={[Autoplay({ delay: 3000, }),]} opts={{ align: "center", loop: true, }} className="relative z-10 mt-8 md:mt-14">
          <CarouselContent className="flex items-center">
            {storiesData.stories.map((item, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/3">
                <div className={`flex flex-col items-center text-center gap-0 px-4 transition-all duration-500 ${activeIndex === index ? "opacity-100 scale-100" : "opacity-30 scale-90"}`} onClick={() => handleClick(index)}>
                  <div className="w-23 h-23 rounded-full overflow-hidden mb-4">
                    <Image src={Dummy_Images[item.image]} alt={item.name} className="object-cover" />
                  </div>
                  {activeIndex === index ? (
                    <div>
                      <div className="flex flex-col items-center text-center">
                        <p className="font-bold text-xs md:text-xl">{item.name}</p>
                        <p className="text-[9px] md:text-sm font-normal opacity-90">{item.role}</p>
                        <div className="mb-6 mt-4">
                          <Image src={Dummy_Images[item.company]} alt="company" />
                        </div>
                      </div>
                      <div className="md:max-w-3xl md:w-3xl w-full mx-auto">
                        <p className="text-base md:text-xl font-semibold text-white leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ) : (
                    <div className="h-50" />
                  )}
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
}