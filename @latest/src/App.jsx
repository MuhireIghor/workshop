import React from 'react';
import {BrowserRouter as Router,Routes,Route, BrowserRouter} from 'react-router-dom';
import NavProvider from './context/NavContext';
import SignUp from './SignUp';
import Main2 from './Main2';
import Nav from './Nav/Nav';
import './App.css';
import Explore from './Explore';
function App() {
    return (
        <div className='flex flex-col space-y-12  w-screen'>
            <Router>
            <NavProvider>
                <Nav />
                <Routes>
             <Route path='/' exact element={<Main2 />} />
             <Route path='/signup' exact element={<SignUp />} />
             <Route path = '/explore' exact element = {<Explore />} />
                </Routes>
            </NavProvider>
            </Router>
        </div>

    )
}
export default App;