import React from 'react'
import { UseData } from '../context';

const SelectCategory = ({options }) => {
 const { quiz,handleQuiz } =  UseData(); 
  return (
    <div className='mb-5'>
    <h5 className="text-left font-bold mb-1 ">Select Cateogry</h5>
      <select className='w-full p-2 rounded-md outline-none cursor-pointer'
      name='category'
      value={quiz.category}
      onChange={handleQuiz}
      >
{options.map((option) => <option key={option.id} value={option.id}> {option.name}   </option>)}
   </select>
   </div>

  )
}

export default SelectCategory;