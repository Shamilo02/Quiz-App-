import React from 'react'
import { UseData } from '../context';

const SelectDifficultly = () => {
 const { difOptions, quiz,handleQuiz } =  UseData(); 
  return (
    <div className='mb-5'>
       <h5 className="text-left font-bold mb-1 ">Select Difficultly</h5>
         <select className='w-full p-2 rounded-md outline-none cursor-pointer'
         name='difficultly'
         value={quiz.difficultly}
         onChange={handleQuiz}
         >
          {difOptions.map((opt) => <option key={opt.name} value={opt.id}> {opt.name}   </option>)}      
      </select>
      </div>
  )
}

export default SelectDifficultly; 