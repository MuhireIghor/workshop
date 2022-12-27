import { Input } from 'postcss';
import React, { useState, useEffect } from 'react';
import { formatCurrency } from '../utils/currencyFormat';
import InputField from './InputField';
import '../css/sidebar.css'

const SideBar = () => {
    const minimumP = 1000;
    const maxP = 20000;
    const [price, setPrice] = useState(minimumP);

    const [category, setCategory] = useState(null);
    const [color, setColor] = useState(null);
    const handlePrice = (e) => {
        console.log(price);
        setPrice(e.target.value);
        console.log(price);
    }
    const handleCategory = (e) => {
        setCategory(e.target.value);
        console.log(price);
    }
    const handleColor = (e) => {
        setColor(e.target.value);
        console.log(price);
    }

    return (
        <div className='flex p-4 border-r-4 border-gray-400 h-screen'>
            <div className='flex flex-col mt-12  basis-2/12 gap-4'>
                <div className='flex flex-col '>
                    <InputField name="Price" type={'range'} handler={handlePrice} value={price} max={maxP} min={100} step={10} style={{ width: "290px" }} />
                    <div>{formatCurrency(price)}</div>
                    <div className='flex gap-4 w-1/3'>
                        <div className='flex bg-[gray]/30 p-2 rounded-[4px] gap-4 text-center '>
                            <p className='text-[gray]/30 text-md font-semibold'>From</p>
                            <p className='text-md font-medium'>{formatCurrency(minimumP)}</p>
                        </div>
                        <div className='flex bg-[gray]/30 p-2 rounded-[4px] gap-4 text-center '>
                            <p className='text-[gray]/30 text-md font-semibold'>To </p>
                            <p className='text-md font-medium'>{formatCurrency(maxP)}</p>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col '>
                    <InputField name="Category" />
                    <div className='flex flex-col gap-2 w-1/3  overflow-y-scroll'>
                        <div className='flex justify-between items-baseline '>
                            <label>Men</label>
                            <input type={'checkbox'} value={category} />
                        </div>
                        <div className='flex justify-between items-baseline'>
                            <label>WoMen</label>
                            <input type={'checkbox'} value={category} />
                        </div>
                        <div className='flex justify-between items-baseline'>
                            <label>Men</label>
                            <input type={'checkbox'} value={category} />
                        </div>
                    </div>
                </div>
                <div className='flex flex-col '>
                    <InputField name="Color" />
                    <div className='flex flex-col gap-2 w-1/3  overflow-y-scroll'>
                        <div className='flex justify-between items-baseline '>
                            <label>Men</label>
                            <input type={'checkbox'} value={category} />
                        </div>
                        <div className='flex justify-between items-baseline'>
                            <label>WoMen</label>
                            <input type={'checkbox'} value={category} />
                        </div>
                        <div className='flex justify-between items-baseline'>
                            <label>Men</label>
                            <input type={'checkbox'} value={category} />
                        </div>
                    </div>

                </div>
                <div className='w-full flex  items-center p-1 gap-2'>
                    <div className='bg-blue-200 rounded-[5px] flex  w-full h-12 items-center justify-center basis-9/12 text-white font-bold '>
                        <button className='font-semibold 'disabled="false">Apply Filter</button>
                    </div>
                    <div className='flex items-center justify-center basis-2/12 '>
                        <button className='bg-white rounded-full flex  w-12 h-12 border-[1px] border-[gray] ' disabled="false">Apply Filter</button>
                    </div>
                  
                </div>
            </div>
       

        </div>
    )
}

export default SideBar