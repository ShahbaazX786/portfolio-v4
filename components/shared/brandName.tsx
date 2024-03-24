import Image from "next/image";

const BrandNameComponent = () => {
  const firstName = "Shahbaaz"
  const lastName = "Alam"
  return (
    <div className='flex flex-row justify-center items-center py-4 px-2 tracking-wide'>
      <Image src={'/images/BrandLogo.png'} alt={'Shahbaaz\'s Brand Logo'} quality={100} priority width={100} height={100} className='h-12 w-16 rounded-full bg-transparent object-cover mr-1' />
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