import React from 'react'

const Pagination = ({postsPerPage,totalPosts,paginate}) => {
    const pageNumber = [];
    for(let i =1;i<=Math.ceil(totalPosts/postsPerPage);i++){
pageNumber.push(i);
    }
  return (
    <div className='flex gap-1'>
 {pageNumber.map((pageno)=>{
    return(
        <div className='flex items-center justify-center border-[1px] border-blue-200'>
            <button className='text-blue-200 w-24' onClick={()=> paginate(pageno)} >{pageno}</button>
        </div>
    )
 })}
    </div>
  )
}

export default Pagination