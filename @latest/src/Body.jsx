import React,{useState} from 'react';
import {data} from './COMPONENTS/Imageslider';
import {BsChevronRight,BsChevronLeft} from 'react-icons/bs';
console.log(data);


function Body(){
    const[count,setCount] = useState(0);
    function backImage(){
    setCount(slide.no-1)%data.length;
 }
    function forwardImage(){
        setCount(slide.no+1)%data.length;
    }
    

    return(
        <div className='flex flex-col'>
            <BsChevronLeft onClick={backImage} />
                    

                        <div className=''>
                            <img src={slide.no} alt="" />

                        </div>
                        
                    
            <BsChevronRight onClick={forwardImage} />
                    
                )

            




        </div>
    
    )
}
export default Body;
