import React from 'react';
import {Navbar,Nav,Container,Form,FormControl,Button} from 'react-bootstrap';
import Logo from "../assests/AgroMart.png";



export default function Header() {
    return (
     <header>  
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#"><img src={Logo} alt ="" /></Navbar.Brand>
    <Form className="search">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse className='justify-content-end header'>
      <Nav
        className="header"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link>
            <i className='fas fa-heart'></i>
        </Nav.Link>
        <Nav.Link href="#home">SignUp</Nav.Link>
        <Nav.Link href="#home">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    {/* </Container> */}
  </Navbar>
  </header> 
    )
}
