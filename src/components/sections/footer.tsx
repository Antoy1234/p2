

import { Button, Card, Image, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Navbar, NavbarBrand, NavbarContent, NavbarItem, useDisclosure } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

import '../gradients.css'
import '../hero.css'
import DiamondCursor from './diamondCursor';
import featuredata from '@/data/featureData';
import InfoGrid from '../library/nextuigrid';
import { MdRocketLaunch } from "react-icons/md";
import { GiCoffeeCup } from "react-icons/gi";

import { Jura } from 'next/font/google'
const jura = Jura({
    weight: '400',
    subsets: ['latin'],

})


export default function Footer({
    language = "en"
}: {
    language?: String
}) {


    return (
        <div id='' className='flex flex-col justify-center items-center  mt-16 w-full'>
            <div className='h-32 bg-transparent w-full'>

            </div>
            <div className='min-h-[400px] bg-[#080b14] w-full relative flex justify-center rounded-lg'>
                <div className='absolute -top-20 lg:w-1/2 w-full h-40 bg-[#131316] self-center rounded flex justify-center md:justify-between items-center px-16 text-white'>
                    <div className='font-bold text-xl text-green-400 md:block hidden'>
                        Start a project
                    </div>
                    <div className='text-center  text-gray-300 md:block hidden'>
                        Interested in working together? <br/> We should queue up <br /> a time to chat. <br/> I'll buy the coffee.
                    </div>
                    <div>
                        <Button variant='ghost' className='text-white border-green-400 rounded-full text-md' startContent={<div><MdRocketLaunch /></div>}>Let's do this</Button>
                    </div>
                </div>
                <div className='flex flex-col justify-end py-6 text-white text-center space-y-16'>
                    <div></div>
                    <div className={`${jura.className} text-2xl space-y-4`}>
                        <div>
                            Living, learning & leveling up <br /> one day at a time.
                        </div>
                        <div className='w-full flex justify-center items-center'><GiCoffeeCup className='h-10 w-10 text-green-400' /></div>
                    </div>
                    <div className={`${jura.className}`}>Handcrafted by me © Antoy - Anthani Legault</div>

                </div>
            </div>
        </div >
    )
}
