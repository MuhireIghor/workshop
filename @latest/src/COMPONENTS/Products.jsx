import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';


const Products = () => {
    return (
        <div className='flex flex-col p-4 gap-6'>
            <div className='w-full '>
                <p className='text-xl font-semibold'>Products</p>
            </div>
            {/* search box and filter */}
            <div className='flex justify-between'>
                {/* searchbox */}
                <div className='basis-8/12 flex border-[1px] border-black '>
                    <div className='basis-2/12 border-r-[1px] border-black flex items-center justify-center '>
                       <AiOutlineSearch className='text-2xl text-[gray]' /> 
                    </div>
                    <div className='basis-10/12 bg-[red] border-black'>
                      <input type={'text'} placeholder="Search among 100+ products" className='w-full p-2 outline-none '/>
                    </div>
                </div>
                <div className='basis-3/12 '>
<select className='w-full h-full p-2'>
    <option >Popular</option>
    <option >Popular</option>
    <option >Popular</option>
</select>
                </div>
            </div>
        </div>
    )
}

export default Products