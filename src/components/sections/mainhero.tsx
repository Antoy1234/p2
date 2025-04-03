

import { Button, Card, Image, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Navbar, NavbarBrand, NavbarContent, NavbarItem, useDisclosure } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'
import { FaInstagram } from "react-icons/fa";
import { CiMail, CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import { LuText } from "react-icons/lu";
import { motion } from "framer-motion"
import '../gradients.css'
import '../hero.css'
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FiDownload } from "react-icons/fi";
import DiamondCursor from './diamondCursor';

import { Jura } from 'next/font/google'
import { IoIosMenu, IoMdClose } from 'react-icons/io'
const jura = Jura({
    weight: '400',
    subsets: ['latin'],

})


export default function MainHero({
    language = "en"
}: {
    language?: String
}) {
    const [isScrollAtTop, setIsScrollAtTop] = useState(true);
    const [selectedPage, setSelectedPage] = useState('#Home')


    const [navBarOpen, setNavbarOpen] = useState(false)


    function goToPage(page: string): void {
        setSelectedPage(page)
        document.querySelector(page)?.scrollIntoView({ behavior: 'smooth' });
    }



    return (
        <div id='' className='flex flex-col  items-center  md:min-h-[1080px] h-full gridbg space-y-2 w-full relative'>
        <motion.div id='' className='flex flex-col justify-center items-center  bg-[#080b14] max-h-[1080px] h-[100vh] space-y-2 w-full relative'
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '100%', opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
        >


            <div className='absolute h-[80%] w-[40%] bg-[#050810] md:block hidden  rotate-45'>

            </div>


            <div className='absolute h-[80%] w-[40%] bg-[#050810]  md:block hidden rotate-12'>

            </div>


            <div className='flex  flex-col justify-center items-center  h-full z-30  space-y-2 w-full'>
                <div className='text-xl text-gray-300 font-bold'>Based In Canada</div>
                <div className='md:text-6xl sm:text-4xl text-3xl text-white font-bold flex space-x-4 '><div className='pb-2'>Experienced</div> <div className='text-gradient-green pb-2'>Frontend &</div></div>
                <div className='md:text-6xl sm:text-4xl text-3xl text-white font-bold flex space-x-4'><div className='text-gradient-purple'>Backend</div> <div >Developer</div></div>

                <div className='flex md:flex-row flex-col space-x-4 items-center'>
                    <Button variant='faded' className='bg-black-gradient opacity-60 text-white' endContent={<MdOutlineKeyboardArrowRight className='h-5 w-5' />} onClick={() => {
                        goToPage('#projects')
                    }}>See My Work</Button>
                    <motion.div className='p-3 z-30 '
                        initial={{ width: 0, opacity: 0 }}
                        animate={{ width: 200, opacity: 1 }}
                        transition={{ duration: 1, delay: 0.6 }}
                    >
                        <Image src={'/meCartoon.png'}></Image>
                    </motion.div>
                    <a href="/Resume.pdf" download>
                        <Button
                            variant="flat"
                            className="bg-transparent text-white"
                            startContent={<FiDownload className="h-5 w-5 text-blue-500" />}
                        >
                            Download CV
                        </Button>
                    </a>


                </div>
                <div className=' text-gray-400 font-bold flex justify-center items-center text-center pb-2'>Hi. I'm Anthani Legault. A Full-Stack Developer <br /> with half a decade of experience.</div>
                <motion.div className='text-3xl flex justify-center items-center space-x-2 border-t-2 border-[#ffffff] md:w-[28rem] w-[16rem] px-4 pt-4 z-20 '
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ width: 200, opacity: 1 }}
                    transition={{ duration: 1, delay: 1.6 }}
                >
                    <Button className='w-[2rem] bg-transparent text-white text-4xl ' isIconOnly>

                        <Image className='' src={'instagram.png'} />
                    </Button>
                    <Button className='w-[2rem] bg-transparent text-white text-5xl  ' isIconOnly onClick={() => {
                        window.open('https://twitter.com/NotAntoy')
                    }}>

                        <Image className='' src={'/twitter.png'} />
                    </Button>
                    <Button className='w-[2rem] bg-transparent text-white text-4xl ' isIconOnly onClick={() => {
                        window.open('https://www.linkedin.com/in/anthani-legault-a4b19a283/')
                    }}>
                        <Image className='' src={'/linkedin.png'} />
                    </Button>
                    {/* <Button className='w-[2rem] bg-transparent text-white text-3xl ' isIconOnly>
                <FaFacebookF />
              </Button> */}
                    <Button className='w-[2rem] bg-transparent text-white text-4xl h-10 ' isIconOnly onClick={() => {
                        window.open('https://github.com/Antoy1234')
                    }}>
                        <Image className='' src={'/github.png'} />
                    </Button>


                </motion.div>
            </div>

        </motion.div >
        </div>
    //     <section className="relative w-full flex justify-center    bg-gradient-to-b  text-white">
    //     <div className=" max-w-[1440px] w-full px-4 py-24 md:py-32">
    //       <div className="flex flex-col md:flex-row items-center justify-between gap-8">
    //         <div className="md:w-1/2">
    //           <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">Anthani Legault</h1>
    //           <h2 className="text-xl md:text-2xl lg:text-3xl text-purple-400 mb-6">Full-Stack Developer</h2>
    //           <p className="text-lg md:text-xl mb-8 max-w-lg text-white/50">
    //             Building innovative web solutions with over half a decade of experience in React, Express, and modern web
    //             technologies.
    //           </p>
    //           <div className="flex flex-wrap gap-4">
    //           <Button variant='faded' className='bg-black-gradient opacity-60 text-white' endContent={<MdOutlineKeyboardArrowRight className='h-5 w-5' />} onClick={() => {
    //                     goToPage('#projects')
    //                 }}>See My Work</Button>
    //           <a href="/Resume.pdf" download>
    //                  <Button
    //                     variant="flat"
    //                    className="bg-transparent text-white"
    //                       startContent={<FiDownload className="h-5 w-5 text-blue-500" />}
    //                      >
    //                        Download CV
    //                   </Button>
    //                </a>
                
    //           </div>
    //         </div>
    //         <div className="md:w-1/2 flex justify-center">
    //           <div className="relative w-64 h-64 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-white">
    //             <Image
    //               src="/meCartoon.png"
    //               alt="Anthani Legault"
    //               width={320}
    //               height={320}
    //               className="object-cover"
                  
    //             />
    //           </div>
    //         </div>
    //       </div>
    //       <div className="absolute bottom-8 left-0 right-0 flex justify-center gap-6">
    //         <a
    //           href="https://github.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-white hover:text-gray-300 transition-colors"
    //         >
    //           <FaGithub size={24} />
    //         </a>
    //         <a
    //           href="https://linkedin.com"
    //           target="_blank"
    //           rel="noopener noreferrer"
    //           className="text-white hover:text-gray-300 transition-colors"
    //         >
    //           <CiLinkedin size={24} />
    //         </a>
    //         <a href="mailto:legaultanthani@gmail.com" className="text-white hover:text-gray-300 transition-colors">
    //           <CiMail size={24} />
    //         </a>
    //       </div>
    //     </div>
    //   </section>
    )
}
