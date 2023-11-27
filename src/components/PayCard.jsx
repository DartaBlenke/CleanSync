export default function PayCard ({item}) {
  return (
    <div className='flex flex-row gap-[20%] sm:gap-[30%] md:gap-[35%] items-center w-full h-20 px-4 relative max-x-xs overflow-hidden border-[#9db8fb] border-2 rounded-lg hover:border-blue-900'>
      <div className='text-xl'>
        <img src={item.imgSrc} alt=""/>
      </div>
      <div className='text-xl'>
      {item.text}
      </div>
    </div>
  )
}