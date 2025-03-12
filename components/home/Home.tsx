import React from 'react'
import Hero from './hero/Hero'
import About from './about/About'
import Feature from './feature/Feature'
import Service from './services/Service1'
import ClientReview from './clientReview/ClientReview'
import Team from './team/Team'
import Pricing from './pricing/Pricing'

const Home = () => {
  return (
    <div className='overflow-hidden h-full'>
      <Hero/>
      <About/>
      <Feature/>
      <Service/>
      <ClientReview/>
      <Team/>
      <Pricing/>
    </div>
  )
}

export default Home
