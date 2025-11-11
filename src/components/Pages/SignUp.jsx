import React, { useState, useRef, useContext } from 'react'
import { Form, FormControl, Container,Alert, Row, Button } from 'react-bootstrap'
import "./SignUp.css"
import SignUpAPI from '../API/Auth';
import { StoreContext } from '../Store/StoreContext';
import { Navigate, useNavigate } from 'react-router';

const SignUp = () => {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const [error, setError] = useState("");
    const [isSignUp, setIsSignUp] = useState(true);

    const navigate = useNavigate();
    const { onLogin } = useContext(StoreContext);

    const submitHandler= async (e)=>{
        e.preventDefault();    

        const enteredEmail= emailRef.current.value;
        const enteredPassword= passwordRef.current.value;
        
        if (isSignUp){
            const enteredConfirmPassword = confirmPasswordRef.current.value;
            if(enteredPassword !== enteredConfirmPassword){
                setError("Passwords do not match!");
                return;
            }
        }
        console.log(enteredEmail);
        console.log(enteredPassword);

        const result = await SignUpAPI(enteredEmail, enteredPassword, isSignUp);
        if (!result.ok) {
            if(result.error == "INVALID_LOGIN_CREDENTIALS"){
                setError("Username or Password is Invalid!")
            }else{
                setError(result.error);
            }
        }else{
            onLogin(result.data.idToken);
            navigate("/Welcome")
            console.log(`User has succesfully ${isSignUp ? "Signed up" : "Logged in" }`)
        }
    };
    
  return (
      <>
        <div className='signup' >
            <div className='card'>                
                <Form onSubmit={submitHandler}>
                    <Row>
                        <h2 className='mb-3'>{isSignUp ? "SignUp" : "Login" }</h2>
                    </Row>
                    <Row className='mb-3'>
                        <FormControl type='email'  onChange={()=>setError("")} placeholder='Email' ref={emailRef} required/>
                    </Row>
                    <Row className='mb-3'>
                        <FormControl type='password' onChange={()=>setError("")} placeholder='Password' ref={passwordRef} required/>
                    </Row>
                    { isSignUp && <Row className='mb-3'>
                        <FormControl type='password' onChange={()=>setError("")} placeholder='Confirm Password' ref={confirmPasswordRef}  required isInvalid={error !== ""}/>
                    </Row>}
                    <Row className='mb-3'>
                        <Button type='submit' className='mt-3' variant='primary'>{isSignUp ? "Sign up" : "Login" }</Button>
                    </Row>
                    {error && (
                        <Alert variant="danger" className="py-2 text-center">
                        {error}
                        </Alert>
                    )}
                    { !isSignUp && <a href='/ForgotPassword'>Forgot Password?</a>}
                </Form>
            </div>
            <div className='loginOpt text-center mt-3'>
                <p onClick={()=>setIsSignUp(prev => !prev)} type='button' className="mb-0">
                    Have an account? <span>{isSignUp ? "Login" : "SignUp" }</span>
                </p>
            </div>
        </div>
    </>
    
  )
}

export default SignUp