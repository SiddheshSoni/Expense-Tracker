import React,{useEffect, useState}from 'react'
import { Alert, Button } from 'react-bootstrap'
import {VerifyEmail} from '../API/VerifyEmail'
import { FetchProfile } from '../API/UpdateProfile';

const WelcomePage = () => {
  const [error, setError] = useState(null);
  const [userData, setUserData] = useState(null);

  const loadData = async ()=>{
        const result = await FetchProfile();
        if(!result.ok){
            setError(result.error);
        }else{
            setUserData(result.data.users[0]);
            console.log(userData)
        }
  };
  
  useEffect(()=>{
      loadData();
  },[]);

  const clickHandler= async () =>{
    const result = await VerifyEmail();
    
    if(!result.ok){
      setError(result.error);
    }
    else{
      console.log(`Check Email for Verification code" }`)
    }
  };
  return (
    <>
      <div>Welcome to Expense Tracker</div>
      <div className='d-flex justify-content-center align-items-center h-100 w-100'>
        {userData && userData.emailVerified ?<h1>Email is Verified! Good to go!</h1>:<Button className='' variant='danger' size='lg' onClick={clickHandler}>Verify Email id</Button>}
  
      {error && <Alert>{error}</Alert>}
      </div>
    </>
  
  )
}

export default WelcomePage