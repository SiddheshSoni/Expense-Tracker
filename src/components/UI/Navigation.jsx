import React, { useContext } from 'react'
import { Button, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import { StoreContext } from '../Store/StoreContext'

const Navigation = () => {
  const { onLogout } = useContext(StoreContext);

  return (
    <>
        <Navbar className='navbar-light bg-body-tertiary'>
            {/* <Navbar.Brand className=''> Expense Tracker </Navbar.Brand> */}
            <Nav className='mx-auto'>
                <Nav.Link href='/Profile' >Profile</Nav.Link>
            </Nav>
                <Nav.Link href='#' className='m-2' >Your Profile is incomplete. Complete now </Nav.Link>
                <Button onClick={onLogout} >Logout</Button>
        </Navbar>
    </>
  )
}

export default Navigation