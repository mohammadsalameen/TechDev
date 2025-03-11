import PricingCard from '@/components/helper/PricingCard'
import { prices } from '@/constants/constant'
import React from 'react'

const Pricing = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
        <h1 className='text-center text-blue-950 font-bold text-2xl'>Choose The Plan That&apos;s Right For You</h1>
        <p className='mt-3 text-center font-medium text-gray-700 w-[90%] sm:w-[70%] md:w-[50%] mx-auto'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magnam pariatur commodi maiores consequuntur a.</p>
       <div className='w-[80%] mx-auto mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-center'>
        {
            prices.map((item, index) =>(
                <PricingCard key={index} time={item.time} description={item.description} price={item.price}/>
            )) 
        }
       </div>
    </div>
  )
}

export default Pricing
