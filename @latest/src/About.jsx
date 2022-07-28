import React, { useState } from 'react';
import pic from './Images/LOGO2.png';
import { useNav } from './context/useNav';
function About() {
    const [act, setAct] = useState(false);
    const [text, setText] = useState('');
    const clickHandler = (e) => {
        setAct(!act)
        console.log(act);
    }
    const aboutRef = useNav('Aboutus');
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

                    <button className='w-1/2 border-2  bg-blue-300 relative -left-20 mr-8 border-2 border-blue-300 ' onClick={clickHandler}>Read more</button>
                    {
                        act && (<div className={`more w-3/4 h-full mt-2 -ml-24 border-2 border-gray-200  p-3`} >
                            Lorem ipsum, dolor sit amet dhsdvdgdv consectetur adipisicing elit. Inventore excepturi sunt optio nesciunt reprehenderit est nisi eos saepe maiores deleniti.
                        </div>)
                    }
                </div>
            </div>
        </section>
    )
}
export default About;
