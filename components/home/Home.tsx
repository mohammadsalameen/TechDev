import React from 'react'
import Hero from './hero/Hero'
import About from './about/About'
import Feature from './feature/Feature'
import Service from './services/Service1'

const Home = () => {
  return (
    <div className='overflow-hidden h-[10000px]'>
      <Hero/>
      <About/>
      <Feature/>
      <Service/>
    </div>
  )
}

export default Home
