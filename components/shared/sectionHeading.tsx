import React from 'react'

const SectionHeading = ({heading}:string | any) => {
  return (
      <h1 className='uppercase text-2xl font-extrabold mb-10 xxs:mb-2 xs:mb-5 text-center'>{heading}</h1>
  )
}

export default SectionHeading;