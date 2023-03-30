import { Button } from '@mui/material'
import axios from 'axios'
import React, { useState } from 'react'
import TextInput from './TextInput'

const AdminPanel = () => {


    const [data, setData] = useState({})

    const setInputData = (name, value) => {
        setData({ ...data, [name]: value })
    }
    const reset = () => {

    }
    const base_url = process.env.REACT_APP_BASE_URL

    const handleSubmit = (e) => {
        axios.post(`${base_url}/api/menu`, data)
        .then(res=>{
            console.log(res.data);
        })
        .catch(e=>console.log(e))
        

    }
    const [type, setType] = useState('menu')


    return (
        <div className='w-[80%] lg:w-1/3 mx-auto'>
            <div className='title'>
                <img src='./pb.png' className='mx-auto' />
            </div>
            <div className='nav grid grid-cols-3 place-items-center  mx-auto gap-8 '>
                <div onClick={() => {
                    setType('outlet')
                }} className='bg-[#6d2f2f5e] px-4 py-2 text-center hover:cursor-pointer hover:bg-[#9d2f2f5e] '>
                    <p>OUTLET</p>
                    <Button>ADD</Button>  <>|</>

                    <Button>Edit</Button>
                </div>

                <div onClick={() => {
                    setType('menu')
                }} className='bg-[#6d2f2f5e] px-4 py-2 text-center hover:cursor-pointer hover:bg-[#9d2f2f5e] '>
                    <p>MENU</p>
                    <Button>ADD</Button>  <>|</>
                    <Button>Edit</Button>
                </div>
                <div onClick={() => {
                    setType('user')
                }} className='bg-[#6d2f2f5e] px-4 py-2 text-center hover:cursor-pointer hover:bg-[#9d2f2f5e] '>
                    <p>User</p>
                    <Button>ADD</Button>  <>|</>
                    <Button>Edit</Button>
                </div>
            </div>
            {type === 'menu' ? (<div className='bg-[#e6d9d913] h-[100vh] py-8 mx-auto text-center'>
                <TextInput label={'Item Name'} name={'name'} setter={setInputData} />
                <TextInput label={'Item Description'} name={'description'} area setter={setInputData} />
                <TextInput label={'Item Type'} name={'category'} setter={setInputData} />
                <TextInput label={'Item Price'} name={'price'} type='number' setter={setInputData} />
                <Button onClick={handleSubmit}>SUmbit</Button>
            </div>) : type === 'outlet' ? (<div className='bg-[#e6d9d913] h-[100vh] p-8 mx-auto text-center'>
                <TextInput label={'Outlet Name'} name={'name'} setter={setInputData} />
                <TextInput label={'Address'} name={'address'} area setter={setInputData} />
                <TextInput label={'Category'} name={'category'} setter={setInputData} />
                <TextInput label={'Rating'} name={'rating'} type='number' setter={setInputData} />
                <Button onClick={handleSubmit}>SUmbit</Button>
            </div>) :
                (<div className='bg-[#e6d9d913] h-[100vh] p-8 mx-auto text-center'>
                    <TextInput label={'Item '} name={'name'} setter={setInputData} />

                    <Button onClick={handleSubmit}>SUmbit</Button>
                </div>)}


        </div>
    )
}

export default AdminPanel