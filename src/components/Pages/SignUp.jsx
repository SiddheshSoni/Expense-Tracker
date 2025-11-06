import React, { useState, useRef } from 'react'
import { Form, FormControl, Container,Alert, Row, Button } from 'react-bootstrap'
import "./SignUp.css"

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [error, setError] = useState("");
    
    const submitHandler=(e)=>{
        e.preventDefault();    

        const enteredEmail= emailRef.current.value;
        const enteredPassword= passwordRef.current.value;
        const enteredConfirmPassword = confirmPasswordRef.current.value;

        if (enteredPassword !== enteredConfirmPassword) {
            setError("Passwords do not match!");
            return;
        }
        console.log(enteredEmail);
        console.log(enteredPassword);
    }
    
  return (
      <>
        <div className='signup' >
            <div className='card'>                
                <Form onSubmit={submitHandler}>
                    <Row className='mb-3'>
                        <FormControl type='email' placeholder='Email' ref={emailRef} required/>
                    </Row>
                    <Row className='mb-3'>
                        <FormControl type='password' placeholder='Password' ref={passwordRef} required/>
                    </Row>
                    <Row className='mb-3'>
                        <FormControl type='password' onChange={()=>setError("")}placeholder='Confirm Password' ref={confirmPasswordRef}  required isInvalid={error !== ""}/>
                    </Row>
                    <Row className='mb-3'>
                        <Button type='submit' className='mt-3' variant='primary'>Sign up</Button>
                    </Row>
                    {error && (
                        <Alert variant="danger" className="py-2 text-center">
                        {error}
                        </Alert>
                    )}
                </Form>
            </div>
            <div className='loginOpt text-center mt-3'>
                <p className="mb-0">
                    Have an account? <a href="#">Login</a>
                </p>
            </div>
        </div>
    </>
    
  )
}

export default SignUp