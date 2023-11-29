import { useParams } from 'react-router-dom'
import { FlowTitle } from '../components/FlowTitle'
import { CheckboxInput } from '../components/CheckboxInput'
import { useState } from 'react'
import { Datepicker } from '../components/DatePicker'
import PayCard from '../components/PayCard'
import Pix from '../assets/img/pix.svg'
import Cash from '../assets/img/cash.svg'
import Card from '../assets/img/card.svg'
import Phone from '../assets/img/phone.svg'
import User from '../assets/img/user.svg'
import Service from '../assets/img/service.svg'
import Date from '../assets/img/calendar.svg'
import { ReviewCard } from '../components/ReviewCard'
import '../styles/disableStyles.css'


const ClientFlow = () => {

  const vehiclesJson = localStorage.getItem('vehicles')
  const vehicles = JSON.parse(vehiclesJson)

  const { item } = useParams()

  const vehicleFlow = vehicles[item]
  console.log(vehicleFlow)

  const [totalValue, setTotalValue] = useState(0)

  const handleCheckboxChange = (value) => {
    setTotalValue(totalValue + value);
  }

  function selectPayment (item) {
    console.log(item.id)
  }

  const payments = [
    { id: 0, text: "Crédito", imgSrc: Card },
    { id: 1, text: "Pix", imgSrc: Pix },
    { id: 2, text: "Dinheiro", imgSrc: Cash}
  ]

  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   const data = {
  //     name: e.target.element.name.value,
  //   }
  //   console.log(data)
  // }

  const [nome, setNome] = useState('')
  const handleChangeNome = (event) => {
    const novoValorNome = event.target.value
    setNome(novoValorNome);
  }

  const [telefone, setTelefone] = useState('')
  const handleChangeTelefone = (event) => {
    const novoValorTelefone = event.target.value
    setTelefone(novoValorTelefone);
  }

  const [modelo, setModelo] = useState('')
  const handleChangeModelo = (event) => {
    const novoValorModelo = event.target.value
    setModelo(novoValorModelo);
  }

  const [placa, setPlaca] = useState('')
  const handleChangePlaca = (event) => {
    const novoValorPlaca = event.target.value
    setPlaca(novoValorPlaca);
  }

  const reviews = [
    { id: 0, text: `${nome}`, imgSrc: User },
    { id: 1, text: `${telefone}`, imgSrc: Phone },
    { id: 2, text: `${modelo} - ${placa}`, imgSrc: vehicleFlow.imgSrc },
    { id: 3, text: "Lavação", imgSrc: Service },
    { id: 4, text: "12/12/2023 - 14:00", imgSrc: Date},
    { id: 5, text: "Cartão", imgSrc: Card}
  ]
  
  return (
    <form>
    <div className='max-w-[800px] mt-[30px] w-full h-auto mx-auto flex flex-col items-center md:mt-[170px]'>
      <h1 className='text-xl md:text-3xl sm:text-2xl px-6'>Bem vindo ao nosso serviço de agendamento!!</h1>
      <div className='w-[80%]'>
        <div>
          <FlowTitle>Informe seus dados pessoais.</FlowTitle>
          <div className='flex flex-col gap-10 py-[15%]'>
            <label className='relative cursor-pointer' >
              <span className='text-2xl text-[#9db8fb] text-opacity-80 top-6 px-1'>Nome</span>
              <input type="text" onChange={handleChangeNome} value={nome} className='h-20 w-full px-4 text-2xl text-gray-700 border-[#9db8fb] border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 transition duration-200' />
            </label>
            <label className='relative cursor-pointer' >
              <span className='text-2xl text-[#9db8fb] text-opacity-80 top-6 px-1'>Telefone</span>
              <input type="number" onChange={handleChangeTelefone} value={telefone} className='h-20 w-full px-4 text-2xl text-gray-700 border-[#9db8fb] border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 transition duration-200' />
            </label>
          </div>
        </div>
        <div>
          <FlowTitle>Informe os dados do veículo.</FlowTitle>
          <div className='flex flex-col gap-10 py-[15%]'>
            <label className='relative cursor-pointer' >
              <span className='text-2xl text-[#9db8fb] text-opacity-80 top-6 px-1'>Modelo</span>
              <input type="text" onChange={handleChangeModelo} value={modelo} className='h-20 w-full px-4 text-2xl text-gray-700 border-[#9db8fb] border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 transition duration-200' />
            </label>
            <label className='relative cursor-pointer' >
              <span className='text-2xl text-[#9db8fb] text-opacity-80 top-6 px-1'>Placa</span>
              <input type="text" onChange={handleChangePlaca} value={placa} className='h-20 w-full px-4 text-2xl text-gray-700 border-[#9db8fb] border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 transition duration-200' />
            </label>
          </div>
        </div>
        <div>
          <FlowTitle>Selecione os serviços desejados.</FlowTitle>
          <div className='flex flex-col gap-10 py-[15%]'>
            <CheckboxInput label="Lavação" value={10} onChange={handleCheckboxChange} />
            <CheckboxInput label="Cera" value={10} onChange={handleCheckboxChange} />
            <CheckboxInput label="Polimento" value={10} onChange={handleCheckboxChange} />
          </div>
        </div>
        <div>
          <FlowTitle>Selecione a data e hora do serviço.</FlowTitle>
          <div className='flex flex-col gap-10 py-[15%]'>
            <Datepicker />
          </div>
        </div>
        <div>
          <FlowTitle>Selecione a forma de pagamento.</FlowTitle>
          <div className='flex flex-col gap-10 py-[15%]'>
            {
              payments.map((payment, index) => (
                <div key={index} className='flex justify-center'>
                <PayCard item={payment} selectPayment={selectPayment} />
                </div>
              ))
            }
          </div>
        </div>
        <div>
          <FlowTitle>Informações finais.</FlowTitle>
          <div className='flex flex-col gap-10 py-[15%]'>
          {
              reviews.map((review, index) => (
                <div key={index} className='flex justify-center'>
                <ReviewCard item={review} />
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 w-full h-[10%] mb-[25%] mt-[10%]'>
        <div className='text-center'>
        <button type='submit' className='bg-green-500/80 text-black py-2 px-6 rounded hover:bg-green-900 hover:text-white duration-300 w-[80%]'>Agendar</button>
        </div>
      </div>
    </div>
    </form>
  )
}

export default ClientFlow