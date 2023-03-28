import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { useState } from 'react'
import { Shadows_Into_Light } from 'next/font/google'

const shadows = Shadows_Into_Light({ 
  subsets: ['latin'],
  weight: ['400'],
})
  
const Navbar = () => {
  const [navbar, setNavbar] = useState(false)

  return (
    <nav>
      <div className='w-full bg-sky-900 fixed top-0 left-0 right-0 z-10'>
        <div className='justify-between p-5 mx-auto md:items-center md:flex'>
          <div>
            <div className='flex items center justify-between md:block'>
              <Link href='/'>
                <div className='text-lg md:text-xl font-bold hover:bg-sky-800 rounded-sm text-slate-200'>Temperature Visualization</div>
              </Link>
              <div className='md:hidden cursor-pointer text-slate-200' onClick={() => setNavbar(!navbar)}>
                {navbar ? (
                  <AiOutlineClose />
                ) : (
                  <AiOutlineMenu />
                )}
              </div>
            </div>
          </div>

          <div className={shadows.className}>
            <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${navbar ? 'p-12 md:p-0 block' : 'hidden'}`}>
              <ul className='h-screen items-center justify-center text-slate-200 md:h-auto md:flex'>
                <li className='px-4 py-1 hover:bg-sky-800 rounded-sm'>
                  <Link href='#temperature' onClick={() => setNavbar(!navbar)}>find temperatures</Link>
                </li>
                <li className='px-4 py-1 hover:bg-sky-800 rounded-sm'>
                  <Link href='#palette' onClick={() => setNavbar(!navbar)}>palette planner</Link>
                </li>
                {/* <li className='px-4 py-1 hover:bg-violet-900 rounded-sm'>
                  <Link href='#about' onClick={() => setNavbar(!navbar)}>about</Link>
                </li> */}
              </ul>
            </div>
          </div>
        </div>        
      </div>
    </nav>
  )
}

export default Navbar