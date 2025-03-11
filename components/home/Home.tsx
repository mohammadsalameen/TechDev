import React from 'react'
import Hero from './hero/Hero'
import About from './about/About'
import Feature from './feature/Feature'
import Service from './services/Service1'
import ClientReview from './clientReview/ClientReview'
import Team from './team/Team'

const Home = () => {
  return (
    <div className='overflow-hidden h-[10000px]'>
      <Hero/>
      <About/>
      <Feature/>
      <Service/>
      <ClientReview/>
      <Team/>
    </div>
  )
}

export default Home
