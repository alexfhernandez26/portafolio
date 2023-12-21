
"use client";
import Image from 'next/image'
import React from 'react'
import { HiArrowDown } from 'react-icons/hi'
import { Link } from 'react-scroll/modules';
const HeroSection = () => {
  return (
    <section id='home'>
      <div className='flex flex-col text-center items-center justify-center my-10 py-16 md:flex-row md:space-x-4 md:text-left md:py-32 md:py-52'>
        <div className='mt-2 md:w-1/2'>
          <Image 
            src="/Alex.jpg" 
            alt="Picture of the author"
            width={325} 
            height={325} 
            className='rounded-full shadow-2xl'
          />
        </div>
        <div className='mt-2 md:w-3/5'>
          <h1 className='text-4xl font-bold mt-6  md:mt-0 md:text-6xl'>Hi, I'm Fernando!</h1>
          <p className='text-lg mt-4 mb-6 md:text-2xl'>I'm a <span className='font-bold text-teal-600'>Software Engineer</span>  based in Santo Domingo, DR. 
            Working towards creating software that makes life easier and more meaningful.</p>
            <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Projects
          </Link>
        </div>
      </div>
      <div className='flex flex-row justify-center'>
      <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection