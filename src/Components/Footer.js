import React from 'react'
import SimpleReactFooter from "simple-react-footer";
import {Navbar,Nav,Container} from 'react-bootstrap';
import FooterLogo from "../assests/footerlogo.png";


const Footer =() => {

 return (
     <>
 <footer>
 <Navbar expand="lg" className="footernav">

 <div className="footercontent">
 <div className="footermain">
 <Navbar.Brand className="ml-2 mt-2"><img src={FooterLogo} alt ="" /></Navbar.Brand>
    <Navbar.Text className='ml-2' style={{color:'white',width:'50%'}}>
    AgroMart is a platform to connect farmers directly to customers. We help farmers to buy, sell, or rent their products by providing a platform and also farmer can buy farming product.
    </Navbar.Text>
</div>
<div className="mt-2">
<h4>Quick Links</h4>
    <ul>
        <li>Help</li>
        <li>Contact us</li>
        <li>About us</li>
    </ul>
</div>
</div>
 </Navbar>
 <div style={{backgroundColor:'black'}}>
    <p>Copywrite @Agrofarm</p>
</div>
 </footer>
 </>
 )};
 
export default Footer;
