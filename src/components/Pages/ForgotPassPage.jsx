import React, { useRef, useState } from 'react'
import { Form, FormControl, Alert, Row, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { SendOobCode } from '../API/VerifyEmail';

const ForgotPasswordPage = () => {
    const [error, setError] = useState(null);
    const emailRef = useRef();
    
    const submitHandler = async (e)=>{
        e.preventDefault();

        const enteredEmail = emailRef.current.value;

        const result = await SendOobCode("PASSWORD_RESET" , enteredEmail);
    
        if(!result.ok){
            setError(result.error);
        }
        else{
            console.log(`Check Email for Password Reset Link`)
        }
    }
    
  return (
    <>
    <div className='signup' >
            <div className='card' >                
                <Form onSubmit={submitHandler}>
                    <Row>
                        <h2 className='mb-3'>Forgot Password</h2>
                    </Row>
                    <Row className='mb-3'>
                        <FormControl type='email'  onChange={()=>setError("")} placeholder='Email' ref={emailRef} required/>
                    </Row>
                    <Row className='mb-2'>
                        <Button type='submit' className='mt-3' variant='primary'>Send Link</Button>
                    </Row>
                    {error && <Alert variant="danger" className="py-2 text-center">{error}</Alert>}
                </Form>
            </div>
            <div className='loginOpt text-center mt-3'>
                <Link to="/" className="mb-0" style={{ textDecoration: 'none', color: 'inherit' }}>
                    Already a user? <span>Login</span>
                </Link>
            </div>
        </div>
    </>
  )
}

export default ForgotPasswordPage;