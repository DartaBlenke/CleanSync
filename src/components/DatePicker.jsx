import { useState } from 'react'
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import DateTimePicker from 'react-datetime-picker'

export const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <label className='relative cursor-pointer'>
      <DateTimePicker value={selectedDate} onChange={setSelectedDate} className='h-20 w-full px-4 text-2xl text-gray-700 border-[#9db8fb] border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200'/>
    </label>
  )
}
