import { useParams } from 'react-router-dom'

const ClientFlow = () => {

  const vehiclesJson = localStorage.getItem('vehicles')
  const vehicles = JSON.parse(vehiclesJson)

  const { item } = useParams()

  console.log(vehicles[item])
  

  return (
    <div className='max-w-[800px] mt-[30px] w-full h-screen mx-auto flex flex-col items-center md:mt-[170px]'>
      <h1 className='text-xl md:text-3xl sm:text-2xl px-6'>Bem vindo ao nosso serviço de agendamento!!</h1>
      <p className='sm:text-3xl text-2xl md:text-4xl mt-10 font-bold text-blue-900 text-center px-10'>Confirme o automóvel.</p>
      <div className='grid grid-rows-3 gap-5 pt-10'>
        <h1>Confirmar</h1>
      </div>
    </div>
  )
}

export default ClientFlow