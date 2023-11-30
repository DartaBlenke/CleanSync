import { useParams } from 'react-router-dom'
import { FlowTitle } from '../components/FlowTitle'
import { useState } from 'react'
import { Datepicker } from '../components/DatePicker'
import { HourSelect } from '../components/HourSelect'
import PayCard from '../components/PayCard'
import Pix from '../assets/img/pix.svg'
import Cash from '../assets/img/cash.svg'
import Card from '../assets/img/card.svg'
import Phone from '../assets/img/phone.svg'
import User from '../assets/img/user.svg'
import Service from '../assets/img/service.svg'
import Wallet from '../assets/img/wallet.svg'
import Date from '../assets/img/calendar.svg'
import { ReviewCard } from '../components/ReviewCard'
import '../styles/disableStyles.css'


const ClientFlow = () => {

  const vehiclesJson = localStorage.getItem('vehicles')
  const vehicles = JSON.parse(vehiclesJson)

  const { item } = useParams()

  const vehicleFlow = vehicles[item]

  const washPrice = vehicleFlow.prices[0]
  const waxPrice = vehicleFlow.prices[1]
  const polishPrice = vehicleFlow.prices[2]

  const payments = [
    { id: 0, text: "Cartão", imgSrc: Card },
    { id: 1, text: "Pix", imgSrc: Pix },
    { id: 2, text: "Dinheiro", imgSrc: Cash}
  ]
  
  const [selectedPayment, setSelectedPayment] = useState(null)
  const [paymentLabel, setPaymentLabel] = useState('')
  const selectPayment = (paymentId) => {
    let label = ''
    setSelectedPayment(paymentId)
    if(paymentId === 0) {
      label = 'Cartão'
    } else if (paymentId === 1) {
      label = 'Pix'
    } else {
      label = 'Dinheiro'
    }
    setPaymentLabel(label)
  }

  const [name, setName] = useState('')
  const handleChangeName = (event) => {
    const newValueName = event.target.value
    setName(newValueName)
  }

  const [phone, setPhone] = useState('')
  const handleChangePhone = (event) => {
    const newValuePhone = event.target.value
    setPhone(newValuePhone)
  }

  const [model, setModel] = useState('')
  const handleChangeModel = (event) => {
    const newValueModel = event.target.value
    setModel(newValueModel)
  }

  const [plate, setPlate] = useState('')
  const handleChangePlate = (event) => {
    const newValuePlate = event.target.value
    setPlate(newValuePlate)
  }

  const [checkBoxWash, setCheckBoxWash] = useState(false)
  const handleCheckboxWash = (event) => {
    const newValue = event.target.checked
    setCheckBoxWash(newValue)
    checkBoxReview(1)
  }

  const [checkBoxWax, setCheckBoxWax] = useState(false)
  const handleCheckboxWax = (event) => {
    const newValue = event.target.checked
    setCheckBoxWax(newValue)
    checkBoxReview(2)
  }

  const [checkBoxPolish, setCheckBoxPolish] = useState(false)
  const handleCheckboxPolish = (event) => {
    const newValue = event.target.checked
    setCheckBoxPolish(newValue)
    checkBoxReview(3)
  }

  const [labelReview, setLabelReview] = useState('')
  const checkBoxReview = (serviceSelected) => {
    let label = ''
    if (serviceSelected == 1) {
      label = 'Lavação'
    } else if (serviceSelected == 2) {
      label = 'Cera'
    } else if (serviceSelected == 3) {
      label = 'Polimento'
    } else {
      label = ''
    }
    setLabelReview(label)
  }

  const [selectedDate, setSelectedDate] = useState(null)
  const selectNewDate = (newDate) => {
    const day = newDate.getDate().toString().padStart(2, '0')
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0')
    const year = newDate.getFullYear()

    const formattedDate = `${day}/${month}/${year}`

    console.log(formattedDate)
    setSelectedDate(formattedDate)
  }

  const [selectedHour, setSelectedHour] = useState(8)
  const getSelectedHour = (newHour) => {
    setSelectedHour(newHour)

  }

  // const onSubmit = (e) => {
  //   e.preventDefault()
  //   const data = {
  //     name: e.target.element.name.value,
  //   }
  //   console.log(data)
  // }

  const reviews = [
    { id: 0, text: `${name}`, imgSrc: User },
    { id: 1, text: `${phone}`, imgSrc: Phone },
    { id: 2, text: `${model} - ${plate}`, imgSrc: vehicleFlow.imgSrc },
    { id: 3, text: `${labelReview}`, imgSrc: Service },
    { id: 4, text: `${selectedDate} - ${selectedHour}h`, imgSrc: Date},
    { id: 5, text: `${paymentLabel}`, imgSrc: Wallet}
  ]
  
  return (
    <form className='h-auto'>
    <div className='max-w-[800px] mt-[30px] w-full mx-auto flex flex-col items-center md:mt-[170px]'>
      <h1 className='text-xl md:text-3xl sm:text-2xl px-6'>Bem vindo ao nosso serviço de agendamento!!</h1>
      <div className='w-[80%]'>
        <div>
          <FlowTitle>Informe seus dados pessoais.</FlowTitle>
          <div className='flex flex-col gap-10 py-[15%]'>
            <label className='relative cursor-pointer' >
              <span className='text-2xl text-[#9db8fb] text-opacity-80 top-6 px-1'>Nome</span>
              <input type="text" onChange={handleChangeName} value={name} className='h-20 w-full px-4 text-2xl text-gray-700 border-[#9db8fb] border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 transition duration-200' />
            </label>
            <label className='relative cursor-pointer' >
              <span className='text-2xl text-[#9db8fb] text-opacity-80 top-6 px-1'>Telefone</span>
              <input type="number" onChange={handleChangePhone} value={phone} className='h-20 w-full px-4 text-2xl text-gray-700 border-[#9db8fb] border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 transition duration-200' maxLength={11} />
            </label>
          </div>
        </div>
        <div>
          <FlowTitle>Informe os dados do veículo.</FlowTitle>
          <div className='flex flex-col gap-10 py-[15%]'>
            <label className='relative cursor-pointer' >
              <span className='text-2xl text-[#9db8fb] text-opacity-80 top-6 px-1'>Modelo</span>
              <input type="text" onChange={handleChangeModel} value={model} className='h-20 w-full px-4 text-2xl text-gray-700 border-[#9db8fb] border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 transition duration-200' />
            </label>
            <label className='relative cursor-pointer' >
              <span className='text-2xl text-[#9db8fb] text-opacity-80 top-6 px-1'>Placa</span>
              <input type="text" onChange={handleChangePlate} value={plate} className='h-20 w-full px-4 text-2xl text-gray-700 border-[#9db8fb] border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 transition duration-200 text-transform: uppercase'  maxLength={7} />
            </label>
          </div>
        </div>
        <div>
          <FlowTitle>Selecione os serviços desejados.</FlowTitle>
          <div className='flex flex-col gap-10 py-[15%]'>
            <label className="text-2xl text-[#9db8fb] w-full cursor-pointer">
              <div className="flex items-center border border-[#9db8fb] rounded h-20 ">
                <input type="checkbox" checked={checkBoxWash} onChange={handleCheckboxWash} className="w-5 h-5 mx-6 accent-green-600 border-green-600 rounded cursor-pointer" />
                Lavação - R${washPrice}
              </div>
            </label>
            <label className="text-2xl text-[#9db8fb] w-full cursor-pointer">
              <div className="flex items-center border border-[#9db8fb] rounded h-20 ">
                <input type="checkbox" checked={checkBoxWax} onChange={handleCheckboxWax} className="w-5 h-5 mx-6 accent-green-600 border-green-600 rounded cursor-pointer" />
                Cera - R${waxPrice}
              </div>
            </label>
            <label className="text-2xl text-[#9db8fb] w-full cursor-pointer">
              <div className="flex items-center border border-[#9db8fb] rounded h-20 ">
                <input type="checkbox" checked={checkBoxPolish} onChange={handleCheckboxPolish} className="w-5 h-5 mx-6 accent-green-600 border-green-600 rounded cursor-pointer" />
                Polimento - R${polishPrice}
              </div>
            </label>
          </div>
        </div>
        <div>
          <FlowTitle>Selecione a data e hora do serviço.</FlowTitle>
          <div className='flex flex-col gap-10 py-[15%]'>
            <Datepicker selectedDate={selectNewDate}/>
            <HourSelect selectHour={getSelectedHour} />
          </div>
        </div>
        <div>
          <FlowTitle>Selecione a forma de pagamento.</FlowTitle>
          <div className='flex flex-col gap-10 py-[15%]'>
            {
              payments.map((payment, index) => (
                <div key={index} className='flex justify-center'>
                <PayCard item={payment} onClick={selectPayment} selected={selectedPayment === payment.id} setSelected={setSelectedPayment} />
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
      <div className='grid grid-cols-1 w-full h-[100px] mb-[25%] mt-[10%]'>
        <div className='text-center'>
        <button type='submit' className='bg-green-500/80 text-black py-2 px-6 rounded hover:bg-green-900 hover:text-white duration-300 w-[80%] h-[70px]'>Agendar</button>
        </div>
      </div>
    </div>
    </form>
  )
}

export default ClientFlow