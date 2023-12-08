
export const Input = (props, value, onChange) => {

  return (
    <label className='relative cursor-pointer' >
      <span className='text-2xl text-[#9db8fb] text-opacity-80 top-6 px-1'>{props.children}</span>
      <input type="text" onChange={onChange} value={value} className='h-20 w-full px-4 text-2xl text-gray-700 border-[#9db8fb] border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 transition duration-200' />
    </label>
  )
}
