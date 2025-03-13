import ClientCard from '@/components/helper/ClientCard'
import { clients } from '@/constants/constant'
import React from 'react'

const ClientReview = () => {
  return (
    <div className='pt-16 pb-16 bg-gray-100'>
      <h1 className='text-center font-bold text-blue-950 text-2xl'>What Our Happy Client Says</h1>
      <p className='text-center text-gray-700 mt-3 w-[90%] mx-auto sm:w-[70%] md:w-[50%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus magnam pariatur commodi maiores consequuntur a.</p>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 items-center mt-16 w-[80%] mx-auto'>
        <div data-aos = 'zoom-in' data-aos-anchor-placement = 'top-center'>
        {
            clients.map((client, index) =>(
                <ClientCard key={index} image={client.image} name={client.name} rating={client.rating} description={client.description}/>
            ))
        }
        </div>
      </div>
    </div>
  )
}

export default ClientReview
