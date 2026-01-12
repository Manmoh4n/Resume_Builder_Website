import Image from 'next/image'
import React from 'react'
import WistiaImage from '@/assets/images/recruiter/clients/Wistia.svg'
import VideoaskImage from '@/assets/images/recruiter/clients/Videoask.svg'
import UberImage from '@/assets/images/recruiter/clients/Uber.svg'
import SpotifyImage from '@/assets/images/recruiter/clients/Spotify.svg'
import SalesforceImage from '@/assets/images/recruiter/clients/Salesforce.svg'
import SendInBlueImage from '@/assets/images/recruiter/clients/Sendinblue.svg'

export default function HiringPartners() {
    return (
        <section className="">
            <div className="mx-auto max-w-7xl px-0 py-8">
                <h2 className="text-sm md:text-lg font-bold text-white text-center mb-8">Our Hiring Partner</h2>
                <div className='flex items-center flex-wrap justify-between lg:px-14 md:px-10 px-5 gap-y-10'>
                    <Image src={WistiaImage} alt="WistiaImage" />
                    <Image src={VideoaskImage} alt="VideoaskImage" />
                    <Image src={UberImage} alt="UberImage" />
                    <Image src={SpotifyImage} alt="SpotifyImage" />
                    <Image src={SalesforceImage} alt="SalesforceImage" />
                    <Image src={SendInBlueImage} alt="SendInBlueImage" />
                </div>
            </div>
        </section>
    )
}
