import React from 'react'
import { UseData } from '../context';
const SelectType = () => {

  const { typeOptions, quiz, handleQuiz } = UseData();
  return (
   <div className='mb-5'>
<h5 className="text-left font-bold mb-1 ">Select Type</h5>
  <select 
  className='w-full p-2 rounded-md outline-none cursor-pointer' 
  onChange={handleQuiz}
  value={quiz.type}
  name="type"
  >
    {typeOptions.map((typopt) =><option key={typopt.id}  
    value={typopt.id}> {typopt.name}    </option>)}
</select>
</div>
  )
}

export default SelectType; 

