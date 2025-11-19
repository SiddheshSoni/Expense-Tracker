import React from 'react'
import { Button, Nav, Navbar, NavbarBrand } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { authActions } from '../Store/authSlice'
import { themeActions } from '../Store/themeSlice'

const Navigation = () => {
  const dispatch = useDispatch();
  const isDark = useSelector(state => state.theme.isDark);
  const isPremium = useSelector(state=> state.premium.premium);

  return (
    <>
      <Navbar className='bg-body-tertiary fixed-top position-relative' expand="lg">
        
        <Nav className="position-absolute start-50 translate-middle-x">
          <Nav.Link href='/Profile'>Profile</Nav.Link>
          <Nav.Link href='/Expenses'>Expense</Nav.Link>
        </Nav>
       
        <div className='ms-auto d-flex align-items-center'>
        {isPremium &&
          <img
            className='m-1 mx-2'
            onClick={() => dispatch(themeActions.toggleTheme())}
            src={isDark ? 'moon.PNG' : 'light-mode.png'}
          />
        }
        <Button onClick={() => dispatch(authActions.onLogout())}>Logout</Button>
        </div>
    </Navbar>
    </>
  )
}

export default Navigation