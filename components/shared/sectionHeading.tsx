import React from 'react'

const SectionHeading = ({ heading }: string | any) => {
  return (
    <h1 className='capitalize text-5xl font-extrabold mb-10 xxs:mb-2 xs:mb-5 text-center first-letter:text-6xl first-letter:text-[#00d4ff] leading-6 tracking-wider'>{heading}</h1>
  )
}

export default SectionHeading;