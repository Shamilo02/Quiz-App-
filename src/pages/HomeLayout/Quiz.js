import React, {useEffect} from 'react'
import { useRef } from 'react'
import Modal from '../../components/Modal'
import { UseData } from '../../context'
import UseAxios from '../../hooks/UseAxios'

const Quiz = () => {
  const opt = useRef();

  const {
          index,
          Setindex, 
          Setoptions,
          options,
          apiUrl,
          loginUser,
          getRandomNumber,
          Setmodal, 
          modal
        } 
          =  UseData();


 

  const {response, loading } =  UseAxios({ url : apiUrl});
        console.log(response)
  useEffect(() => {
      if (response?.results.length) {
        let question = response.results[index]; 
        let answers = [...question.incorrect_answers]; 
        answers.splice(getRandomNumber(question.incorrect_answers.length),
        0,
        question.correct_answer);
        Setoptions(answers); 
      } 
  }, [response,index])
  

 if(loading){
    return (
      <h1>Loading... </h1>
      )
    }

    const handleClickAnswer = (e) => {
      const question = response.results[index]; 
     if(e.target.textContent === question.correct_answer)
     {
        if(loginUser)
        {
          loginUser.true_answer+=1;
          localStorage.setItem("user",JSON.stringify(loginUser)); 
        }
      
     }
     else 
     {
      if(loginUser)
        {
          loginUser.wrong_answer+=1; 
          localStorage.setItem("user",JSON.stringify(loginUser)); 
        }
     }
     nextQuestion();
    }

    const nextQuestion = ( ) => {
        if (index + 1 < response?.results.length) {
          Setindex(index + 1)
        } else {
          Setmodal(true)
        }
    }

  return (
    <div className="quiz">
    <h1 className='text-center mt-2 text-3xl font-bold'>Quiz </h1>
    <h3 className='text-xl my-5'>{ index + 1 }) {response.results[index].question}</h3>
    {options.map((option) => (
        <button key={option} onClick={handleClickAnswer} 
        className='answer'> 
         {option}  
        </button >
        ))}

    <small> {index + 1} / {response?.results.length}</small>
      
    {modal ? <Modal Setmodal={Setmodal} user={loginUser} res={response?.results.length}/> : ""}
 </div>
  )  
}

export default Quiz; 