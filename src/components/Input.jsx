
export const Input = (props) => {
  return (
    <input className="rounded-md w-full px-4 py-3 text-sm text-gray-700 gray-200 border-2 focus:bg-white bg-white placeholder:bg-gray-200 placeholder-shown:border-none placeholder-transparent">
      {props.children}
    </input>
  )
}
