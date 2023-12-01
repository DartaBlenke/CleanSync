import Card from '../components/Card'
import { useNavigate } from 'react-router-dom'


const Client = () => {
  const navigate = useNavigate()

  function selectVehicle (item) {
    navigate(`/ClientFlow/${item.id}`)
  }

  const vehiclesJson = localStorage.getItem('vehicles')
  const vehicles = JSON.parse(vehiclesJson)
  
  return (
    <div className='max-w-[800px] mt-[30px] w-full h-screen mx-auto flex flex-col items-center md:mt-[100px]'>
      <h1 className='text-xl md:text-3xl sm:text-2xl px-6'>Bem vindo ao nosso serviço de agendamento!!</h1>
      <p className='sm:text-3xl text-2xl md:text-4xl mt-10 font-bold text-blue-900 text-center px-10'>Por favor, informe qual o tipo do seu automóvel.</p>
      <div className='grid grid-rows-3 gap-5 pt-10 pb-10'>
        {
            vehicles.map((vehicle, index) => (
              <div key={index} className='flex justify-center'>
              <Card item={vehicle} selectVehicle={selectVehicle} />
              </div>
            ))
        }
      </div>
    </div>
  )
}

export default Client