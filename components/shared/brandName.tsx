const BrandNameComponent = () => {
  const firstName = "Shahbaaz"
  const lastName = "Alam"
  return (
    <div className='flex flex-row py-4 px-2 tracking-wide'>
      {animateName(firstName)}
      &nbsp;
      {animateName(lastName)}
    </div>
  )
}

export const animateName = (name: string) => (
  Array.from(name).map((letter, index) => (
    <span key={index} className='drop-shadow-lg text-black font-bold text-2xl hover:-translate-y-2 hover:scale-110 transition-all ease-out cursor-pointer'>
      {letter}
    </span>
  ))
);

export default BrandNameComponent;