import React from 'react';
import NavProvider from './context/NavContext';
import Main2 from './Main2';
import Nav from './Nav/Nav';
import './App.css';
function App() {
    return (
        <div className='flex flex-col space-y-12  w-screen'>
            <NavProvider>
                <Nav />
                <Main2 />
            </NavProvider>
        </div>

    )
}
export default App;