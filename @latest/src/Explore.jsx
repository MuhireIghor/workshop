import React from 'react';
import { FiSearch,FiShoppingBag } from 'react-icons/fi';
import Products from './COMPONENTS/Products';
import SideBar from './COMPONENTS/SideBar';


const Explore = () => {
    
  return (
 <div className='flex h-screen'>
  <div className='basis-2/12'>
<SideBar />
  </div>
  <div className='basis-9/12 mt-24'>
<Products />
  </div>

 </div>

  )
}

export default Explore