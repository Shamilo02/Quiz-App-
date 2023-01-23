import React from 'react'
import { NavLink } from 'react-router-dom';
import { UseData } from '../../context';


const Register = () => {
 const {handleSubmit,handleChange, user } =  UseData(); 

  return (
   
    <div className="w-[600px] px-5 pt-1 pb-2 mt-10 m-auto text-center  bg-slate-500 rounded-md">
    <h1 className='text-center mt-2 text-3xl font-bold'>Quiz App bölməsinə giriş. </h1>
  <form onSubmit={handleSubmit} >
  <div className='mb-5'>
        <h5 className="text-left font-bold mb-1 text-white">
            Username  </h5>
      <input name='username' 
    className='w-full p-2 rounded-md outline-none' 
      type="text" placeholder='Enter Username' 
      onChange={handleChange}
      value={user.username}
      /> 
    </div>
  <div className='mb-5'>
        <h5 className="text-left font-bold mb-1 text-white">
            Email  </h5>
      <input name='email' 
    className='w-full p-2 rounded-md outline-none' 
      type="text" placeholder='Enter Username' 
      onChange={handleChange}
      value={user.email}
      /> 
    </div>
  <div className='mb-5'>
        <h5 className="text-left font-bold mb-1 text-white">Password  </h5>
      <input name='password' 
     onChange={handleChange}
     value={user.password}
      className='w-full p-2 rounded-md outline-none' 
      type="text" placeholder='Enter Password' /> 
    </div>
   <button type='submit' className='answer bg-green-400 text-center'> 
   Register  </button>
  <p>If you have any account <NavLink className="text-white" to="/auth"> Login  </NavLink> </p> 
  </form>

 </div>

  )
}

export default Register