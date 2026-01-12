import Image from 'next/image'
import React from 'react'
import WistiaImage from '@/assets/images/recruiter/clients/Wistia.svg'
import VideoaskImage from '@/assets/images/recruiter/clients/Videoask.svg'
import UberImage from '@/assets/images/recruiter/clients/Uber.svg'
import SpotifyImage from '@/assets/images/recruiter/clients/Spotify.svg'
import SalesforceImage from '@/assets/images/recruiter/clients/Salesforce.svg'
import SendInBlueImage from '@/assets/images/recruiter/clients/Sendinblue.svg'

export default function RecruiterClients() {
  return (
    <div className="w-full h-full bg-[url('@/assets/images/recruiter/clients/client-bg.svg')] bg-no-repeat bg-cover bg-center lg:mt-8 mt-0">
      <div className="mx-auto max-w-7xl px-0 lg:py-26 md:py-16 py-12">
        <div className='flex items-center flex-wrap justify-between lg:px-14 md:px-10 px-5 gap-y-10'>
          <Image src={WistiaImage} alt="WistiaImage" />
          <Image src={VideoaskImage} alt="VideoaskImage" />
          <Image src={UberImage} alt="UberImage" />
          <Image src={SpotifyImage} alt="SpotifyImage" />
          <Image src={SalesforceImage} alt="SalesforceImage" />
          <Image src={SendInBlueImage} alt="SendInBlueImage" />
        </div>
      </div>
    </div>
  )
}
