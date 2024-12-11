

import { Button, Card, Image, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Navbar, NavbarBrand, NavbarContent, NavbarItem, useDisclosure } from '@nextui-org/react'
import React, { useEffect, useState } from 'react'

import '../gradients.css'
import '../hero.css'
import DiamondCursor from './diamondCursor';
import projectdata from '@/data/projectData';
import ProjectGrid from '../library/projectGrid';
import { Jura } from 'next/font/google'
const jura = Jura({
    weight: '400',
    subsets: ['latin'],

})


export default function Projects({
    language = "en"
}: {
    language?: String
}) {


    return (
        <div id='projects' className='flex flex-col justify-center items-center  my-16 space-y-2 w-full'>
            <div className='max-w-[1440px] lg:px-2 px-6  w-full text-white flex flex-col space-y-4'>

                <div className='text-5xl font-bold'>Projects & Experiences</div>
                <div className='text-xl text-white/30'>Throughout my years I have built multiple applications. <br /> These are my biggest projects</div>
                <div className='flex max-w-[1440px] w-full'>
                    <ProjectGrid gridinfo={projectdata} />

                </div>
            </div>
        </div >
    )
}
