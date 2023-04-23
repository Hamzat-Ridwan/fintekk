import React from 'react'
import Play from '../assets/play.svg'
import Apple from '../assets/apple.svg'
import Circles from "../assets/circles.svg"
import Lady from "../assets/lady.svg"
import Float1 from "../assets/float1.svg"
import Float2 from "../assets/float2.svg"
import Float3 from "../assets/float3.svg"
import {motion} from 'framer-motion'

const Header = () => {
  return (
    <div className='md:flex min-w-full justify-between items-center px-[5%]  sm:px-14 my-[100px] text-center sm:text-left'>
        <div className='md:w-[38%] '>
            <h1 className='text-[60px] leading-snug text-[#172E80]'>Pay, Invest, Save your Cash with a single bank</h1>
            <p className='text-[20px] tracking-wider font-light my-3 mb-4'>Fintekk is the bank that does it all. Manage everything directly and easy with fintekk.</p>
            <button className='text-white text-[16px] bg-[#2E5CFF] border-solid border-[1.5px] border-[#2E5CFF] rounded-lg px-3 py-1'>Sign Up For Free</button>
            <div className='py-6 flex gap-3'>
                <button className='flex gap-2 border-[1px] border-[#777777] rounded-lg px-3 py-[5px] text-[13px]'><img src={Play} alt="" />Get on Android</button>
                <button className='flex gap-2 border-[1px] border-[#777777] rounded-lg px-3 py-[5px] text-[13px]'><img src={Apple} alt="" />Get on iphone</button>
            </div>
        </div>
        {/* <div className='flex justify-center items-center sm:justify-end sm:block mx-auto w-full sm:w-auto'> */}
        <div className='relative sm:mr-[50px] sm:h-[470px] mx-[10%] sm:mx-0 left-[50%] sm:left-0 translate-x-[-50%] sm:translate-x-0  max-w-full sm:w-auto '>
            {/* <img src={Circles} alt="" className='absolute flex justify-center max-w-full' /> */}
            <img src={Lady} alt="" className='h-full flex justify-center max-w-full' />
            <motion.div 
                animate={{y: ['-5px','5px','-3.5px','3.5px', '0px', '0px', '0px', '0px', '0px', '0px']}}
                transition= {{repeatType: "mirror", repeat: Infinity, duration: 10}}
                className='absolute top-[35%] left-[-90px] sm:left-[-150px] '
                
            >
                <img src={Float1} alt="" className='scale-75'
            />
            </motion.div>
            <motion.div
                animate={{y: ['0px', '0px', '0px', '-5px','5px','-3.5px','3.5px', '0px', '0px', '0px' ]}}
                transition= {{repeatType: "mirror", repeat: Infinity, duration: 10}}
                className='absolute top-[15%] right-[-75px] sm:right-[-100px]  '
            >
                <img src={Float2} alt="" className='scale-75'/>
            </motion.div>
            <motion.div 
                animate={{y: ['0px','0px', '0px', '0px', '0px', '0px', '-5px','5px','-3.5px','3.5px', ]}}
                // transition={{yoyo: Infinity, type: 'spring', duration: 2}}
                transition= {{
                    repeatType: "mirror",
                    repeat: Infinity,
                    duration: 10
                }}
                className='absolute top-[75%] right-[-65px] sm:right-[-70px]'
            >
                <img src={Float3} alt="" className=' scale-75'/>
            </motion.div>
        </div>
        {/* </div> */}
    </div>
  )
}

export default Header