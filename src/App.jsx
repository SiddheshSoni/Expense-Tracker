import React from 'react'
import './App.css'
import Navigation from './components/UI/Navigation'
import { Routes, Route, Navigate } from 'react-router'
import WelcomePage from './components/Pages/WelcomePage'
import ProfilePage from './components/Pages/ProfilePage'
import ForgotPasswordPage from './components/Pages/ForgotPassPage'
import Expenses from './components/Pages/Expenses'
import SignUp from './components/Pages/SignUp'
import { useSelector } from 'react-redux'

function App() {
  const isLoggedIn = useSelector(state=> state.auth.isLoggedIn);

  return (
    <>
      { isLoggedIn && <Navigation />}
      <div className='filler'>
      <Routes>
        <Route path='/' element={ <SignUp />} />
        {isLoggedIn && <Route path='/Profile' element={ <ProfilePage />} />}
        {isLoggedIn && <Route path='/ForgotPassword' element={ <ForgotPasswordPage />} />}
        {isLoggedIn && <Route path='/Expenses' element={ <Expenses />} />}
        {isLoggedIn && <Route path='/Welcome' element={<WelcomePage />} />}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      </div>
    </>
  )
}

export default App
