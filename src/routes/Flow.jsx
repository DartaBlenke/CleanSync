import { Button } from '../components/Button'
import { Link } from 'react-router-dom'
import React from 'react'


const Flow = () => {
  
  return (
    <div className='max-w-[800px] mt-[100px] md:mt-[170px] h-auto mx-auto text-center flex flex-col items-center'>
      <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold text-blue-900 md:py-6'>Bem vindo aos serviços CleanSync</h1>
      <p className='sm:text-3xl text-xl mt-10'>Uma maneira fácil e prática para </p>
      <p className='sm:text-3xl text-xl'>agendar a lavação do seu automóvel </p>
      <div className='grid grid-cols-2 w-full h-[10%] mb-[25%] mt-[25%]'>
        <div className='text-center'>
          <Link to="/Wash">
              <Button>Lavação</Button>
          </Link>
        </div>
        <div className='text-center'>
          <Link to="/Client">
              <Button>Cliente</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Flow