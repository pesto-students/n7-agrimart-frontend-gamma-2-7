import React from 'react';
import { Route } from 'react-router-dom';
import {LinkContainer} from "react-router-bootstrap"
import {Navbar,Nav,Container} from 'react-bootstrap';
import Logo from "../assests/AgroMart.png";
import SearchBar from  "./SearchBar"



export default function Header() {
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
        <Nav.Link href="/login">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    {/* </Container> */}
  </Navbar>
  </header> 
    )
}
