import { useContext, createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Context = createContext(); 


const Provider = ({children}) => {
    let navigate = useNavigate();

    
//& Data 
    const [user, SetUser] = useState({
        username: "", 
        password: "", 
        email: "", 
        true_answer: 0, 
        wrong_answer: 0, 
    }); 
    
    const [quiz, SetQuiz] = useState({
        type:"", 
        category:"",
        count:10, 
        difficultly:"", 
        score:0
    })

    
  let apiUrl = `/api.php?amount=${Number(quiz.count)}`;
 
  if(quiz.category)
  {
    apiUrl = apiUrl.concat(`&category=${quiz.category}`);
  }
  if(quiz.type)
  {
    apiUrl = apiUrl.concat(`&type=${quiz.type}`);
  }
 if(quiz.difficultly)
  {
     apiUrl = apiUrl.concat(`&difficulty=${quiz.difficultly}`);
  }
  
    const [index,Setindex] = useState(0);
    const [options, Setoptions] = useState([]); 
    const [modal, Setmodal] = useState(false);

    const loginUser = JSON.parse(localStorage.getItem("user")); 

    const difOptions = [
        {id: 'easy', name:"Easy"},
        {id: 'medium', name:"Medium"},
        {id: 'hard', name:"Hard"},
    ];
    const typeOptions = [
        { id: "multiple", name:"Multiple Choice"},
        { id: "boolean", name:"True/False"},
    ];

   //& Register 
    const handleSubmit = (e) => {
        e.preventDefault(); 
      localStorage.setItem("user", JSON.stringify(user));
      setTimeout(() => {
        navigate("/auth")
      }, 2000);
    }

    const handleChange = (e) => {
        const {name, value } =  e.target; 
       SetUser(users => ({...users,[name]:value}))
    }

    const handleQuiz = (e) => {
        const {name, value } =  e.target; 
        SetQuiz(quiz => ({ ...quiz, [name]:value}))
    }

    const getRandomNumber = (max) => {
      return Math.floor(Math.random() * Math.random(max))
    }
  
   
    //* Initial State 
    const initialState  
    = { 
            difOptions, 
            typeOptions, 
            user, 
            SetUser,  
            handleSubmit,
            handleChange, 
            loginUser,
            handleQuiz,
            quiz,
            index,
            Setindex,
            options,
            Setoptions,
            apiUrl, 
            getRandomNumber,
            Setmodal,
            modal
            
        }
    
    return ( 
    <Context.Provider value={initialState}>
        {children}
    </Context.Provider> 
    )

}

export const UseData = () => useContext(Context); 

export default Provider;