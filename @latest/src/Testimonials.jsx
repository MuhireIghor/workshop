import React from 'react';
import { useNav } from './context/useNav';
import pic from './Images/status.jpg';

function Testimonials({ title }) {
  const testRef = useNav('Testimonials');
  const names = ['Igor', 'Muhire', 'Mr Eazy', 'Davido','Chris Easy','Amalon'];
  const Clients = [{

    name:'Mr Easy',
    Description:'My name is Mr Easy and I really had a reqarding ecperience with the Hope stores as they have quality and updated women fashion clothes'
  },
  {

    name:'Ighor',
    Description:'My name is Ighor and I really had a reqarding ecperience with the Hope stores as they have quality and updated women fashion clothes'
  },
  {

    name:'Mr Easy',
    Description:'My name is Mr Easy and I really had a reqarding ecperience with the Hope stores as they have quality and updated women fashion clothes'
  },
  {

    name:'Davido',
    Description:'My name is Davido and I really had a reqarding ecperience with the Hope stores as they have quality and updated women fashion clothes'
  },
  {

    name:'Chris',
    Description:'My name is Chris and I really had a reqarding ecperience with the Hope stores as they have quality and updated women fashion clothes'
  },
  {

    name:'Brendan',
    Description:'My name is Brendan and I really had a reqarding ecperience with the Hope stores as they have quality and updated women fashion clothes'
  }
  ]

  return (
    <section className=' mt-16 w-screen flex flex-col items-center justify-center space-y-8 ' ref={testRef} id='testCont'>
      <div className="header  text-2xl font-bold text-[605C5C] ">
        {title}
      </div>
      <div className='text-xl text-black font-semibold'>Our Happy Clients</div>
      <div className="main w-5/6  h-screen grid grid-rows-2 grid-flow-col gap-4   p-4">{

        clients.map((client, index) => {
          return (

            <div key={index} className="clent h-full w-5/6  bg-white shadow-md shadow-gray-200  p-8 border-md  flex flex-col justify-around space-y-8">
              <div className="image"><img src={pic} alt="text" className='w-12 h-12 align-center rounded-full mx-28' /></div>
              <div className="phr text-black">{client.text}</div>
              <div className="tit text-black text-center">{client.name}</div>
            </div>
          )
        })
      }
      </div>

    </section>
  )
}

export default Testimonials