import { Link } from 'react-router-dom'
import { Menu, X, Car } from 'lucide-react'
import { useState } from 'react'
import Cleansync from '../assets/img/cleansync.svg'
import React from 'react'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)

  const content = <>
    <div className='md:hidden block absolute top-20 w-full left-0 right-0 bg-white transition'>
      <ul className='text-center text-xl p-10'>
        <Link to="Wash" onClick={handleClick}>
          <li className='hover:text-slate-400 transition border-b-2 border-blue-900 cursor-pointer py-3 px-2'>Tabela</li>
        </Link>
        <Link to="Client" onClick={handleClick}>
          <li className='hover:text-slate-400 transition border-b-2 border-blue-900 cursor-pointer py-3 px-2'>Agendamento</li>
        </Link>
      </ul>
    </div>
  </>
  return (
    <nav>
      <div className='flex px-10 md:px-20 py-[13%] lg:py-8 md:py-8 justify-between'>
        <Link to="/" >
          <div className='flex items-center flex-1'>
            <img src={Cleansync} alt="logo" className='scale-[100%]'/>
          </div>
        </Link>
        <div className='hidden md:flex lg: flex-1 justify-end font-normal'>
          <div className='flex-10'>
            <ul className='flex gap-8 mr-16 text-[18px]'>
              <Link to="Wash">
                <li className='hover:text-slate-400 transition border-b-2 border-blue-900 hover:border-slate-400 cursor-pointer'>Tabela</li>
              </Link>
              <Link to="Client">
                <li className='hover:text-slate-400 transition border-b-2 border-blue-900 hover:border-slate-400 cursor-pointer'>Agendamento</li>
              </Link>
            </ul>
          </div>
        </div>
        <div >
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