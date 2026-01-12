import Image from 'next/image'
import React from 'react'
import AmazonImage from '@/assets/images/home/trustedBy/amazon.svg'
import AdobeImage from '@/assets/images/home/trustedBy/adobe.svg'
import MetaImage from '@/assets/images/home/trustedBy/meta.svg'
import LinkedinImage from '@/assets/images/home/trustedBy/linkedin.svg'
import IBMImage from '@/assets/images/home/trustedBy/ibm.svg'

export default function TrustedBy() {
  return (
    <div className="backdrop-blur-9 bg-trusted-by rounded-tl-4xl rounded-tr-4xl">
      <div className="mx-auto max-w-7xl px-0 py-8">
        <h2 className="text-sm md:text-base font-bold text-white text-center mb-8">Trusted By</h2>
        <div className='flex items-center justify-between lg:px-14 md:px-10 px-5'>
          <Image src={AmazonImage} alt="Amazon" className='w-12 h-4 md:w-20 md:h-6' priority />
          <Image src={AdobeImage} alt="Adobe" className='w-12 h-4 md:w-20 md:h-6' priority />
          <Image src={MetaImage} alt="Meta" className='w-12 h-4 md:w-20 md:h-6' priority />
          <Image src={LinkedinImage} alt="Linkedin" className='w-12 h-4 md:w-20 md:h-6' priority />
          <Image src={IBMImage} alt="IBM" className='w-12 h-4 md:w-20 md:h-6' priority />
        </div>
      </div>
    </div>
  )
}
