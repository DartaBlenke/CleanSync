import { useState } from 'react'
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';
import DateTimePicker from 'react-datetime-picker'
import '../styles/datetimepicker.css'

export const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date())

  return (
    <label className='relative cursor-pointer'>
      <DateTimePicker locale='pt-BR' disableClock={true} disableCalendar={true} minDate={new Date()} value={selectedDate} onChange={setSelectedDate} className='h-20 w-full px-10 sm:px-20 text-xl text-gray-700 border-[#9db8fb] border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200'/>
    </label>
  )
}
