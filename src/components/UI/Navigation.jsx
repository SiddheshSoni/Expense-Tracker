import React, { useContext } from 'react'
import { Button, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import { StoreContext } from '../Store/StoreContext'

const Navigation = () => {
  const { onLogout } = useContext(StoreContext);

  return (
    <>
        <Navbar className='navbar-light bg-body-tertiary fixed-top'>
            {/* <Navbar.Brand className=''> Expense Tracker </Navbar.Brand> */}
            <Nav className='mx-auto'>
                <Nav.Link href='/Profile' >Profile</Nav.Link>
                <Nav.Link href='/Expenses' >Expense</Nav.Link>
            </Nav>
                <Button onClick={onLogout} >Logout</Button>
        </Navbar>
    </>
  )
}

export default Navigation