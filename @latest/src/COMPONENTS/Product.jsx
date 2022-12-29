import React from 'react'
import { AiFillHeart } from 'react-icons/ai';
import { BsFillBookmarkPlusFill } from 'react-icons/bs';
import { formatCurrency } from '../utils/currencyFormat';
const Product = ({ image, description, price }) => {
    return (
        <div className='flex flex-col relative h-full rounded-[5px] border-[1px] border-[gray] gap-2  divide-y-2  '>
            <div className='w-full relative flex flex-col h-2/4 p-4'>
                <div className='w-8 h-8 rounded-full bg-white flex items-center justify-center z-30 absolute right-2  border-[1px] border-[gray] '>
                    <AiFillHeart className='text-xl text-[gray]' />
                </div>
                <div className='w-full h-2/3 flex bg-[red] '>
                    <img src={image} className=' h-full object-contain w-full ' />
                </div>
            </div>
            <div className='w-full h-1/4 p-2'>
                <p>{description}</p>
            </div>
            <div className='w-full flex flex-col relative h-1/4 p-2'>
                <div className='w-full absolute'>
                    <p>Price:</p>
                    <p>{formatCurrency(price)}</p>
                </div>
                <div className='w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center z-30 absolute right-2 mt-4'>
                    <BsFillBookmarkPlusFill className='text-xl text-[gray]' /> 
                </div>

            </div>

        </div>
    )
}

export default Product;