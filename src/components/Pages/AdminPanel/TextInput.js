import React, { useState } from 'react'

const TextInput = ({ label, name, type = 'text', area = false,setter }) => {


    const [value, setValue] = useState('')

    const handleChange = e => {
        
        setValue(e.target.value)
        setter(name, e.target.value)
    }

    return (
        <div className='border-[2px] mb-1 mx-8 rounded-xl border-black grid grid-cols-3 i px-8 py-4'>
            <label className='text-xl text-end pr-8 '>{label}</label>
            {!area ? <input name={name} className='bg-[#f2f2f2] px-4 outline-none border-none rounded-md col-span-2' type={type} value={value} onChange={handleChange} /> :
                <textarea name={name} className='bg-[#f2f2f2] px-4 outline-none border-none rounded-md col-span-2' type={type} value={value} onChange={handleChange} />}
        </div>
    )
}

export default TextInput