import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useRef } from 'react'
import { useHref } from 'react-router-dom';
import BottomNav from '../../shared/BottomNav';



const pizza = {
    var: ['Small', 'Medium', 'Large', 'Family'],
    crust: ['Thin', 'Medium', 'Thick', 'Italian'],
    add_ons: ['Cheese', 'Sausage', 'Bacon', 'Ex. Topping'],
    spice_level: ['Naga 25%', 'Naga 50%', 'Naga 75%', 'Naga 100%',],
    packaging_box: ['20tk']
}

const Variations = () => {
    const itemId = useHref().split('/')[useHref().split('/').length - 1]

    const base_url = process.env.REACT_APP_BASE_URL

    useEffect(() => {
        axios.get(`${base_url}/api/menu?id=${itemId}`)
            .then(res => {
                console.log(res.data);
            })
            .catch(e => { console.log(e) })
    }, [])




    return (
        <div>
            <div className='fixed mx-auto text-center w-full bg-[#fff] top-0'>
                <div className='title'>
                    <img src='/pb.png' className='mx-auto' />
                </div>
                <p>Variations</p>
                <div className='w-full  overflow-none max-h-[20vh] '>
                    <img src='/brg.png' className='mx-auto w-full max-h-[20vh]  ' />
                </div>
            </div>
            <div className='mt-[34vh] mb-36'>
                {Object.entries(pizza).map(el => {
                    return (<div className=' m-4 p-4 rounded-lg' style={{ boxShadow: ' 0px 5px 10px 0px rgba(0, 0, 0, 0.5)' }}>
                        <p className='mb-2 font-semibold pl-2'>{el[0].toUpperCase().split('_').join(" ")}</p>
                        <div className='flex flex-nowrap gap-4 overflow-x-scroll hide-scroll p-2'>
                            {el[1].map(dt => {
                                return (
                                    <div className=' px-2 py-[.75rem] rounded-lg hover:border-2 hover:border-red-600 ' style={{ boxShadow: ' 0px 5px 10px 0px rgba(0, 0, 0, 0.5)' }}>
                                        <p>{dt}</p>
                                        <p>$550.23</p>
                                    </div>
                                )
                            })}

                        </div>
                    </div>)
                })}

            </div>
            <div className='fixed mx-auto text-center w-full bg-[#fff] bottom-0'>
                <div className='flex gap-4 w-48 bg-red-500 px-4 justify-center mx-auto'>
                    <p>Total</p>
                    <p>$45 tk</p>
                </div>
                <Button>Add</Button>
                <BottomNav />
            </div>

        </div>
    )
}

export default Variations