import React from 'react'


export default function PayCard({ item, onClick, selected, setSelected }) {
  const handleClick = () => {
    if (selected) {
      setSelected(null)
    } else {
      setSelected(item.id)
    }

    onClick && onClick(item.id)
  }
  return (
    <div onClick={handleClick} id={item.id} className={`flex flex-row gap-[20%] sm:gap-[30%] md:gap-[35%] items-center w-full h-20 px-4 relative max-x-xs overflow-hidden border-2 rounded-lg hover:border-blue-900 ${selected === true ? 'border-[#1c47b3]' : 'border-[#9db8fb]'}`}>
      <div className='text-xl'>
        <img src={item.imgSrc} alt=""/>
      </div>
      <div className='text-xl'>
      {item.text}
      </div>
    </div>
  )
}