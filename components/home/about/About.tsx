import React from 'react'
import Image from 'next/image'
import BoxText from '@/components/helper/BoxText'

const About = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 items-center'>
        {/* Image Content  */}
        <div>
            <Image data-aos = 'zoom-in' data-aos-anchor-placement = 'top-center' src='/images/about.png' alt='about' width={600} height={600}/>
        </div>
        {/* Text Content  */}
        <div>
            <BoxText>About Us</BoxText>
            <h1 className='mt-4 text-2xl font-bold text-gray-900 sm:text-3xl leading-[2.5rem] sm:leading-[3rem]'>Everything You Need To Grow Your Business</h1>
            <p className='mt-3 leading-relaxed text-sm sm:text-base text-gray-700'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam nemo dolore nesciunt molestias sit. Voluptates hic, itaque deleniti cumque harum similique architecto? Rerum, nobis accusantium.</p>
            <button className='mt-5 text-[#f68967] pb-1 border-b-2'>Learn More  </button>
            <div className='mt-8 border-l-2 border-gray-200'>
                <div className='ml-6'>
                    <p className='text-gray-700 font-medium'>
                    &quot; The many integrations that can be linked really help me see data from other tools I also use. &quot;
                    </p>
                    <div className='flex items-center mt-6 space-x-2'>
                        <Image src='/images/u1.jpg' alt='user' width={40} height={40} className='rounded-full' />
                        <div>
                            <p className='font-medium'>Jessica Doe</p>
                            <p className='text-gray-700 text-sm'>Web Developer @TechDev</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>  
      </div>
    </div>
  )
}

export default About
