import Link from 'next/link'
import React from 'react'
import { appDetails } from '../constants/appDetails'

const Hero = () => {
  return (
    <section className="bg-white dark:bg-gray-800 p-5 shadow-lg">
    <div className="grid lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">
                {appDetails.APP_HERO_HEADING}
            </h1>

            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-200">
                {appDetails.APP_HERO_PARAGRAPH}
            </p>
            <Link href={"contact"}  className="inline-flex items-center justify-center px-5 py-3 m-3 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900" >
                Get in touch
                <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
            </Link>

            {/* <Link href="/contact" className="inline-flex items-center justify-center px-5 py-3 m-3 text-base font-medium text-center text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Get in touch
            </Link>  */}

        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            {/* <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="mockup"/> */}
            {/* <img src="/code_snippet.png" alt="mockup"/> */}
            <img className='linear-gradient(to right, rgb(0, 0, 0), rgb(14, 165, 233), rgb(159, 18, 57))'          src="/pexels.jpg" alt="mockup"/>


        </div>                
    </div>
</section>
  )
}

export default Hero