import React from 'react';
const lists = [ {status:'Active',value:'Home'},{status:'Inactive',value:'Products'},{status:'Inactive',value:'Services'},{status:'Inactive',value:'About us'}];
function Navbar({rout}){
    const activeClass = 'list-none text-cyan-800 text-md hover:cursor-pointer';
    const inactiveclass = 'list-none text-black text-md hover:cursor-wait'
    return(
        <div className='flex flex-row justify-center items-center w-screen h-16  '>
            <div className='flex flex-row pl-4 w-1/2'>
                <p className='text-2xl text-cyan-600 font-serif'>HOPE-</p>
            <p className='text-2xl text-black font-serif'>Shop</p>
            </div>
            <div className='flex flex-row text-xl justify-end items-end justify-around space-x-2   w-1/2'>
                {lists.map((list,index)=>{
                    
                    return(
                        <div>
                            
                            <li key={index} className={list.value === rout ? activeClass:inactiveclass}>{list.value}</li>


                        </div>
                    )

                })}
            </div>


        </div>
    )
}
export default Navbar;