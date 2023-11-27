import { useState } from 'react'
import DatePicker from 'react-datepicker'

export const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(null)

  return (
    <label className='relative cursor-pointer'>
      <DatePicker selected={selectedDate} onChange={date => setSelectedDate(date)} className='h-20 w-full px-4 text-2xl text-gray-700 border-[#9db8fb] border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200'/>
    </label>
  )
}
