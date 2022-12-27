import React from 'react'

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
                    <div className='basis-2/12 bg-[green] border-r-[1px] border-black '>
                        
                    </div>
                    <div className='basis-10/12 bg-[red] border-black'>
                      <input type={'text'} placeholder="Search among 100+ products" className='w-full p-2 outline-none '/>
                    </div>
                </div>
                <div className='bg-[orange] basis-3/12'>
hdhsjds
                </div>
            </div>
        </div>
    )
}

export default Products