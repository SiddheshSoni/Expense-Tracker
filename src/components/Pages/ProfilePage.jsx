import React, { useEffect, useRef, useState } from 'react'
import { Alert, Button, Col, Form, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap'
import "./ProfilePage.css";
import {UpdateProfile, FetchProfile } from '../API/UpdateProfile';
import { useSelector } from 'react-redux';

const ProfilePage = () => {
    const isDark = useSelector(state=> state.theme.isDark);

    const nameRef = useRef();
    const pfpRef = useRef();
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState(null);

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
    };

    const loadData = async ()=>{
        const result = await FetchProfile();
        if(!result.ok){
            setError(result.error);
        }else{
            setUserData(result.data.users[0]);
            console.log(userData)
        }
    }
    useEffect(()=>{
        loadData();
    },[]);

  return (
    <>
        <div className='filler d-flex justify-content-center align-content-center pt-lg-5'> 
            <Form onSubmit={submitHandler}>
                <Row className='mb-3'>   
                    <FormGroup>
                        <FormLabel><img src={isDark ? 'github-mark-white.png' : 'github-mark.png'} /> Full Name:</FormLabel>                       
                        <FormControl type='text' defaultValue={userData? userData.displayName : ''} ref={nameRef}/>
                    </FormGroup>                    
                    <FormGroup>
                        <FormLabel><img src='global-network.png' /> Profile Photo URL:</FormLabel>
                        <FormControl type='URL' defaultValue={ userData? userData.photoUrl : ''} ref={pfpRef}/>
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