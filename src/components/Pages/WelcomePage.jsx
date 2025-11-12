import React,{useEffect, useState}from 'react'
import { Alert, Button, Col, Container, Row } from 'react-bootstrap'
import {SendOobCode} from '../API/VerifyEmail'
import { FetchProfile } from '../API/UpdateProfile';
import "./Filler.css"
import { Link } from 'react-router';

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
    const result = await SendOobCode("VERIFY_EMAIL");
    
    if(!result.ok){
      setError(result.error);
    }
    else{
      console.log(`Check Email for Verification code`)
    }
  };
  return (
      <div className='filler'>
        <Row className='mb-3 mx-3'>
          <Col>
            < div>Welcome to Expense Tracker</div>
          </Col>
          <Col className='text-end'>
            <span>Your Profile is incomplete. </span>
            <Link to='/Profile' style={{  color: 'antiquewhite' }} > Complete Now</Link>
          </Col>
        </Row>
        <Row className='mb-3 '>
          <Col className='text-center'>          
            {userData && userData.emailVerified ?<h1>Email is Verified! Good to go!</h1>:<Button variant='danger' size='lg' onClick={clickHandler}>Verify Email id</Button>}
            {error && <Alert>{error}</Alert>}       
          </Col>     
        </Row>
      </div>
  )
}

export default WelcomePage