
export const Button = (props) => {
  return (
    <button className="bg-blue-900 text-white py-2 px-6 rounded hover:bg-blue-800 duration-500">
      {props.children}
    </button>
  )
}
