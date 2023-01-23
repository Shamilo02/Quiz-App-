import React from 'react'
import { UseData } from '../context';

const CountQuestion = () => {
const { quiz,handleQuiz  } =  UseData();
  return (
    <div className='mb-5'>
        <h5 className="text-left font-bold mb-1 text-white">
            Enter Count Question </h5>
      <input 
      name='count' value={quiz.count} onChange={handleQuiz} 
      className='w-full p-2 rounded-md outline-none' 
      type="number" placeholder='sual sayini yazin' /> 
    </div>
  )
}

export default CountQuestion; 