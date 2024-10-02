import React from 'react'


export default function Input({label, type, name, value, placeholder , onChange}) {

        const handleChange = (e) => {
            const {value} = e.target ;
            onChange(value);
        };
        
  return (

    <div>
    <label htmlFor="input" class="font-semibold text-xs text-gray-400">{label}</label>
    <input
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={handleChange}
    class="border rounded-lg w-50 px-3 py-2 mb-5 text-white text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"

    />
    </div>

  )
}
