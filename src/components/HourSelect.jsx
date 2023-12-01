import { useState } from 'react'
import React from 'react'

export const HourSelect = ({ selectHour }) => {
  const [hour, setHour] = useState(8)

  const handleChangeHour = (e) => {
    const newHour = parseInt(e.target.value)
    setHour(newHour)
    selectHour(newHour)
  }
  const horas = Array.from({ length: 10 }, (_, index) => index + 8)

  return (
    <label className='relative cursor-pointer'>
      <span className='text-2xl text-[#9db8fb] text-opacity-80 top-6 px-1'>
        Horário
      </span>
      <select value={hour} onChange={handleChangeHour} className='bg-white h-20 w-full px-10 sm:px-20 text-xl text-gray-700 border-[#9db8fb] border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 transition duration-200'>
        {
          horas.map((hora) => (
            <option key={hora} value={hora}>
              {hora}:00
            </option>
          ))
        }
      </select>
    </label>
  )
}
