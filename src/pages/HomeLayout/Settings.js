import React from 'react'
import UseAxios from '../../hooks/UseAxios';
import CountQuestion from '../../components/CountQuestion';
import SelectCategory from '../../components/SelectCategory';
import SelectDifficultly from '../../components/SelectDifficultly';
import SelectType from '../../components/SelectType';
import { UseData } from '../../context';
import { NavLink, useNavigate } from 'react-router-dom';
const Settings = () => {
  let navigate = useNavigate();
  const {loginUser } = UseData(); 
    const {response, error,loading } =  UseAxios({ url: "/api_category.php"}); 

 const handleLogout = () => {
        localStorage.removeItem("isLogin");
          navigate("/"); 
 }

 if (loading) {
        return (
          <div className="w-full h-[100vh] flex items-center justify-center">
      <h1 className='text-2xl'>Loading! </h1>
          </div>
          
      ) 
    }

  if (error) {
      return (
        <h2 className='w-full h-[100vh] flex items-center justify-center'>
          Something Wrong!
        </h2>
      )  
  }
  return (
    <div className="quiz h-[550px]">
    <h1 className='text-center mt-2 text-3xl font-bold'>Quiz App </h1>
    <p> Welcome <span className='text-xl text-yellow-600'> {loginUser.username}</span> </p>
  <form >
    <CountQuestion />
    <SelectCategory options = {response.trivia_categories}/>
    <SelectDifficultly/>
    <SelectType/>
   <NavLink to="/quiz"  className='answer text-center bg-orange-500'> Start Quiz  </NavLink>
   <button onClick={handleLogout}  className='answer text-center bg-red-500'> Log Out Quiz  </button>
  </form>
 </div>
  )
}

export default Settings