import { Separator } from "@/shared";
import ProfessorsImage from "@/assets/images/campus/realResults/professorsImage.jpg";
import ProfessorImage from "@/assets/images/campus/realResults/professorImage.jpg";
import DirectorImage from "@/assets/images/campus/realResults/directorImage.jpg";
import PlayVideoIcon from "@/assets/images/campus/realResults/playVideoIcon.svg";
import PlayIcon from "@/assets/images/campus/realResults/playIcon.svg";
import QueationIcon from "@/assets/images/campus/realResults/queationIcon.svg";
import Image from 'next/image';

const ResultCard = ({ image, description, name, role, first = false}) => {
    return (
        <div className="relative h-full flex flex-col rounded-[20px] overflow-hidden bg-[#999999] border border-white">
            <div className="relative flex-1">
              <div className="relative h-full rounded-2xl overflow-hidden p-2">
                <div className="relative h-full w-full rounded-2xl overflow-hidden">
                    <Image src={image} alt={name} className="object-cover h-full"/>
                </div>
              </div>

              <div className="absolute top-5 left-4 z-10">
                {first ?<Image src={PlayVideoIcon} alt="video" /> : <Image src={PlayIcon} alt="play" />}
              </div>

                {description && (
                  <div className="absolute bottom-0 left-0 right-0 p-5 ">
                    <div className="absolute rounded-2xl inset-0 bottom-2 left-2 right-2 bg-gradient-to-t from-black/90 to-transparent z-0" />
                    <p className="relative text-white text-base md:text-lg font-semibold leading-snug z-10">
                      {description}
                    </p>
                  </div>
                )}
            </div>

            <div className="relative p-4">
              <Image src={QueationIcon} alt="quote" className="absolute top-4 right-4"/>
                <p className="text-dark font-semibold text-base md:text-text-22">{name}</p>
                <p className="text-[#52597A] md:text-base font-medium text-sm">{role}</p>
            </div>
        </div>
    );
};

export default function RealResults() {
    return (
        <section className="bg-home-product-overview">
            <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-14 py-8">
                <h2 className="text-base md:text-2xl font-bold text-white text-center mb-4">Real Results from Real Campuses</h2>
                <Separator className="bg-separtor-line" />
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 md:mt-14 auto-rows-fr">
                      <ResultCard
                        image={DirectorImage}
                        description="The mock interviews and scorecards helped our final-year students build real-world confidence before entering the job market."
                        name="Name"
                        role="Director, College Name"
                        first
                      />
                      <ResultCard
                        image={ProfessorImage}
                        name="Name"
                        role="Professor, College Name"
                      />
                    <ResultCard
                        image={ProfessorsImage}
                        name="Name"
                        role="Professor, College Name"
                    />
                </div>
            </div>
        </section>
    )
}
