import React from 'react'

interface IProps{
    children : React.ReactNode;
}
//Reusable Component 
const BoxText = ({children} : IProps) => {
  return (
    <h1 className='border-2 px-4 w-fit rounded-lg bg-gray-100 py-1 text-[#f68967] font-bold'>{children}</h1>
  )
}

export default BoxText
