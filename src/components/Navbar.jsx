import React, {useState , useRef, useEffect} from 'react'
import Menu from "../assets/menuham.svg"
import { motion, AnimatePresence } from 'framer-motion'

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  let menuRef = useRef()
    useEffect(()=>{
        let handler = e =>{
            if(!menuRef.current.contains(e.target)){
                setShowMenu(false)
            }
        }

        document.addEventListener('mousedown', handler)
        return () =>{
            document.removeEventListener('mousedown', handler)
        }
    })
  return (
    <>
    <AnimatePresence>
    <nav className='flex justify-between bg-white px-[5%] sm:px-14 py-5 border-b-2 w-full items-center fixed top-0 z-10'>
        <h2 className='text-[#2E5CFF] text-[19px]'>Fintekk</h2>
        <div className='font-light text-[15px] hidden sm:flex gap-4 text-[#171717]'>
            <a>Home</a>
            <a>About</a>
            <a>FAQs</a>
            <a>Contact Us</a>
        </div>
        <div className='text-[14px] hidden sm:block'>
            <button className='border-solid border-[1.5px] rounded-lg text-[#2E5CFF] border-[#2E5CFF] px-3 py-1 mr-3'>Login</button>
            <button className='text-white bg-[#2E5CFF] border-solid border-[1.5px] border-[#2E5CFF] rounded-lg px-3 py-1'>Sign Up For Free</button>
        </div>
        <div className='sm:hidden' >
          {showMenu && <img src={Menu} alt="" onClick={()=> setShowMenu(false)} /> }
          {!showMenu && <img src={Menu} alt="" onClick={()=> setShowMenu(true)}/> }
        </div>

    </nav>
    {showMenu &&
          <motion.div className=' w-full' 
          key='con'
          initial={{scale: 1, opacity: 1}}
          exit={{ opacity: 0, transition: {duration: .2}}}
          >
            <motion.div 
              ref={menuRef}
              key='box'
              initial={{scale: .6, opacity: .6}}
              exit={{scale: .6, opacity: .6, transition: {duration: .4}}}
              animate={{scale: 1, opacity: 1}}
              transition={{type: 'spring', duration: .5}}
              className=' fixed bg-white top-[80px] right-[20px] rounded-lg border-[1.5px] text-center w-[60%] p-1'>
              <div className='py-2 border-b-[1px]'><a>Home</a></div>
              <div className='py-2 border-b-[1px]'><a>About</a></div>
              <div className='py-2 border-b-[1px]'><a>FAQs</a></div>
              <div className='mx-6 py-2'><a>Contact Us</a></div>
              <div><button className='border-solid border-[1.5px] rounded-lg my-[1.5px] w-full text-[#2E5CFF] border-[#2E5CFF] px-3 py-2'>Login</button></div>
              <div><button className='text-white bg-[#2E5CFF] border-solid border-[1.5px] w-full border-[#2E5CFF] rounded-lg px-3 py-2'>Sign Up For Free</button></div>
            </motion.div> 
          </motion.div>
        }
    </AnimatePresence>
    </>
  )
}

export default Navbar