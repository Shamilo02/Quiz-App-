import React from 'react'
import Login from './pages/AutLayout/Login';
import Settings from './pages/HomeLayout/Settings';

import { Routes, Route } from 'react-router-dom';
import Register from './pages/AutLayout/Register';
import AuthLayout from './pages/AutLayout';
import HomeLayout from './pages/HomeLayout';
import Quiz from './pages/HomeLayout/Quiz';
import PrivateRoute from './components/PrivateRoute';
import { ToastContainer } from 'react-toastify';



const App = () => {
 
  return (
    <>
    <ToastContainer/>
      <Routes>
    <Route path='/' element={<PrivateRoute> <HomeLayout/> </PrivateRoute> }>
      <Route index={true} element={<PrivateRoute> <Settings /> </PrivateRoute>}/>
      <Route path='quiz' element={<PrivateRoute><Quiz/> </PrivateRoute>  }/>
    </Route>
    <Route path='/auth' element={<AuthLayout/>}>
    <Route index={true} element={<Login/>} />
    <Route path='register' element={<Register/>} />
    </Route>
      </Routes>
    </>
  
    
    
                                                
   
  )


  
}

export default App