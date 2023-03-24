import { FaHardHat } from 'react-icons/fa'
import { Shadows_Into_Light } from 'next/font/google'

const shadows = Shadows_Into_Light({ 
  subsets: ['latin'],
  weight: ['400'],
})

const Palette = () => {
  return (
    <div className='bg-slate-300 flex flex-col items-center pt-20 min-h-screen'>
      <div className={shadows.className}>
        <h2 className='text-2xl font-bold text-cyan-600'>Palette Planner</h2>
      </div>
      <p className='text-rose-600'>This feature is under contruction.</p>
      <p><FaHardHat /></p>
      <p>Thank you for your patience.</p>

    </div>
  )
}

export default Palette