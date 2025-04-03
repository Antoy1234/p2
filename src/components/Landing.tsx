"use client"

import { Button, NextUIProvider } from '@nextui-org/react'
import React, { useState, useEffect } from 'react'
import './hero.css'
import './gradients.css'
import MainHero from './sections/mainhero'
import Tech from './sections/tech'
import Projects from './sections/projects'
import Loading from './sections/loader'
import DiamondCursor from './sections/diamondCursor'
import Footer from './sections/footer'
import About from './sections/about'

export default function Landing({
    language = "en"
}: {
    language?: string
}) {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000); 

        return () => clearTimeout(timer);
    }, []);

    return (
        <NextUIProvider>
            <div className='md:block hidden'>

             <DiamondCursor />
            </div>
            <div className='flex flex-col min-h-[100vh] bg-[#050810]  overflow-hidden items-center justify-center '>
                {isLoading ? <Loading /> : null} 
                {isLoading ? null : <MainHero />}
                {isLoading ? null : <Tech />}
                {isLoading ? null : <Projects />} 
                {isLoading ? null : <About />} 

                {isLoading ? null : <Footer />} 

            </div>
        </NextUIProvider>
    )
}
