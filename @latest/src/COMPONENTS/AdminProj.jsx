import React from 'react'
import Admindash from './Admindash'
import AdminProdList from './AdminProdList'

const AdminProj = () => {
    return (
        <div className='flex relative '>
            <div className='basis-3/12 '>
                <Admindash />
            </div>
            <div className='flex basis-8/12  bg-[red]'>
              <AdminProdList />
            </div>

        </div>
    )
}

export default AdminProj