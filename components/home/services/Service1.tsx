import BoxText from '@/components/helper/BoxText'
import FeatureBox from '@/components/helper/FeatureBox'
import {services } from '@/constants/constant'
import React from 'react'
import Image from 'next/image'

const Service = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto'>
        <BoxText>Our Services</BoxText>
        <h1 className='mt-4 text-2xl md:text-3xl font-bold text-gray-800'>Our Service Made for you ? </h1>
        <p className='mt-4 w-full sm:w-[80%] md:w-[70%] lg:w-[60%] xl:w-[50%] text-gray-600'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati veniam quos a facere saepe cum!
        </p>
        {/* grid  */}
        <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
              {
                services.map((service, index) => (
                  <FeatureBox key={index} icon={service.icon} title={service.title} description={service.description}/>
                ))
              }
          </div>
          <div>
            <Image src = 'https://cdn.pixabay.com/photo/2015/11/03/08/56/service-1019821_1280.jpg' alt='service' width={900} height={900}/>
          </div>  
        </div>
      </div>
    </div>
  )
}

export default Service
