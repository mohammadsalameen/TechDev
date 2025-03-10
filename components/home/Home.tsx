import React from 'react'
import Hero from './hero/Hero'
import About from './about/About'

const Home = () => {
  return (
    <div className='overflow-hidden h-[10000px]'>
      <Hero/>
      <About/>
    </div>
  )
}

export default Home
