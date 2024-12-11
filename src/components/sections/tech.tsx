

import { Button, Card, Image, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Navbar, NavbarBrand, NavbarContent, NavbarItem, useDisclosure } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

import '../gradients.css'
import '../hero.css'
import DiamondCursor from './diamondCursor';
import featuredata from '@/data/featureData';
import InfoGrid from '../library/nextuigrid';

import { Jura } from 'next/font/google'
const jura = Jura({
    weight: '400',
    subsets: ['latin'],

})


export default function Tech({
    language = "en"
}: {
    language?: String
}) {


    return (
        <div id='' className='flex flex-col justify-center items-center  my-16 space-y-2 w-full'>
            <div className='max-w-[1440px] lg:px-0 px-6 w-full text-white flex flex-col space-y-4'>

                <div className='text-5xl font-bold'>Current technologies</div>
                <div className='text-xl text-white/30'>I'm profficicient in a range of modern technologies that empower me to build highly functional solutions. <br /> These are some of my main technologies</div>
                <div className='flex max-w-[1440px] w-full'>
                    <InfoGrid gridinfo={featuredata} />

                </div>
            </div>
        </div >
    )
}
