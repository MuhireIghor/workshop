import React from 'react';
import About from './About';
import Body from './Body';
import Testimonials from './Testimonials';
const Main2 = ()=>{
    return (
        <main className="main space-y-12">
<Body/>
<About/>
<Testimonials title="Testimonial" />
        </main>
    )
}
export default Main2;