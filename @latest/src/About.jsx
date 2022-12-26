import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNav } from './context/useNav';
import { AiFillHome } from 'react-icons/ai';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';
import pic from './Images/LOGO2.png';
import { useRef } from 'react';
import { useEffect } from 'react';
function About() {
    const [act, setAct] = useState(false);
    const [text, setText] = useState('');
    const clickHandler = (e) => {
        setAct(!act)
        console.log(act);
    }
    const aboutRef = useNav('About');
    const actContent = useRef();

    useEffect(() => {
      const clickEvent = document.addEventListener("mousedown", ()=>{
        if(!actContent.current.contains(event.target)) setAct(false)
      })
      return () => document.removeEventListener("mousedown", clickEvent)    
    })
    
    return (

        <section ref={aboutRef} id='aboutCont' className="about flex flex-row h-screen w-screen">
            <div className="image w-1/2 h-1/2" >
                <img src={pic} alt='Text' className=' full w-3/4 h-full pl-4 ' />
            </div>
            <div className="texts flex flex-col w-1/2 space-y-4">
                <p className="tit w-full text text-2xl font-semibold text-black">Hope store Facilities</p>
                <p className="sub w-full text-xl text-black">About Our products</p>
                <p className="main w-full">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ad animi tempore quae enim, cum sint illo impedit dicta reiciendis nobis, sed, aliquid unde. Voluptas unde vitae voluptatem ut dolorum natus illo harum vel, mollitia, laudantium eaque accusantium et! Harum, voluptatibus.</p>
                <div className="but w-1/2 flex flex-col items-center justify-center">
                    <div className='flex flex-row w-full justify-around mr-6 mt-8 font-light text-md'>

                        <button className='w-1/4 border-2  bg-blue-300 relative   border-2 border-blue-300 basis-1/2 ' >Read more</button>
                        {
                            act ?
                                (<FiChevronUp onClick={clickHandler} />) : (<FiChevronDown onClick={clickHandler} />)
                        }
                        <Link to='/signup'><button className='bg-blue-300 rounded-sm p-2 outline-none basis-3/4 ml-4 ' onClick={() => document.title = 'Sign Up Page'}>Get Started</button></Link>
                    </div>
                    {
                        act && (<div className={`more w-3/4 h-full mt-2 -ml-25  p-3 w-full shadow-md shadow-indigo-200`} ref={actContent} >
                            Lorem ipsum, dolor sit amet dhsdvdgdv consectetur adipisicing elit. Inventore excepturi sunt optio nesciunt reprehenderit est nisi eos saepe maiores deleniti.
                        </div>)

                    }
                </div>
            </div>
        </section>
    )
}
export default About;
