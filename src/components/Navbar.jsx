import { Link } from 'react-router-dom'
import { Menu, X, Car } from 'lucide-react'
import { useState } from 'react'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const content = <>
    <div className='md:hidden block absolute top-20 w-full left-0 right-0 bg-white transition'>
      <ul className='text-center text-xl p-10'>
        <Link to="/" onClick={handleClick}>
          <li className='hover:text-slate-400 transition border-b-2 border-blue-900 cursor-pointer py-3 px-2'>Home</li>
        </Link>
        <Link to="Service" onClick={handleClick}>
          <li className='hover:text-slate-400 transition border-b-2 border-blue-900 cursor-pointer py-3 px-2'>Service</li>
        </Link>
      </ul>
    </div>
  </>
  return (
    <nav>
      <div className='h-10vh flex justify-between z-50 text-black lg:py-5 px-20 py-10 flex-1'>
        <div className='flex items-center flex-1'>
          <Car color='#0c126f'/>
          <span className='text-3x1 text-blue-950 font-bold flex justify-between px-4'>CleanSync</span>
        </div>
        <div className='hidden md:flex lg: flex-1 items center justify-center font-normal'>
          <div className='flex-10'>
            <ul className='flex gap-8 mr-16 text-[18px]'>
              <Link to="/">
                <li className='hover:text-slate-400 transition border-b-2 border-blue-900 hover:border-slate-400 cursor-pointer'>Home</li>
              </Link>
              <Link to="Service">
                <li className='hover:text-slate-400 transition border-b-2 border-blue-900 hover:border-slate-400 cursor-pointer'>Service</li>
              </Link>
            </ul>
          </div>
        </div>
        <div>
          {click && content}
        </div>
        <button className='block md:hidden transition' onClick={handleClick} >
          {click ? <X color='#0c126f'/> : <Menu color='#0c126f' />}
        </button>
      </div>
    </nav>
  )
}

export default Navbar