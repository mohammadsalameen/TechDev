import React from 'react'
import Image from 'next/image'
import { FaStar } from 'react-icons/fa'
import { BsStarHalf } from 'react-icons/bs'
interface IProps{
    image : string,
    name : string,
    rating : string,
    description : string
}
const ClientCard = ({image, name, rating, description} : IProps) => {
  return (
    <div className='bg-white shadow-md p-8 flex items-center space-y-4 sm:space-y-0 space-x-6 rounded-lg'>
      <div>
        <Image src={image} alt={name} className='rounded-lg'width={150} height={150} />
      </div>
      <h1 className='text-lg font-bold text-blue-950 '>{name}</h1>
      <div className='text-lg items-center space-x-3'>
        <p className='text-2xl font-bold text-orange-500'>{rating}</p>
        <div className='flex items-center'>
        <FaStar className='w-4 h-4 text-yellow-600'/>
        <FaStar className='w-4 h-4 text-yellow-600'/>
        <FaStar className='w-4 h-4 text-yellow-600'/>
        <BsStarHalf className='w-4 h-4 text-yellow-600'/>
        </div>
      </div>
      <p className='mt-2 text-base text-gray-700 font-medium'>
        {description}
      </p>
    </div>
  )
}

export default ClientCard
