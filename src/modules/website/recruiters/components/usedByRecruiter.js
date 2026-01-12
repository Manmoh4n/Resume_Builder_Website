import React from "react"
import Marquee from "react-fast-marquee"
import Image from "next/image"
import AirBnbLogo from '@/assets/images/recruiter/usedBy/Airbnb.svg'
import AdobeLogo from '@/assets/images/recruiter/usedBy/Adobe.svg'
import AirtableLogo from '@/assets/images/recruiter/usedBy/Airtable.svg'
import AmazonLogo from '@/assets/images/recruiter/usedBy/Amazon.svg'
import AmplitudeLogo from '@/assets/images/recruiter/usedBy/Amplitude.svg'
import AnimaLogo from '@/assets/images/recruiter/usedBy/Anima.svg'
import AtlassianLogo from '@/assets/images/recruiter/usedBy/Atlassian.svg'
import Auth0Logo from '@/assets/images/recruiter/usedBy/Auth0.svg'
import StackLogo from '@/assets/images/recruiter/usedBy/Better-Stack.svg'
import BitbucketLogo from '@/assets/images/recruiter/usedBy/Bitbucket.svg'
import BubbleLogo from '@/assets/images/recruiter/usedBy/Bubble.svg'
import AvoLogo from '@/assets/images/recruiter/usedBy/Avo.svg'

const logoRow1 = [
    AirBnbLogo,
    AdobeLogo,
    AirtableLogo,
    AmazonLogo,
    AmplitudeLogo,
    AnimaLogo
]

const logoRow2 = [
    AtlassianLogo,
    Auth0Logo,
    StackLogo,
    BitbucketLogo,
    BubbleLogo,
    AvoLogo
]

export default function UsedByRecruiter() {
    return (
        <section className="">
            <div className="max-w-7xl mx-auto lg:px-0 md:px-10 px-5 lg:pt-14 lg:pb-16 md:pt-14 md:pb-12 pt-18 pb-10">
                <div className="grid grid-cols-12 items-center">
                    <div className="lg:col-span-3 md:col-span-4 col-span-12 relative pl-16">
                        <div className="absolute inset-0 -top-20 -left-4 pointer-events-none">
                            <div className="w-40 h-60 bg-[url('@/assets/images/recruiter/usedBy/wizard.svg')] bg-no-repeat bg-contain" />
                        </div>
                        <h3 className="text-2xl font-medium text-black">
                            Used by
                        </h3>
                        <h3 className="text-2xl font-medium text-black mt-2">
                            <span className="text-3xl font-extrabold text-brand-blue">1000+</span> recruiters.
                        </h3>
                    </div>
                    <div className="lg:col-span-9 md:col-span-8 col-span-12 mt-24 lg:mt-0 md:mt-0">
                        {/* Row 1 */}
                        <Marquee speed={80} gradient={true}>
                            {logoRow1.map((logo, i) => (
                                <Logo key={i} src={logo} />
                            ))}
                        </Marquee>

                        {/* Row 2 */}
                        <Marquee speed={80} gradient={true} className="mt-12">
                            {logoRow2.map((logo, i) => (
                                <Logo key={i} src={logo} />
                            ))}
                        </Marquee>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Logo({ src }) {
    return (
        <div className="mx-10 flex items-center">
            <Image
                src={src}
                alt="brand logo"
                className="transition"
            />
        </div>
    )
}
