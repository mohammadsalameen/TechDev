'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowUp } from 'react-icons/fa';
const ScrollToTop = () => {
    const [visible, setVisible] = useState(false);
    //show button
    useEffect(() =>{
        const toggleVisibility = () =>{
            if(window.scrollY > 300){
                setVisible(true);
            }else{
                setVisible(false)
            }
        }
        window.addEventListener('scroll', toggleVisibility);
    }, []);

    //scroll to top
    const scrollToTop = () =>{
        window.scrollTo({
            top : 0,
            behavior : 'smooth'
        });
    }
    return (
    <div className='fixed bottom-4 animate-pulse right-4'>
      {
        visible && (
            <button onClick={scrollToTop} className='bg-orange-500 cursor-pointer text-white rounded-full w-12 h-12 flex items-center justify-center focus:outline-none'>
                <FaArrowUp/>
            </button>
        )
      }
    </div>
  )
}

export default ScrollToTop
