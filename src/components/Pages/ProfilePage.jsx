import React, { useRef, useState } from 'react'
import { Alert, Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import "./ProfilePage.css";
import UpdateProfile from '../API/UpdateProfile';

const ProfilePage = () => {
    const nameRef = useRef();
    const pfpRef = useRef();
    const [error, setError] = useState(null);
    const submitHandler = async (e) => {
        e.preventDefault();

        const updates ={
            name : nameRef.current.value,
            Url : pfpRef.current.value,
        };

        const result = await UpdateProfile(updates);
        if(!result.ok){
            setError(result.error);
        }
        else{
            console.log(`Profile has succesfully Updated!" }`)
        }

    }
  return (
    <>
        <div className='d-flex justify-content-center align-content-center mt-5'> 
            <Form onSubmit={submitHandler}>
                <Row className='mb-3'>   
                    <FormGroup>
                        <FormLabel><img src='github-mark.png' /> Full Name:</FormLabel>                       
                        <FormControl type='text' ref={nameRef}/>
                    </FormGroup>                    
                    <FormGroup>
                        <FormLabel><img src='globe-network.png' /> Profile Photo URL:</FormLabel>
                        <FormControl type='URL' ref={pfpRef}/>
                    </FormGroup>
                </Row>
                <Row>
                    <Button className='' type='submit' variant='danger'>Update</Button>
                </Row>
                {error && <Alert>{error}</Alert>}
            </Form>
        </div>
    </>
  )
}

export default ProfilePage