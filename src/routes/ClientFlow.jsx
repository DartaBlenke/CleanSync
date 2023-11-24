import { useParams } from 'react-router-dom'
import { FlowTitle } from '../components/FlowTitle'
import { Input } from '../components/Input'
import { CheckboxInput } from '../components/CheckboxInput'
import { useState } from 'react'

const ClientFlow = () => {

  const vehiclesJson = localStorage.getItem('vehicles')
  const vehicles = JSON.parse(vehiclesJson)

  const { item } = useParams()

  const vehicleFlow = vehicles[item]
  console.log(vehicleFlow)

  const [totalValue, setTotalValue] = useState(0)

  const handleCheckboxChange = (value) => {
    setTotalValue(totalValue + value);
  };
  

  return (
    <div className='max-w-[800px] mt-[30px] w-full h-auto mx-auto flex flex-col items-center md:mt-[170px]'>
      <h1 className='text-xl md:text-3xl sm:text-2xl px-6'>Bem vindo ao nosso serviço de agendamento!!</h1>
      <div className='w-[80%]'>
        <div>
          <FlowTitle>Informe seus dados pessoais.</FlowTitle>
          <div className='grid grid-rows-3 gap-10 pt-[15%]'>
            <Input>Nome</Input>
            <Input>Telefone</Input>
          </div>
        </div>
        <div>
          <FlowTitle>Informe os dados do veículo.</FlowTitle>
          <div className='grid grid-rows-3 gap-10 pt-[15%]'>
            <Input>Modelo</Input>
            <Input>Placa</Input>
          </div>
        </div>
        <div>
          <FlowTitle>Selecione os serviços desejados.</FlowTitle>
          <div className='grid grid-rows-4 gap-10 pt-[15%]'>
            <CheckboxInput label="Lavação" value={10} onChange={handleCheckboxChange} />
            <CheckboxInput label="Cera" value={10} onChange={handleCheckboxChange} />
            <CheckboxInput label="Polimento" value={10} onChange={handleCheckboxChange} />
          </div>
        </div>
        <div>
          <FlowTitle>Selecione a data e hora do serviço.</FlowTitle>
          <div className='grid grid-rows-3 gap-10 pt-[15%]'>
            <Input>Dia</Input>
            <Input>Hora</Input>
          </div>
        </div>
        <div>
          <FlowTitle>Selecione a forma de pagamento.</FlowTitle>
          <div className='grid grid-rows-3 gap-10 pt-[15%]'>
            <Input>Cartão</Input>
            <Input>Dinheiro</Input>
            <Input>Pix</Input>
          </div>
        </div>
        <div>
          <FlowTitle>Informações finais.</FlowTitle>
          <div className='grid grid-rows-4 gap-10 pt-[15%]'>
            <Input>carro</Input>
            <Input>serviço</Input>
            <Input>data</Input>
            <Input>pagamento</Input>
          </div>
        </div>
      </div>
      <div className='grid grid-cols-2 w-full h-[10%] mb-[25%] mt-[25%]'>
        <div className='text-center'>
        <button className='bg-gray-400/80 text-black py-2 px-6 rounded hover:bg-gray-700 hover:text-white duration-300 w-30'>Anterior</button>
        </div>
        <div className='text-center'>
        <button className='bg-green-500/80 text-black py-2 px-6 rounded hover:bg-green-900 hover:text-white duration-300 w-30'>Confirmar</button>
        </div>
      </div>
    </div>
  )
}

export default ClientFlow