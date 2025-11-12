import React, { useContext } from 'react'
import './App.css'
import SignUp from './components/Pages/SignUp'
import Navigation from './components/UI/Navigation'
import { Routes, Route, Navigate } from 'react-router'
import WelcomePage from './components/Pages/WelcomePage'
import { StoreContext } from './components/Store/StoreContext'
import ProfilePage from './components/Pages/ProfilePage'
import ForgotPasswordPage from './components/Pages/ForgotPassPage'
import Expenses from './components/Pages/Expenses'

function App() {
  const { isLoggedIn } = useContext(StoreContext);

  return (
    <>
      { isLoggedIn && <Navigation />}
      <div className='filler'>
      <Routes>
        <Route path='/' element={ <SignUp />} />
        <Route path='/Expenses' element={ <Expenses />} />
        <Route path='/Profile' element={ <ProfilePage />} />
        <Route path='/ForgotPassword' element={ <ForgotPasswordPage />} />
        {isLoggedIn && <Route path='/Welcome' element={<WelcomePage />} />}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      </div>
    </>
  )
}

export default App
