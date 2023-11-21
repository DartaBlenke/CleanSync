import { Button } from '../components/Button'
import { Link } from 'react-router-dom'


const Flow = () => {
  
  return (
    <div className='max-w-[800px] mt-[170px] w-full h-screen mx-auto text-center flex flex-col items-center'>
      <h1 className='md:text-6xl sm:text-5xl text-4xl font-bold text-blue-900 md:py-6'>Bem vindo aos serviços CleanSync</h1>
      <p className='sm:text-3xl text-xl mt-10'>Selecione o fluxo desejado</p>
      <div className='grid grid-cols-5'>
        <div className='col-start-2 mt-10'>
          <Link to="/loginClient">
              <Button>Cliente</Button>
          </Link>
        </div>
        <div className='col-start-4 mt-10'>
          <Link to="/loginWash">
              <Button>Lavação</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Flow