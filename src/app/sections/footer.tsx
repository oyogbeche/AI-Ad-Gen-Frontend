import Image from 'next/image'
import React from 'react'
import footerLogo from "@/components/images/footerLogo.svg"

const footer = () => {
  return (
    <section className='mx-[80px] my-[78px] flex justify-center items-center bg-white'>
        <div className='flex flex-col'>
        <Image src={footerLogo} alt="footerlogo" />
        <p>Smarter Ads, Faster Results</p>
        </div>
    </section>
  )
}

export default footer
