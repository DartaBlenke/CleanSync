import 'react-date-picker/dist/DatePicker.css'
import React from 'react'
import { useState } from 'react'
import 'react-calendar/dist/Calendar.css'
import DatePicker from 'react-date-picker'
import '../styles/disableStyles.css'

export const Datepicker = ({ selectedDate }) => {
  const [date, setDate] = useState(null)

  const handleDateChange = (newDate) => {
    setDate(newDate)
    selectedDate(newDate)
  }

  return (
    <label className='relative cursor-pointer'>
      <span className='text-2xl text-[#9db8fb] text-opacity-80 top-6 px-1'>Data</span>
      <DatePicker locale='pt-BR' disableCalendar={true} onChange={handleDateChange} value={date} minDate={new Date()} className='h-20 w-full px-10 sm:px-20 text-xl text-gray-700 border-[#9db8fb] border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200'
      />
    </label>
  )
}
