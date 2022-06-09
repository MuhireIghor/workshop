import React from 'react';
import Body from '../Body';
import Navbar from '../Navbar';
function Home(){
    return(
        <div className='flex flex-col space-y-2'>
            <Navbar  rout='Home' />
            <Body />




        </div>
    )
}
export default Home;