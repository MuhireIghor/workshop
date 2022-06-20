import React from 'react';
import About from './About';
import Body from './Body';
import Navbar from './Navbar';
import './App.css';
import Testimonials from './Testimonials';
function App(){
    return(


        <div className='flex flex-col space-y-12  w-screen'>
            <Navbar rout="Home"/>
            <Body />
            <About />
            <Testimonials title = "Testimonials" />
    





        </div>
        
    )
}
export default App;