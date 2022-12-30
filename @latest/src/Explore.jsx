import React from 'react';
import { FiSearch,FiShoppingBag } from 'react-icons/fi';
import Products from './COMPONENTS/Products';
import SideBar from './COMPONENTS/SideBar';


const Explore = () => {
    
  return (
 <div className='flex h-screen relative'>
  <div className='basis-2/12 fixed '>
<SideBar />
  </div>
  <div className='basis-9/12 ml-[350px] mt-24 -z-30 '>
<Products />
  </div>

 </div>

  )
}

export default Explore