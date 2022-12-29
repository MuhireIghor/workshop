import React,{useState,useEffect} from 'react';
// import { useRecoilState } from 'recoil';
import { useNavigate } from 'react-router-dom';
import Input from './Input';
// import {user} from './atoms';

const SignUp = () => {
    const[formData,setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        confPass:''
    
    });
    const navigate = useNavigate();
    const [users,setUsers] = useRecoilState(user);

   
    
            const handleSignUp = (e)=>{
                e.preventDefault();
                setUsers(true);
                document.title='Login '
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
    document.title = 'Welcome to Hope Stores';
}
  return (
    <div >
        <div className='bg-indigo-100 mt-20 border-2xl border-blue-200 rounded-sm mx-auto w-1/4 h-auto my-auto p-auto shadow-xl shadow-blue-200 '>

            <p className='text-xl text-black text-center mt-4 font-medium'>{users?'Login':'Sign Up'}</p>
            <form className='flex flex-col px-8 py-12 ' onSubmit={handleSubmit}>
<Input name={'email'} type={'email'} label="Email"  handleChange={HandleChanges} />
<Input name={'password'} type={'password'} label="Password" handleChange={HandleChanges} />


        {!users&&(
            <>
<Input name={'firstName'} type={'text'} label="First Name" handleChange={HandleChanges} />
<Input name={'lastName'} type={'text'} label="Last Name" handleChange = {HandleChanges} />
<Input name={'confPass'} type={'password'} label="Confirm Password"  handleChange={HandleChanges} />
</>
          
        )}
<button  type='submit' className='bg-blue-200 rounded-sm font-medium py-2 mt-4 focus:bg-blue-400 focus:translate-y-2' onClick={users?handleSignIn:handleSignUp}>{users?'Log In':'Sign Up'}</button>
            </form>
        </div>
    </div>
  )
}

export default SignUp