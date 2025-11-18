import React from 'react'
import { Button, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { authActions } from '../Store/authSlice'

const Navigation = () => {
  const dispatch = useDispatch();

  return (
    <>
        <Navbar className='navbar-light bg-body-tertiary fixed-top'>
            {/* <Navbar.Brand className=''> Expense Tracker </Navbar.Brand> */}
            <Nav className='mx-auto'>
                <Nav.Link href='/Profile' >Profile</Nav.Link>
                <Nav.Link href='/Expenses' >Expense</Nav.Link>
            </Nav>
                <Button onClick={()=>dispatch(authActions.onLogout())} >Logout</Button>
        </Navbar>
    </>
  )
}

export default Navigation