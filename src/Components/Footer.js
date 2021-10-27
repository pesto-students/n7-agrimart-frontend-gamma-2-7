import React from 'react'
import SimpleReactFooter from "simple-react-footer";
import {Navbar,Nav,Container} from 'react-bootstrap';
import FooterLogo from "../assests/footerlogo.png";


const Footer =() => {

 return (
     <>
         {/*  about section-> */}
         <section className="about-section">
             <div className="container-fluid">
                 <h3>AgroMart Is A Platform To Connect Farmers Directly To Customers. We Help Farmers To Buy, Sell, Or Rent Their Products By Providing A Platform And Also Farmer Can Buy Farming Product.</h3>
                 <p>
                     We help independent farmers to showcase their products and get the best possible rates, farmers can also rent their equipment when they are not in use. We enable buyers to establish direct contact with the farmers by connecting with them via WhatsApp, Call, or email.
                 </p>

                 <p>
                     We help faremers to buy agriculture product (like seeds & plants, pesticides, fertilizer, irrigation tools, and machinery, etc.) from different seller on the same platform.
                 </p>
             </div>
         </section>
         <footer className="footer-section">
        <div className="container-fluid">
          <h2 className="title">Become a AgroMart seller</h2>
          <div className="d-flex ">
            <div className="col-6 text-end p-3">
              <a className="contact-details" href="tel:051 534064">
                Give us a call <i className="fas fa-mobile " /> <br /> 051 534064</a>
            </div>
            <div className="vertical" />
            <div className="col-6 text-start p-3">
              <a className="contact-details" href="mailto: supathdeal@gmail.com">
                Send us an email  <i className="far fa-envelope " /> <br /> agromart@gmail.com</a>
            </div>
          </div>
          <hr />
          <div className="row d-sm-flex justify-content-center text-center">
            <div className="col-sm-4 ">
              <img className="img-fluid footer-logo" src={FooterLogo} alt="logo" />
            </div>
            <div className="col-sm-4"><p className="copyright">© 2021 AGROMART. All Rights Reserved. </p></div>
            <div className="col-sm-4 ">
              <div className="d-flex flow-us justify-content-center text-center">
                <i className="fab fa-facebook-square me-3" />
                <i className="fab fa-linkedin me-3" />
                <i className="fab fa-twitter-square me-3" />
              </div>
            </div>
          </div>
        </div>
      </footer>
 </>
 )};
 
export default Footer;
