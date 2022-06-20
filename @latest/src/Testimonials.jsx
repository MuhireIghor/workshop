import React from 'react';
import pic from './Images/status.jpg';
const clients = [{
  name: 'Mr Easy',
  text: `My name is ${igor} and I am really glad with the collaboration with the hope stores fashion centre and I really look forward to further working with the Hope fashions stores.`
}, {
  name: 'Mr Easy',
  text: `My name is ${igor} and I am really glad with the collaboration with the hope stores fashion centre and I really look forward to further working with the Hope fashions stores.`
}, {
  name: 'Mr Easy',
  text: `My name is ${igor} and I am really glad with the collaboration with the hope stores fashion centre and I really look forward to further working with the Hope fashions stores.`
}, {
  name: 'Mr Easy',
  text: `My name is ${igor} and I am really glad with the collaboration with the hope stores fashion centre and I really look forward to further working with the Hope fashions stores.`
}, {
  name: 'Mr Easy',
  text: `My name is ${igor} and I am really glad with the collaboration with the hope stores fashion centre and I really look forward to further working with the Hope fashions stores.`
},
{
  name: 'Mr Easy',
  text: `My name is ${igor} and I am really glad with the collaboration with the hope stores fashion centre and I really look forward to further working with the Hope fashions stores.`
}
];
var igor;
for (let i = 0; i < clients.length; i++)

  setTimeout(() => {
    igor = clients[i].name;
    return (igor);
  }, 3000);


function Testimonials({ title }) {
  return (
    <div className=' mt-16 w-screen flex flex-col items-center justify-center space-y-8 '>
      <div className="header  text-xl text-[605C5C] ">
        {title}
      </div>
      <div>Our Happy Clients</div>
      <div className="main w-5/6  h-screen grid grid-rows-2 grid-flow-col gap-4   p-4">{

        clients.map((client, index) => {
          return (

            <div key={index} className="clent h-full w-5/6  bg-white shadow-md shadow-indigo-200  p-8 border-md  flex flex-col justify-around space-y-8">
              <div className="image"><img src={pic} alt="text" className='w-12 h-12 align-center rounded-full mx-24' /></div>
              <div className="phr text-black">{client.text}</div>
              <div className="tit text-black text-center">{client.name}</div>
            </div>
          )
        })
      }
      </div>

    </div>
  )
}

export default Testimonials