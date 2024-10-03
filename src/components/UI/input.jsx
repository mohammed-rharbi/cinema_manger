import React from 'react'


export default function Input({label, type, name, value, placeholder , onChange}) {


        
  return (

    <div>
    <label htmlFor="input" className="font-semibold text-xs text-gray-400">{label}</label>
    <input
    type={type}
    name={name}
    value={value}
    placeholder={placeholder}
    onChange={onChange}
    className="border rounded-lg w-50 px-3 py-2 mb-5 text-white text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900"

    />
    </div>

  )
}
