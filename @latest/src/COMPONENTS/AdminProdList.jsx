import React from 'react'
import AdminNav from './AdminNav';
import { AiFillDelete } from 'react-icons/ai';
import { AiFillSave } from 'react-icons/ai';
import { dataset2 } from '../Data/AdminData';

const AdminProdList = () => {
  return (
    <div className='flex flex-col w-full p-2'>
      <AdminNav />
      <div className='flex flex-col w-full'>
        <div className='w-full flex items-center justify-start'>
          <p className='text-xl font-semibold'>Products</p>
        </div>
        <div className='w-full flex flex-col '>
          <table>
            <thead>
              <tr className='border-2  '>
                <th className='border-2'>No</th>
                <th className='border-2'>Name</th>
                <th className='border-2'>Qty</th>
                <th className='border-2'>Description</th>
                <th className='border-2'>Colors</th>
                <div className='text-xl font-semibold'>Actions</div>
                <th className='border-2'>Image</th>
              <th className='border-2'>Price</th>




              </tr>

            </thead>
            <tbody>
              {dataset2.map((data)=>{
                return(
                  <>
                  <tr>
                    
                  <td className='border-2'>{data.id}</td>
                  <td className='border-2'>{data.name}</td>
                  <td className='border-2'>{data.qty}</td>
                  <td className='border-2'>{data.description}</td>
                  <td className='border-2'>{data.colors}</td>
    
                  <div className='w-full flex h-12 items-center justify-between p-4  border-r-2 border-b-2'>
                    <div className=' '>
                      <button className='bg-blue-200 h-8 w-8 rounded-full flex items-center justify-center'>
                        <AiFillSave className='' />
                      </button>
                    </div>
                    <div className=''>
                      <button className='bg-red-200 h-8 w-8 rounded-full flex items-center justify-center'>
                        <AiFillDelete />
                      </button>
                    </div>
                  </div>
                  <td className='h-12 border-y-2 border-r-2'><img src={data.imgUrl} className='object-contain h-full' /> </td>
                  <td className='border-2'>{data.price}</td>
                  </tr>
                  </>

                )
              })}



            </tbody>
          </table>

        </div>

      </div>
    </div>
  )
}

export default AdminProdList