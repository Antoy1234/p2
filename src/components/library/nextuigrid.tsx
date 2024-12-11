import { motion } from 'framer-motion';
import '../gradients.css'
import '../hero.css'
import { Image } from '@nextui-org/react';


export default function InfoGrid(props: any) {
    const { gridinfo } = props;

    return (
        <div className="flex justify-center items-center w-full">
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:mt-4 z-20 justify-center w-full">
                {gridinfo?.map((item: any, index: number) => (
                    <motion.div key={index} className="flex m-2 w-auto rounded-lg bg-[#131316] h-20 shadow-lg blurrybg  z-20 items-center justify-center  select-none shadow-white/5  hover:shadow-white/10"
                        animate={{ y: 0, opacity: 1 }}
                        initial={{ y: 100, opacity: 0 }}
                        transition={{ duration: 0.5, delay: item.delay }}
                        >
                       <div className={`h-full w-3/12 min-w-20  p-4 flex items-center `} >
                            <Image src={item.image} className={` bg-opacity-10 rounded-lg p-2 h-12 w-12 `} style={{backgroundColor: item.color, }}></Image>
                       </div>
                       <div className='h-full w-9/12 flex flex-col justify-center'>
                            <div>
                                {item.title}
                            </div>
                            <div className='text-gray-400 text-sm'>
                                {item.description}
                            </div>
                       </div>
                    </motion.div>
                ))}
            </div>
        </div>
    )
}
