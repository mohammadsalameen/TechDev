import React from 'react'

const Footer = () => {
  return (
    <div className='pt-16 pb-16'>
      <div className='w-[80%] mx-auto items-start grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10'>
        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Solution</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Enterprise</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>By Work Flow</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>By Team</p>
        </div>

        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Company</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>About Us</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>News & Press</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Our Customer</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Leadership</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Careers</p>
        </div>

        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Resources</h1>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Blog</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Webinar & Events</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>Podcast</p>
            <p className='text-gray-800 font-medium cursor-pointer text-sm hover:text-blue-950'>E-book & Guides</p>
        </div>

        <div className='space-y-5'>
            <h1 className='text-lg font-bold'>Contact Us</h1>
            <div className='mt-6'>
                <h1 className='text-sm text-gray-600'>Mobile Number</h1>
                <h1 className='text-base font-bold text-blue-950 mt-1'> +972568541413</h1>
            </div>
            <div className='mt-6'>
                <h1 className='text-sm text-gray-600'>Email</h1>
                <h1 className='text-base font-bold text-blue-950 mt-1'>mohammadsalameen.02@gmail.com</h1>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
