

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
import { CiMapPin } from 'react-icons/ci';
import { FaMapPin } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';
const jura = Jura({
    weight: '400',
    subsets: ['latin'],

})


export default function About({
    language = "en"
}: {
    language?: String
}) {


    return (
        <section id="about" className="pt-20 text-white ">
        <Card className="container mx-auto px-4 bg-[#131316] p-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-green-400 ">About Me</h2>
          <div className="max-w-3xl mx-auto text-gray-300">
            <div className="flex items-center mb-6">
              <LuMapPin className="mr-2 text-green-400" />
              <span className="text-lg">Ottawa, Canada</span>
            </div>
            <p className="text-lg mb-6">
              I'm a passionate full-stack developer with over half a decade of experience building web applications and
              services. Currently pursuing a Software Engineering degree at the University of Ottawa, I combine academic
              knowledge with practical industry experience.
            </p>
            <p className="text-lg mb-6">
              My expertise spans the entire development stack, from crafting responsive front-end interfaces with React
              and Next.js to building robust back-end systems with Express, MongoDB, and PostgreSQL.
            </p>
            <p className="text-lg">
              I thrive in collaborative environments and enjoy tackling complex problems with elegant solutions. Whether
              it's developing AI-powered chatbots or secure password management systems, I'm committed to creating
              high-quality, user-focused applications.
            </p>
          </div>
        </Card>
      </section>
    )
}
