import React from 'react'
import { useNavigate } from 'react-router-dom';

const Modal = ({res, user , Setmodal}) => {
 let navigate =  useNavigate()
const resetResult = () => {
  if(user) {
    user.true_answer = 0; 
  user.wrong_answer = 0; 
  localStorage.setItem("user", JSON.stringify(user)); 
    navigate("/");
  }
   Setmodal(false);

}
  return (
    <div className='modal w-[300px] p-8 h-[300px] bg-amber-300'>
        <p> username  : {user.username}</p>
        <p> gmail : {user.email}</p>
      <p> result :  {user.wrong_answer} / {res}</p>
      <p> true : { user.true_answer }</p>
    <p>   wrong : { user.wrong_answer}  </p>
        <button onClick={resetResult} className='answer bg-red-500 text-center '> Reset Result</button>
    </div>
  )
}

export default Modal