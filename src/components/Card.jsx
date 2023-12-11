import React from 'react'

export default function Card ({item, selectVehicle}) {
  return (
    <div onClick={() => selectVehicle(item)} className='w-[55%] relative max-x-xs overflow-hidden rounded-2xl shadow-xl border-4 border-blue-900/50 hover:border-blue-900'>
      <img src={item.imgSrc} alt="" className='scale-[60%]'/>
      <div>
        <div className='text-center pb-5 text-xl font-bold'>
          {item.text}
        </div>
      </div>
    </div>
  )
}