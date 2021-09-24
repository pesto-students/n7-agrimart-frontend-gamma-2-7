import React, { useState } from "react";
import {Link} from 'react-router-dom';
import {Card,Button} from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap'
import { connect, useSelector } from "react-redux";
import {addToWishlist} from "../Redux/action/wishlistAction";
import Tractor from "../assests/Tractor.jpg";
import Pesticide from "../assests/Pesticides.jpg";
import Rice from "../assests/Rice.jpg";

const Product =() =>{
    const productList = useSelector((state) => state.items);
    const productState = useSelector((state) => state.product.product);
    console.log(productState,'products from store ')
    const {items} = productList
    
    const [product,setProduct] = useState(items);

      
    const handleClick=(id)=>{
        addToWishlist(id);
        console.log(addToWishlist(id))
        console.log(addToWishlist())
    }

    let filterItem = (prodname) =>{
        const updated = items.filter(item =>{
        return item.title === prodname
    });
    setProduct(updated)
    }

    return (
        <>
        <Row className="ml-2">
            <Col>
            <Card className="my-3 p-4 rounded filtercard" style={{ width: '14rem', height:'14rem' }}>
            <Card.Img className="filterimg" onClick={()=>filterItem('Tractor')} src={Tractor} variant="top"/>
            <Card.Body className="filterbody">
                <Card.Title className="filtertitle" as="p">
                    Get Product on rent for farming.
                </Card.Title>
            </Card.Body>
        </Card>
            </Col>
            <Col>
            <Card className="my-3 p-4 rounded filtercard" style={{ width: '14rem', height:'14rem' }}>
            <Card.Img className="filterimg" onClick={()=>filterItem('Pesticides')} src={Pesticide} variant="top"/>
            <Card.Body className="filterbody">
                <Card.Title className="filtertitle" as="p">
                    Buy Product for farming.
                </Card.Title>
            </Card.Body>
        </Card>
        </Col>
        <Col>
            <Card className="my-3 p-4 rounded filtercard" style={{ width: '14rem', height:'14rem' }}>
            <Card.Img className="filterimg" onClick={()=>filterItem('Rice')} src={Rice} variant="top"/>
            <Card.Body className="filterbody">
                <Card.Title className="filtertitle" as="p">
                    Buy Product from farmers.
                </Card.Title>
            </Card.Body>
        </Card>
            </Col>
            <Col>
            <Link to='/products'>
            <Card className="my-3 p-4 rounded filtercard" style={{ width: '14rem', height:'14rem' }}>
            <Card.Img className="filterimg"  href='/products' src="https://picsum.photos/50/45" variant="top"/>
            <Card.Body className="filterbody">
                <Card.Title className="filtertitle" as="p">
                    Add your products to Sell/Rent
                </Card.Title>
            </Card.Body>
        </Card>
        </Link>
            </Col>
        </Row>
        <h1 className="ml-2">Latest Products</h1>
        {product && product.map(item =>
        <Row className="ml-2 mr-2">
        <Col sm={12} md={6} lg={4} xl={3}>
        <Card className="my-3 p-3 rounded">
            <Card.Img src={item.img} variant="top"/>
            <Card.Body>
                <Card.Title as="div">
                    <strong>{item.title}</strong>
                </Card.Title>
                <Card.Title as="div">
                    <strong>{item.location}</strong>
                </Card.Title>
                <Card.Title as='p'>
                <strong>Price:</strong>Rs{item.price}/Kg
                </Card.Title>
                <Button className="my-2 p-1 w-100 wishlistbutn" onClick={()=>handleClick(item.id)} >Add to Wishlist</Button>
                <Button className="my-2 p-1 w-100" href='/product'  style={{backgroundColor:"#648E06",border:"1px solid #648E06"}} variant="primary">Contact Supplier</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
        <Card className="my-3 p-3 rounded">
            <Card.Img src={item.img} variant="top"/>
            <Card.Body>
                <Card.Title as="div">
                    <strong>{item.title}</strong>
                </Card.Title>
                <Card.Title as="div">
                    <strong>{item.location}</strong>
                </Card.Title>
                <Card.Title as='p'>
                <strong>Price:</strong>Rs{item.price}/Kg
                </Card.Title>
                <Button className="my-2 p-1 w-100 wishlistbutn" onClick={handleClick} >Add to Wishlist</Button>
                <Button className="my-2 p-1 w-100" href="/product"   style={{backgroundColor:"#648E06",border:"1px solid #648E06"}} variant="primary">Contact Supplier</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
        <Card className="my-3 p-3 rounded">
            <Card.Img src={item.img} variant="top"/>
            <Card.Body>
                <Card.Title as="div">
                    <strong>{item.title}</strong>
                </Card.Title>
                <Card.Title as="div">
                    <strong>{item.location}</strong>
                </Card.Title>
                <Card.Title as='p'>
                <strong>Price:</strong>Rs{item.price}/Kg
                </Card.Title>
                <Button className="my-2 p-1 w-100 wishlistbutn" >Add to Wishlist</Button>
                <Button className="my-2 p-1 w-100" href="/product"   style={{backgroundColor:"#648E06",border:"1px solid #648E06"}} variant="primary">Contact Supplier</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
        <Card className="my-3 p-3 rounded" key={item.id}>
            <Card.Img src={item.img} variant="top"/>
            <Card.Body>
                <Card.Title as="div">
                    <strong>{item.title}</strong>
                </Card.Title>
                <Card.Title as="div">
                    <strong>{item.location}</strong>
                </Card.Title>
                <Card.Title as='p'>
                <strong>Price:</strong>Rs{item.price}/Kg
                </Card.Title>
                <Button className="my-2 p-1 w-100 wishlistbutn" >Add to Wishlist</Button>
                <Button className="my-2 p-1 w-100" href="/product"   style={{backgroundColor:"#648E06",border:"1px solid #648E06"}} variant="primary">Contact Supplier</Button>
            </Card.Body>
        </Card>
        </Col>
        </Row>
        )}
        </>
    ) 
}


export default Product;

