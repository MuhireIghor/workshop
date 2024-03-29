import React from 'react';
import { Link } from 'react-router-dom';
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Nav.css';

const Nav = () => {
	return (
	
<div className='flex flex-row justify-center items-center w-screen h-16 fixed bg-white mb-8 -z-2 '>
            <div className='flex flex-row pl-4 w-1/2'> 
            <p className='text-2xl text-cyan-600 font-serif'>HOPE-</p>
           <p className='text-2xl text-black font-serif'>Shop</p>
          </div>
 <nav nav className='flex flex-row text-xl justify-end items-end justify-around space-x-2   w-1/2'>
                {navLinks.map(({ navLinkId, scrollToId }, idx) => (
navLinkId === "Explore"?(
<Link className='border-none outline-none  hover:border-none' to='/explore'><NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} /></Link>
                     ):(<Link className='border-none outline-none  hover:border-none' to={'/'}><NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId}  /></Link>)
			))}



                     
            
</nav>

       </div>
	);
};

export default Nav;

