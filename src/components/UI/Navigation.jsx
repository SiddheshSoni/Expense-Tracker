import React from 'react'
import { Button, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../Store/authSlice'
import { themeActions } from '../Store/themeSlice';

const Navigation = () => {
  const dispatch = useDispatch();
  const isDark = useSelector(state => state.theme.isDark);
  const isPremium = useSelector(state=> state.premium.premium);

  return (
    <>
        <Navbar className='bg-body-tertiary fixed-top' expand="lg">
            {/* <Navbar.Brand className=''> Expense Tracker </Navbar.Brand> */}
            <Nav className='mx-auto'>
                <Nav.Link href='/Profile' >Profile</Nav.Link>
                <Nav.Link href='/Expenses' >Expense</Nav.Link>
            </Nav>
            {isPremium && <Button variant="secondary" className="me-2" onClick={() => dispatch(themeActions.toggleTheme())}>
              {isDark ? 'Light Mode' : 'Dark Mode'}
            </Button>}
                <Button onClick={()=>dispatch(authActions.onLogout())} >Logout</Button>
        </Navbar>
    </>
  )
}

export default Navigation