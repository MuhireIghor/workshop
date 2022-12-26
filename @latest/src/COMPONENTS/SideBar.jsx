import React,{useState,useEffect} from 'react';
import InputField from './InputField';


const SideBar = () => {
    const minimumP = 1000;
    const maxP = 20000;
    const[price,setPrice] = useState(minimumP);

    const[Category,setCategory] = useState(null);
    const[color,setColor] = useState(null);
    const handlePrice = (e)=>{
        console.log(price);
        setPrice((e.target.value/maxP)*100);
        console.log(price);
    }
    const handleCategory = (e)=>{
        setCategory(e.target.value);
        console.log(price);
    }
    const handleColor = (e)=>{
        setColor(e.target.value);
        console.log(price);
    }
 
  return (
    <div className='flex p-4'>
    <div className='flex flex-col mt-12  basis-2/12'>
<InputField name="Price" type={'range'} handler={handlePrice} />
<InputField name="Category" type={'checkbox'} handler={handleCategory} />
<InputField name="Color" type={'checkbox'} handler={handleColor} />
    </div>
    <div className='flex flex-col mt-12  basis-8/12'>


    </div>

    </div>
  )
}

export default SideBar