import React from 'react';
import { BsFillEmojiLaughingFill } from 'react-icons/bs';

const Admin = () => {
    return (
        <div className='flex items-center justify-center w-full h-screen'>
            <div className='w-1/2 h-2/3 bg-white  flex flex-col p-4'>
                <div className='w-full flex items-center justify-center gap-12'>
                    <p className='text-2xl font-medium tracking-wider '>Welcome Admin</p>
                    <BsFillEmojiLaughingFill className='text-xl text-[green]' />
                </div>
                <div className='w-full h-full flex items-center justify-center '>

                    <div className='bg-white border-[1px] border-[#F6FBF9] w-2/3 h-5/6 rounded-[12px] bg-[#F6FBF9] flex flex-col gap-4'>
                        <div className='w-full flex flex-col items-center justify-center p-4 gap-2'>
                            <p className='text-4xl font-semibold tracking-wider '>Login</p>
                            <p>Log In to access Admin Dashboard</p>
                        </div>
                        <div className='flex flex-col w-full items-center justify-center gap-4 '>
                            <div className='w-full flex items-center justify-center'>
                                <input type={'email'} placeholder='Email' required className='py-2 w-3/4 pl-12 border-[1px] border-[gray] rounded-[5px] outline-none' />
                            </div>
                            <div className='w-full flex items-center justify-center'>
                                <input type={'password'} placeholder='Password' required className='py-2 w-3/4 pl-12  border-[1px] border-[gray] rounded-[5px] outline-none' />
                            </div>

                        </div>
                        <div className='flex flex-col w-full items-center justify-center gap-4 mt-4'> 
                        <div className='w-full flex items-center justify-center'>
                            <button className='bg-blue-200 text-xl text-white w-1/2 p-2 rounded-[4px]'>Login</button>
                            </div>
                        </div>
                        <div className='flex flex-col w-full items-center justify-center '> 
        
                            <a className='text-xl text-[#F6FBF9;] rounded-[4px]' href='#'>Forgot Password</a>
                         
                        </div>

                    </div>
                </div>


            </div>


        </div>
    )
}

export default Admin