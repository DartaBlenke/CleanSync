
export const Input = (props) => {
  return (
    <label className='relative cursor-pointer'>
      <input type="text" placeholder="Input" className='h-20 w-full px-4 text-2xl text-gray-700 border-[#9db8fb] border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
      <span className='text-2xl text-[#9db8fb] text-opacity-80 absolute left-5 bg-white top-6 px-1 transition duration-200 input-text'>{props.children}</span>
    </label>
  )
}
