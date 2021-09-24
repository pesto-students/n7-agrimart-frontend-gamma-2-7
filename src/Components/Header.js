import React from 'react';
import { Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import {LinkContainer} from "react-router-bootstrap"
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
import Logo from "../assests/AgroMart.png";
import SearchBar from  "./SearchBar"
import { logout } from '../Redux/action/UserAction'



export default function Header() {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin
  // console.log(userInfo.user.name)
  const logoutHandler = () => {
    dispatch(logout())
  }
    return (
     <header>  
    <Navbar bg="light" expand="lg">
    {/* <Container> */}
    <LinkContainer to='/'>
    <Navbar.Brand className="ml-2"><img src={Logo} alt ="" /></Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id='basic-navbar-nav'>
    <Route render={({ history }) => <SearchBar  history={history} />} />
      <Nav
        className="ml-auto"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="/wishlist">
            <i className='fas fa-heart'></i>
        </Nav.Link>
        <Nav.Link href="/Register">SignUp</Nav.Link>
        {/* <Nav.Link href="/login">Login</Nav.Link> */}
        {userInfo ? (
                  <NavDropdown className="logintitle" title={userInfo.user.name} id='username'>
                    <LinkContainer to='/profile'>
                      <NavDropdown.Item>Profile</NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item onClick={logoutHandler}>
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <LinkContainer to='/login'>
                    <Nav.Link>
                      <i className='fas fa-user'></i> Sign In
                    </Nav.Link>
                  </LinkContainer>
                )}
      </Nav>
    </Navbar.Collapse>
    {/* </Container> */}
  </Navbar>
  </header> 
    )
}
