
import { PiLightning } from "react-icons/pi";
import { AiOutlineSafety } from "react-icons/ai";
import { GrMoney } from "react-icons/gr";
import { FaMagic } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { LuLocateFixed } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa";
import { IoIosInfinite } from "react-icons/io";
import { FaArrowUp } from "react-icons/fa";
import { delay } from "framer-motion";


const projectdata = [
    {
        id: 1,
        title: 'Pitchcamp Management',
        image: '/pitchcamp.png',
        description: "Campground Management Software",
        delay: 1.1,
        color: '#14532d',
        skills: [{id:1,name:'Next'},{id:2,name:'Php'},{id:3,name:'Postgres'}],
        demoImg: '/pitchEx.png',


    },  {
        id: 2,
        title: 'Chatlas',
        image: '/chatlas.png',
        description: "AI Chatbot Software",
        delay: 1.2,
        color: '#5b21b6',
        skills: [{id:1,name:'React'},{id:2,name:'Express'},{id:3,name:'Mongo'}],
        demoImg: '/chatlasEx.png',


    }, {
        id: 3,
        title: 'Pass Protect',
        image: '/passprotect.png',
        description: "Password Manager",
        delay: 1.3,
        color: '#500724',
        skills: [{id:1,name:'TS'},{id:2,name:'Php'},{id:3,name:'Postgres'}],
        demoImg: '/passEx2.png',


    }, {
        id: 4,
        title: 'Lens | Prism',
        image: '/cclogo.png',
        description: "Pitch Product",
        delay: 1.4,
        color: '#171717',
        skills: [{id:1,name:'React'},{id:2,name:'Native'},{id:3,name:'Tailwind'}],
        demoImg: '/prismEx1.png',


    }, 

];


export default projectdata;