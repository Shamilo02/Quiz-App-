import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

  const [username, Setusername] = useState(""); 
  const [password,Setpassword ] = useState(""); 

  let navigate = useNavigate();
 
 const handleLogin = (e) => {
    e.preventDefault(); 
    const loggedUser = JSON.parse(localStorage.getItem("user"))
  if ( username === loggedUser.username && 
       password === loggedUser.password ) 
    {
      localStorage.setItem("isLogin", true); 
   toast.success("Tebrikler, giris tamamlandi.."); 
   setTimeout(() => {
    navigate("/"); 
   }, 2000);
    } 
    
    else {
    toast.error("username ve ya parola yanlis..")
    }
    }
  

  return (
    <div className="w-[600px] px-5 pt-1 pb-2 mt-10 m-auto text-center height-[500px] bg-slate-500 rounded-md">
    <h1 className='text-center mt-2 text-3xl font-bold'>Quiz App bölməsinə giriş. </h1>
  <form  onSubmit={handleLogin}>
  <div className='mb-5'>
        <h5 className="text-left font-bold mb-1 text-white">
            Username  </h5>
      <input
      value={username}
      onChange={(e) => Setusername(e.target.value)}
    className='w-full p-2 rounded-md outline-none' 
      type="text" placeholder='Enter Username' 
      
      /> 
    </div>
  <div className='mb-5'>
        <h5 className="text-left font-bold mb-1 text-white">Password  </h5>
      <input  
      value={password}
      onChange={(e) => Setpassword(e.target.value)}
      className='w-full p-2 rounded-md outline-none' 
      type="text" placeholder='Enter Password' /> 
    </div>
   <button className='w-full bg-green-400 p-2 text-white text-lg rounded-md'> 
   Login  </button>
   <small> You have an account ? 
    <NavLink className=" text-white text-xl" to="/auth/register">Register </NavLink> 
    </small>
  </form>
 </div>

  )
}

export default Login