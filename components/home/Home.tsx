'use client'
import React, { useEffect } from 'react'
import Hero from './hero/Hero'
import About from './about/About'
import Feature from './feature/Feature'
import Service from './services/Service1'
import ClientReview from './clientReview/ClientReview'
import Team from './team/Team'
import Pricing from './pricing/Pricing'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() =>{
    const initAOS = async () =>{
      await import('aos');
      AOS.init({
        duration : 1000,
        easing : 'ease',
        once : true,
        anchorPlacement : 'top-bottom'
      })
    }
    initAOS();
  }, [])
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
