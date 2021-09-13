import React from 'react';
import {NavDropdown,Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap';



export default function Header() {
    return (
    <Navbar bg="light" expand="lg">
    <Navbar.Brand href="#"><strong>AgriMart</strong></Navbar.Brand>
    <Form className="search">
        <FormControl
          type="search"
          placeholder="Search"
          className="mr-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    {/* <Navbar.Toggle aria-controls="navbarScroll" /> */}
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
        <NavDropdown title="Login" className="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">Something else here</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
    )
}
