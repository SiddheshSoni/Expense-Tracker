import React from 'react'
import { Nav, Navbar, NavbarBrand } from 'react-bootstrap'

const Navigation = () => {
  return (
    <>
        <Navbar className='navbar-light bg-body-tertiary'>
            {/* <Navbar.Brand className=''> Expense Tracker </Navbar.Brand> */}
            <Nav className='mx-auto'>
                <Nav.Link href='#' >Home</Nav.Link>
                <Nav.Link href='#' >Product</Nav.Link>
                <Nav.Link href='#' >About US</Nav.Link>
            </Nav>
        </Navbar>
    </>
  )
}

export default Navigation