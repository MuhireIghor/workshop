import React,{useState} from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { dataset } from '../Data/Data';
import Pagination from './Pagination';
import Product from './Product';
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
                <div className='basis-8/12 flex border-[1px] border-[gray] '>
                    <div className='basis-2/12 border-r-[1px] border-[gray] flex items-center justify-center '>
                        <AiOutlineSearch className='text-2xl text-[gray]' />
                    </div>
                    <div className='basis-10/12 bg-[red] border-black'>
                        <input type={'text'} placeholder="Search among 100+ products" className='w-full p-2 outline-none ' />
                    </div>
                </div>
                <div className='basis-3/12 '>
                    <select className='w-full  h-full p-2 outline-none'>
                        <option>Popular</option>
                        <option>Popular</option>
                        <option>Popular</option>
                    </select>

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