
export const Input = (props) => {
  return (
    // <input className="rounded-md w-full px-4 py-3 text-sm text-gray-700 gray-200 border-2 border-[#B0C6FF] bg-white placeholder:bg-gray-200 placeholder-shown:border-none placeholder-transparent">
    //   {props.children}
    // </input>
    <label className='relative cursor-pointer'>
      <input type="text" placeholder="Input" className='h-20 w-full px-4 text-2xl text-gray-700 border-[#9db8fb] border-2 rounded-lg border-opacity-50 outline-none focus:border-blue-500 placeholder-gray-300 placeholder-opacity-0 transition duration-200' />
      <span className='text-2xl text-[#9db8fb] text-opacity-80 absolute left-5 bg-white top-6 px-1 transition duration-200 input-text'>{props.children}</span>
    </label>
  )
}
