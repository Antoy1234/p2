import { motion } from 'framer-motion';
import '../gradients.css'
import '../hero.css'
import { Button, Card, Image } from '@nextui-org/react';
import { MdOutlineKeyboardArrowRight } from "react-icons/md";


export default function ProjectGrid(props: any) {
    const { gridinfo } = props;

    return (
        <div className="flex justify-center items-center w-full">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1  md:mt-4 z-20 justify-center w-full">
                {gridinfo?.map((item: any, index: number) => (
                    <motion.div key={index} className="flex flex-col m-2 w-auto min-w-[300px] rounded-lg bg-[#131316] h-96 shadow-lg blurrybg  z-20 items-start justify-start pt-5 select-none shadow-white/5  hover:shadow-white/10"
                        animate={{ y: 0, opacity: 1 }}
                        initial={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.5, delay: item.delay }}
                    >
                        <div className='flex'>

                            <div className={`h-20 w-3/12 min-w-20  p-4 flex items-center `} >
                                <Image src={item.image} className={` bg-opacity-10 rounded-lg py-2 px-1 h-12 w-12 `} style={{ backgroundColor: item.color, }}></Image>
                            </div>
                            <div className='h-20 w-9/12 flex flex-col items-start justify-center'>
                                <div>
                                    {item.title}
                                </div>
                                <div className='text-gray-400 text-sm'>
                                    {item.description}
                                </div>
                            </div>
                        </div>
                        <div className='flex w-full justify-between px-6'>
                            <div className='flex space-x-2'>
                            {item?.skills?.map((item: any, index: number) => (
                                <div className='h-6 w-16 bg-black-gradient-2 rounded text-white/50 flex text-center text-sm items-center justify-center' key={index}>
                                            {item.name}
                            </div>
                            ))}

                            </div>
                            <Button variant='faded' className='bg-black-gradient opacity-60 h-6 w-8 text-white rounded-md hidden' endContent={<div><MdOutlineKeyboardArrowRight /></div>}>View</Button>

                        </div>
                        <div className='w-full h-1/2 flex justify-center items-start'>
                            <div className='flex justify-center items-center rounded-lg px-3 py-3 m-4  border-2 border-gray-500 mt-6' style={{ backgroundColor: item.color, }}>

                            <Image src={item.demoImg} className={` bg-opacity-10 rounded-lg h-[200px] w-[275px] `} ></Image>
                            </div>


                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
