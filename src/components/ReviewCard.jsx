import React from 'react'

export const ReviewCard = ({item}) => {

  return (
        <div className='flex flex-row gap-[20%] sm:gap-[30%] md:gap-[35%] items-center w-full h-20 px-4 relative max-x-xs overflow-hidden border-[#9db8fb] border-2 rounded-lg'>
        <div className='text-xl'>
          <img src={item.imgSrc} alt="" className="w-[35px] h-[35px]"/>
        </div>
        <div className='text-xl'>
        {item.text}
        </div>
      </div>
  )
}
