

import { Button, Card, Image, Link, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, Navbar, NavbarBrand, NavbarContent, NavbarItem, Tab, Tabs, useDisclosure } from '@nextui-org/react'
import React, { useState } from 'react'

import '../gradients.css'
import '../hero.css'
import DiamondCursor from './diamondCursor';
import featuredata from '@/data/featureData';
import InfoGrid from '../library/nextuigrid';
import { Jura } from 'next/font/google'
import frontend from '@/data/frontend';
import backend from '@/data/backend';

const jura = Jura({
    weight: '400',
    subsets: ['latin'],

})


export default function Tech({
    language = "en"
}: {
    language?: String
}) {
    const colors = ["default", "primary", "secondary", "success", "warning", "danger"];
    const [displayData,setDisplayData] = useState(featuredata);

    return (
        <div id='' className='flex flex-col justify-center items-center  my-16 space-y-2 w-full'>
            <div className='max-w-[1440px] lg:px-0 px-6 w-full text-white flex flex-col space-y-4'>

                <div className='text-5xl font-bold text-green-400'>Current technologies</div>
                <div className='text-xl text-white/50'>I'm profficicient in a range of modern technologies that empower me to build highly functional solutions. <br /> These are some of my main technologies</div>
           <Tabs
  aria-label="options"
  className="cursor-none shadow-lg  "
  classNames={{
    tabList: "bg-gray-900 gap-6 border-b-2 border-white/10",
    tab: "text-gray-400 hover:text-white data-[selected=true]:[&>div]:text-white text-lg h-11 px-4",
    cursor: "bg-green-400 h-[2px]",
    panel: "bg-gray-900 text-green-400 pt-4",
    tabContent: "group-data-[selected=true]:text-green-300 text-white"
  }}
  onSelectionChange={(key) => {
    if (key === "main") {
      setDisplayData(featuredata);
    } else if (key === "frontend") {
      setDisplayData(frontend);
    }else if (key === "backend") {
        setDisplayData(backend);
      }
  }}
>
  <Tab key="main" className="cursor-none" title="Main">
  </Tab>
  <Tab key="frontend" className="cursor-none" title="Front End" >
    {/* Content */}
  </Tab>
  <Tab key="backend" className="cursor-none" title="Back End">
    {/* Content */}
  </Tab>
</Tabs>
                <div className='flex max-w-[1440px] w-full'>
                    <InfoGrid gridinfo={displayData} />

                </div>
            </div>
        </div >
    )
}
