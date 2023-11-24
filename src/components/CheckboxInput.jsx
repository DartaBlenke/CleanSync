import { useState } from 'react'

export const CheckboxInput = ({ label, value, onChange }) => {
  const [checkBoxValue, setCheckBoxValue] = useState(false)

  const handleCheckboxChange = (event) => {
    const newValue = event.target.checked
    setCheckBoxValue(newValue)
    onChange(newValue ? value : 0)
  }

  return (
    <div>
      <label>
        <input type="checkbox" checked={checkBoxValue} onChange={handleCheckboxChange} />
        {label}
      </label>
    </div>
  );
};
