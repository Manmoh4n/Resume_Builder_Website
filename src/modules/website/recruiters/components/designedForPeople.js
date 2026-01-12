import { Separator } from '@/shared'
import NameImage from "@/assets/images/recruiter/designedForPeople/nameImage.svg";
import AirtableImage from "@/assets/images/recruiter/designedForPeople/airtableImage.svg";
import AirtableIcon from "@/assets/images/recruiter/designedForPeople/airtableIcon.svg";
import PlayIcon from "@/assets/images/recruiter/designedForPeople/playIcon.svg";
import AmplitudeImage from "@/assets/images/recruiter/designedForPeople/amplitudeImage.svg";
import AmplitudeIcon from "@/assets/images/recruiter/designedForPeople/amplitudeIcon.svg";
import AsanaIcon from "@/assets/images/recruiter/designedForPeople/asanaIcon.svg";
import LoremIcon from "@/assets/images/recruiter/designedForPeople/loremIcon.svg";
import LoremImage from "@/assets/images/recruiter/designedForPeople/loremImage.svg";
import BitbucketIcon from "@/assets/images/recruiter/designedForPeople/bitbucketIcon.svg";
import BackgroundImage from "@/assets/images/recruiter/designedForPeople/backgroundImage.svg";
import Image from 'next/image';

export default function DesignedForPeople() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl lg:px-0 md:px-10 px-5 lg:py-8 py-6">
        <h2 className="text-base md:text-2xl font-bold text-dark-blue text-center mb-4">Designed for people who care about effective hiring</h2>
        <Separator className="bg-separtor-line mx-auto w-50" />
        <div className="relative overflow-hidden lg:mt-14 mt-8">
          <div className="grid grid-cols-12 lg:grid-cols-12 gap-2 md:gap-4 auto-rows-fr">
            {/* Name Card */}
            <div className="relative bg-[#F5F9FF] md:col-span-5 col-span-7 flex flex-col justify-between p-4 rounded-xl h-full">
              <Image src={BackgroundImage} alt="background" priority className="absolute left-0 bottom-0 z-0 opacity-10" />
              <p className="font-medium text-xs md:text-base md:leading-tight leading-none">
                hendrerit nec venenatis nec tincidunt In eget lorem. Ut nec faucibus nisl. tortor. ex viverra gravida ex. fringilla ipsum non. at urna commodo sed Sed quis id hendrerit nec venenatis nec tincidunt In eget lorem. Ut nec faucibus nisl. tortor. ex viverra gravida ex. fringilla ipsum non. at urna commodo sed Sed quis id
              </p>
              <div className="flex items-center gap-3">
                <Image src={NameImage} alt="user" className="rounded-sm lg:w-15 lg:h-15 w-10 h-10" priority />
                <div>
                  <p className="font-semibold text-sm md:text-text-22">Name</p>
                  <p className="font-medium text-xs md:text-base text-[#08122280]">Technical Recruiter - Company</p>
                </div>
              </div>
            </div>

            {/* Airtable Card*/}
            <div className="md:col-span-3 col-span-5 h-full">
              <div className='relative h-full rounded-xl overflow-hidden'>
                <Image src={AirtableImage} alt='airtable' className='w-full h-full object-cover' priority />
                <div className="absolute top-3 left-3 z-10">
                  <Image src={AirtableIcon} alt="Airtable" />
                </div>
                <div className="absolute bottom-3 left-3 z-10">
                  <Image src={PlayIcon} alt="Play Icon" />
                </div>
              </div>
            </div>

            {/* Amplitude Card */}
            <div className="bg-[#617cc640] md:col-span-4 col-span-6 flex flex-col justify-between p-2 rounded-xl h-full">
              <div className='relative'>
                <Image src={AmplitudeImage} alt='Amplitude Image' priority />
                <div className="absolute top-3 left-3 z-10">
                  <Image src={AmplitudeIcon} alt="Amplitude Icon" />
                </div>
              </div>
              <div>
                <p className='font-bold text-sm md:text-text-22'>Amplitude</p>
                <p className='font-medium text-xs md:text-text-26'>10+ Hours Saved Per Recruiter Per week</p>
              </div>
            </div>

            {/* Asana Card */}
            <div className="bg-[#F5F9FF] md:col-span-3 col-span-6 flex flex-col justify-between p-4 rounded-xl h-full">
              <Image src={AsanaIcon} alt="Amplitude Icon" className='lg:w-12 lg:h-12 w-6 h-6' />
              <div>
                <p className='font-bold text-sm md:text-text-22'>Asana</p>
                <p className='font-medium text-xs md:text-text-26'>48% Decrease in Interview Per Hire</p>
              </div>
            </div>

            {/* Lorem Card */}
            <div className="md:col-span-3 col-span-4 h-full">
              <div className='relative h-full rounded-xl overflow-hidden'>
                <div className='bg-[linear-gradient(180deg,_rgba(0,0,0,0)_0%,_rgba(0,0,0,0.6)_100%)] absolute bottom-0 left-0 w-full h-26 z-1' />
                <Image src={LoremImage} alt='airtable' className='w-full h-full object-cover' priority />
                <div className="absolute top-3 left-3 z-10">
                  <Image src={LoremIcon} alt="Airtable" className='lg:w-12 lg:h-12 w-6 h-6' />
                </div>
                <div className="absolute bottom-3 left-3 z-10 text-white">
                  <p className='font-bold text-sm md:text-text-26'>Lorem Ipsum</p>
                  <p className='font-normal text-xs md:text-text-22'>Airbnb Team</p>
                </div>
              </div>
            </div>

            {/* Bitbucket Card */}
            <div className="bg-[#F5F9FF] md:col-span-3 col-span-4 flex flex-col justify-between p-4 rounded-xl h-full">
              <Image src={BitbucketIcon} alt="Bitbucket Icon" />
              <div>
                <p className='font-bold text-sm md:text-text-22'>Bitbucket</p>
                <p className='font-medium text-xs md:text-text-26'>10+ Hours Saved Per Recruiter Per week</p>
              </div>
            </div>

            {/* Technical Card */}
            <div className="bg-[#F5F9FF] md:col-span-3 col-span-4 flex flex-col justify-between p-4 rounded-xl h-full">
              <p className="font-medium text-xs md:text-base leading-tight">
                hendrerit nec venenatis nec tincidunt In eget lorem. Ut nec faucibus nisl. tortor. ex viverra gravida ex. fid
              </p>
              <div>
                <p className="font-semibold text-sm md:text-text-22">Name</p>
                <p className="font-medium text-xs md:text-base text-[#08122280]">Technical Recruiter - Company</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
