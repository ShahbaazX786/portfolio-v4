import React from 'react'

const BrandNameComponent = () => {
    const name = "SHAHBAAZ-ALAM"
    const NameArray = Array.from(name);
  return (
    <div className='flex flex-row py-4 px-2 tracking-wide'>
        {NameArray.map((letter, index)=>(
          <span key={index} className='drop-shadow-lg text-black font-bold text-3xl hover:-translate-y-2 hover:scale-110 transition-all ease-linear cursor-pointer'>{letter}</span>
        ))}
    </div>
  )
}

export default BrandNameComponent;