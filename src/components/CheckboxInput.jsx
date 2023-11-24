import { useState } from 'react'

export const CheckboxInput = ({ label, value, onChange }) => {
  const [checkBoxValue, setCheckBoxValue] = useState(false)

  const handleCheckboxChange = (event) => {
    const newValue = event.target.checked
    setCheckBoxValue(newValue)
    onChange(newValue ? value : 0)
  }

  return (
    <label className="text-2xl text-[#9db8fb] w-full cursor-pointer">
      <div className="flex items-center border border-[#9db8fb] rounded h-20 ">
        <input type="checkbox" checked={checkBoxValue} onChange={handleCheckboxChange} className="w-5 h-5 mx-6 accent-green-600 border-green-600 rounded cursor-pointer"/>
        {label}
      </div>
    </label>
  );
};
