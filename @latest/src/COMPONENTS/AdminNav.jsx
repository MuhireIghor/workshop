import React from 'react'

const AdminNav = () => {
    return (
        <div className='flex items-center '>
            <div className='flex flex-col basis-2/12 '>
                <p className='text-xl font-semibold tracking-wider'>Products</p>
                <p>Statistics</p>
            </div>
            <div className='flex basis-9/12 bg-[green]'>
                <div className='flex flex-col'>
                    <p>Seller1</p>
                    <p>Admin</p>
                </div>
                <div>
                    <img src='../../src/Assets/index-removebg-preview(1).png' />
                </div>

            </div>


        </div>
    )
}

export default AdminNav