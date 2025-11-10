import React,{useEffect, useState}from 'react'
import { Alert, Button, Col, Container, Row } from 'react-bootstrap'
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
      <Container>

      <Row>
        <Col>
          < div>Welcome to Expense Tracker</div>
        </Col>
        <Col>
          <div className='d-flex justify-content-center align-items-center h-100 w-100'>
            {userData && userData.emailVerified ?<h1>Email is Verified! Good to go!</h1>:<Button className='' variant='danger' size='lg' onClick={clickHandler}>Verify Email id</Button>}
          {error && <Alert>{error}</Alert>}
          </div>
        </Col>
        <Col>
          <div><span href='#' className='m-2' >Your Profile is incomplete. <a href='#'>Complete now</a> </span></div>
        </Col>
      </Row>
      </Container>
    </>
  
  )
}

export default WelcomePage