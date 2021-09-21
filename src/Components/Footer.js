import React from 'react'
import SimpleReactFooter from "simple-react-footer";
import FooterLogo from "../assests/footerlogo.png";


const Footer =() => {
  const description = "AgroMart is a platform to connect farmers directly to customers. We help farmers to buy, sell, or rent their products by providing a platform and also farmer can buy farming product.";
  const title = "AgroMart"
  const columns = [
    {
        title: "Resources",
        resources: [
            {
                name: "About",
                // link: "#"
            },
            {
                name: "Careers",
                // link: "#"
            },
            {
                name: "Contact",
                // link: "#"
            },
    
        ]
    },
 ];
 return (
     <>
      <SimpleReactFooter 
    description={description} 
    title={title}
    columns={columns}
    linkedin="fluffy_cat_on_linkedin"
    facebook="fluffy_cat_on_fb"
    twitter="fluffy_cat_on_twitter"
    instagram="fluffy_cat_live"
    youtube="UCFt6TSF464J8K82xeA?"
    pinterest="fluffy_cats_collections"
    copyright="AgroMart"
    iconColor="black"
    backgroundColor="#648E06"
    fontColor="black"
    copyrightColor="darkgrey"
    className="Footer"
 />
 </>
 )};
 
export default Footer;
