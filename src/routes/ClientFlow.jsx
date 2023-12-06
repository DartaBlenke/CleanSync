import { useParams, useNavigate } from 'react-router-dom'
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
import supabase from '../config/supabase'
import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ClientFlow = () => {

  const vehiclesJson = localStorage.getItem('vehicles')
  const vehicles = JSON.parse(vehiclesJson)

  const { item } = useParams()

  let vehicleFlow = null;
  if (vehicles && vehicles[item]) {
    vehicleFlow = vehicles[item];
  }

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
    const value = event.target.value.replace(/\D/g, '')
    if (value.length <= 11) {
      setPhone(value)
    }
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

  const [checkBoxWash, setCheckBoxWash] = useState(false);
  const [checkBoxWax, setCheckBoxWax] = useState(false);
  const [checkBoxPolish, setCheckBoxPolish] = useState(false);
  const [labelService, setLabelService] = useState('');

  const handleCheckboxWash = (event) => {
    const newValue = event.target.checked;
    setCheckBoxWash(newValue);
    updateLabel('Lavação', newValue);
  };

  const handleCheckboxWax = (event) => {
    const newValue = event.target.checked;
    setCheckBoxWax(newValue);
    updateLabel('Cera', newValue);
  };

  const handleCheckboxPolish = (event) => {
    const newValue = event.target.checked;
    setCheckBoxPolish(newValue);
    updateLabel('Polimento', newValue);
  };

  const updateLabel = (service, checked) => {
    let updatedLabel = labelService;

    if (checked) {
      if (labelService === '') {
        updatedLabel = `${service}`;
      } else {
        updatedLabel = `${labelService} - ${service}`;
      }
    } else {
      updatedLabel = labelService.replace(` - ${service}`, '').replace(`${service} - `, '').replace(` ${service}`, '');
    }

    setLabelService(updatedLabel);
  };

  const [formattedDate, setFormattedDate] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const selectNewDate = (newDate) => {
    const year = newDate.getFullYear();
    const month = (newDate.getMonth() + 1).toString().padStart(2, '0');
    const day = newDate.getDate().toString().padStart(2, '0');

    const formatted = `${day}/${month}/${year}`;
    setFormattedDate(formatted);

    const formattedISO = `${year}-${month}-${day}`;
    setSelectedDate(formattedISO);
  };


  const [selectedHour, setSelectedHour] = useState(8)
  const getSelectedHour = (newHour) => {
    setSelectedHour(newHour)

  }
  
  const reviews = [
    { id: 0, text: `${name}`, imgSrc: User },
    { id: 1, text: `${phone}`, imgSrc: Phone },
    { id: 2, text: `${model} - ${plate}`, imgSrc: vehicleFlow.imgSrc },
    { id: 3, text: `${labelService} `, imgSrc: Service },
    { id: 4, text: `${formattedDate} - ${selectedHour}h`, imgSrc: Date},
    { id: 5, text: `${paymentLabel}`, imgSrc: Wallet}
  ]

  async function validDateTime(selectedDate, selectedHour) {
    try {
      const { data: records, error } = await supabase
        .from('schedule')
        .select('*')
        .eq('selectedDate', selectedDate)
        .eq('selectedHour', selectedHour);
  
      if (error) {
        throw error;
      }
  
      if (records && records.length > 0) {
        return false; 
      }
  
      return true; 
    } catch (error) {
      throw new Error(`Erro ao validar a data e hora: ${error.message}`);
    }
  }
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (!name || !phone || !model || !plate || !labelService || !selectedDate || !selectedHour || !paymentLabel) {
      toastWarning()
      return;
    }
  
    try {
      const validated = await validDateTime(selectedDate, selectedHour);
  
      if (!validated) {
        toastTimeError()
        return;
      }
  
      const { error } = await supabase
        .from('schedule')
        .insert([{ name, phone, model, plate, labelService, selectedDate, selectedHour, paymentLabel }]);
  
      if (error) {
        toastError()
      } else {
        setTimeout(() => {
          return navigate('/');
        }, 4000);
        return notify();
      }
    } catch (error) {
      console.error(error.message);
      toastError()
    }
  };
  
  const notify = () => toast.success('Agendamento Confirmado!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

  const toastTimeError = () => toast.error('Esse Horário já esta ocupado!', {
    position: "top-center",
    autoClose: 3000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
    });

    const toastError = () => toast.error('Erro ao realizar o agendamento!', {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });

    const toastWarning = () => toast.warning('Preencha todos os campos do formulário!', {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  
  const navigate = useNavigate()
  
  return (
    <form className='h-auto' onSubmit={handleSubmit}>
      <ToastContainer/>
    <div className='max-w-[800px] mt-[30px] w-full mx-auto flex flex-col items-center md:mt-[170px]'>
      <h1 className='text-xl md:text-3xl sm:text-2xl px-6'>Bem vindo ao nosso serviço de agendamento!!</h1>
      <div className='w-[80%]'>
        <div>
          <p className='sm:text-3xl text-2xl md:text-4xl mt-10 font-bold text-blue-900 text-center px-10'>Informe seus dados pessoais.</p>
          <div className='flex flex-col gap-10 py-[15%]'>
            <label className='relative cursor-pointer' >
              <span className='text-2xl text-[#9db8fb] text-opacity-80 top-6 px-1'>Nome</span>
              <input type="text" onChange={handleChangeName} value={name} className='h-20 w-full px-4 text-2xl text-gray-700 border-[#9db8fb] border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 transition duration-200' />
            </label>
            <label className='relative cursor-pointer' >
              <span className='text-2xl text-[#9db8fb] text-opacity-80 top-6 px-1'>Telefone - Com ddd</span>
            <input type="number" maxLength={11} onChange={handleChangePhone} value={phone} className='h-20 w-full px-4 text-2xl text-gray-700 border-[#9db8fb] border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 transition duration-200' />
            </label>
          </div>
        </div>
        <div>
          <p className='sm:text-3xl text-2xl md:text-4xl mt-10 font-bold text-blue-900 text-center px-10'>Informe os dados do veículo.</p>
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
          <p className='sm:text-3xl text-2xl md:text-4xl mt-10 font-bold text-blue-900 text-center px-10'>Selecione os serviços desejados.</p>
          <div className='flex flex-col gap-10 py-[15%]'>
            <label className="text-2xl text-[#9db8fb] w-full cursor-pointer">
              <div className="flex items-center border-2 border-[#9db8fb] border-opacity-50 rounded-lg h-20 ">
                <input type="checkbox" checked={checkBoxWash} onChange={handleCheckboxWash} className="w-5 h-5 mx-6 accent-green-600 border-green-600 rounded cursor-pointer" />
                Lavação - R${washPrice}
              </div>
            </label>
            <label className="text-2xl text-[#9db8fb] w-full cursor-pointer">
              <div className="flex items-center border-2 border-[#9db8fb] border-opacity-50 rounded-lg h-20 ">
                <input type="checkbox" checked={checkBoxWax} onChange={handleCheckboxWax} className="w-5 h-5 mx-6 accent-green-600 border-green-600 rounded cursor-pointer" />
                Cera - R${waxPrice}
              </div>
            </label>
            <label className="text-2xl text-[#9db8fb] w-full cursor-pointer">
              <div className="flex items-center border-2 border-[#9db8fb] border-opacity-50 rounded-lg h-20 ">
                <input type="checkbox" checked={checkBoxPolish} onChange={handleCheckboxPolish} className="w-5 h-5 mx-6 accent-green-600 border-green-600 rounded cursor-pointer" />
                Polimento - R${polishPrice}
              </div>
            </label>
          </div>
        </div>
        <div>
          <p className='sm:text-3xl text-2xl md:text-4xl mt-10 font-bold text-blue-900 text-center px-10'>Selecione a data e hora do serviço.</p>
          <div className='flex flex-col gap-10 py-[15%]'>
            <Datepicker selectedDate={selectNewDate}/>
            <HourSelect selectHour={getSelectedHour} />
          </div>
        </div>
        <div>
          <p className='sm:text-3xl text-2xl md:text-4xl mt-10 font-bold text-blue-900 text-center px-10'>Selecione a forma de pagamento.</p>
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
          <p className='sm:text-3xl text-2xl md:text-4xl mt-10 font-bold text-blue-900 text-center px-10'>Informações finais.</p>
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
      <div className='grid grid-cols-1 w-full h-[100px] mb-[25%] mt-[10%] gap-4'>
        <div className='text-center'>
        <button type='submit' onClick={handleSubmit} className='bg-green-500/80 text-black py-2 px-6 rounded hover:bg-green-900 hover:text-white duration-300 w-[80%] h-[70px]'>Agendar</button>
        </div>
      </div>
    </div>
    </form>
  )
}

export default ClientFlow