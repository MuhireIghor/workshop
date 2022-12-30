<<<<<<< HEAD
import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';


=======
import React,{useState} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { dataset } from '../Data/Data';
import Pagination from './Pagination';
import Product from './Product';
>>>>>>> 79af5ec35291297b05f20d0910a5a1e057a31479
const Products = () => {

    const[currentPage,setCurrentPage] = useState(1);
    const postPerPage = 4;
    const indexOfLastProd = currentPage*postPerPage;
    const indexOfFirstProd = indexOfLastProd-postPerPage;
    const currentPost = dataset.slice(indexOfFirstProd,indexOfLastProd);
    const paginate = (pageno )=> setCurrentPage(pageno);


    return (
        <div className='flex flex-col p-4 gap-6'>
            <div className='w-full '>
                <p className='text-xl font-semibold'>Products</p>
            </div>
            {/* search box and filter */}
            <div className='flex justify-between'>
                {/* searchbox */}
<<<<<<< HEAD
                <div className='basis-8/12 flex border-[1px] border-black '>
                    <div className='basis-2/12 border-r-[1px] border-black flex items-center justify-center '>
                       <AiOutlineSearch className='text-2xl text-[gray]' /> 
=======
                <div className='basis-8/12 flex border-[1px] border-[gray] '>
                    <div className='basis-2/12 border-r-[1px] border-[gray] flex items-center justify-center '>
                        <AiOutlineSearch className='text-2xl text-[gray]' />
>>>>>>> 79af5ec35291297b05f20d0910a5a1e057a31479
                    </div>
                    <div className='basis-10/12 bg-[red] border-black'>
                        <input type={'text'} placeholder="Search among 100+ products" className='w-full p-2 outline-none ' />
                    </div>
                </div>
                <div className='basis-3/12 '>
<<<<<<< HEAD
<select className='w-full h-full p-2'>
    <option >Popular</option>
    <option >Popular</option>
    <option >Popular</option>
</select>
=======
                    <select className='w-full  h-full p-2 outline-none'>
                        <option>Popular</option>
                        <option>Popular</option>
                        <option>Popular</option>
                    </select>

>>>>>>> 79af5ec35291297b05f20d0910a5a1e057a31479
                </div>
            </div>
            {/* products */}
            <div>
                <Pagination totalPosts={dataset.length} postsPerPage={postPerPage} paginate={paginate} />
            </div>
            <div className='flex  grid grid-cols-3 gap-2'>
                {currentPost.map((prod)=>{
                    return(
                        <div className='flex flex-col h-[400px]  '>
                            <Product image={prod.imgUrl} description={prod.description} price={prod.price}  />
                        </div>
                    )
                })}

            </div>

        </div>
    )
}

export default Products