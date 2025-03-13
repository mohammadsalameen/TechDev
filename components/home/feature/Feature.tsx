import React from 'react'
import Image from 'next/image'
import FeatureBox from '@/components/helper/FeatureBox'
import { features1 } from '@/constants/constant';

const Feature = () => {
    return (
      <div className="bg-gray-100 pt-16 pb-16">
        {/* Title and Description */}
        <div>
          <h1 className="text-center text-2xl text-blue-950 font-bold">Key Features Of The Product</h1>
          <p className="mt-3 font-medium text-center text-gray-700 w-[90%] mx-auto sm:w-[70%] md:w-[50%]">
            Our product stands out with its high performance, delivering blazing-fast speeds and seamless multitasking.
          </p>
        </div>
  
        {/* Main Grid */}
        <div className="w-[80%] mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Features Grid */}
          <div data-aos = 'zoom-in' data-aos-anchor-placement = 'top-center' className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {features1.map((feature, index) => (
              <FeatureBox 
                key={index}
                icon={feature.icon} 
                title={feature.title} 
                description={feature.description} 
              />
            ))}
          </div>
          {/* Image Content */}
          <div>
            <Image data-aos = 'fade-left' data-aos-anchor-placement = 'top-center' data-aos-delay='300' src="/images/f1.png" alt="feature" width={700} height={700} />
          </div>
        </div>
      </div>
    );
  }
  
  export default Feature;

