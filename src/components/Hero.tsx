import { ReactTyped } from "react-typed";

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>

        <p className='text-brand font-bold p-2'>GROWING WITH DATA ANALYTICS</p>
        <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>GROW WITH DATA</h1>
        <div className='md:text-5xl sm:text-4xl text-xl font-bold flex justify-center items-center py-4'>
            <p>Fast, flexible financing for  </p>

            <ReactTyped strings={['BTB', 'BTC', 'SASS']} typeSpeed={120} backSpeed={130} loop className='md:pl-4 pl-2 text-gray-500' />
            
        </div>

        <p className='md:text-2xl text-xl font-bold text-gray-500'>Monitor your data analytics to increase revenue for BTB, BTC, & SASS platforms.</p>
        <button className='bg-brand w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button>
      </div>
    </div>
  )
}



export default Hero
