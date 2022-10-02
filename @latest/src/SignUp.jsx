import React,{useState,useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import Input from './Input';

const SignUp = () => {
    const[formData,setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confPass:''
    
    });
    const navigate = useNavigate();
    const[user,setUser] = useState(false);
   
    
            const handleSignUp = (e)=>{
                e.preventDefault();
                setUser(true);
            }
    const HandleChanges = (e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
        // console.log(e.target.value);
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(formData);
    }
const handleSignIn = ()=>{
    navigate('/');
}
  return (
    <div >
        <div className='bg-indigo-100 border-2xl border-blue-200 rounded-sm mx-auto w-1/4 h-auto my-auto p-auto shadow-xl shadow-blue-200 '>

            <p className='text-xl text-black text-center mt-4 font-medium'>{user?'Login':'Sign Up'}</p>
            <form className='flex flex-col px-8 py-12 ' onSubmit={handleSubmit}>
<Input name={'email'} type={'email'} label="Email"  handleChange={HandleChanges} />
<Input name={'password'} type={'password'} label="Password" handleChange={HandleChanges} />


        {!user&&(
            <>
<Input name={'firstName'} type={'text'} label="First Name" handleChange={HandleChanges} />
<Input name={'lastName'} type={'text'} label="Last Name" handleChange = {HandleChanges} />
<Input name={'confPass'} type={'password'} label="Confirm Password"  handleChange={HandleChanges} />
</>
          
        )}
<button  type='submit' className='bg-blue-200 rounded-sm font-medium py-2 mt-4 hover:bg-blue-400 hover:translate-y-2' onClick={user?handleSignIn:handleSignUp}>{user?'Log In':'Sign Up'}</button>
            </form>
        </div>
    </div>
  )
}

export default SignUp