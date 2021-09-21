import React from "react";
import {Card,Button} from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap'

const Product =() =>{
    return (
        <>
        <Row className="ml-2">
            <Col>
            <Card className="my-3 p-3 rounded" style={{ width: '14rem', height:'14rem' }}>
            <Card.Img src="https://picsum.photos/50/45" variant="top"/>
            <Card.Body>
                <Card.Title as="div">
                    <strong>Basmati Rice</strong>
                </Card.Title>
            </Card.Body>
        </Card>
            </Col>
            <Col>
            <Card className="my-3 p-3 rounded" style={{ width: '14rem', height:'14rem' }}>
            <Card.Img src="https://picsum.photos/50/45" variant="top"/>
            <Card.Body>
                <Card.Title as="div">
                    <strong>Basmati Rice</strong>
                </Card.Title>
            </Card.Body>
        </Card>
            </Col>
            <Col>
            <Card className="my-3 p-3 rounded" style={{ width: '14rem', height:'14rem' }}>
            <Card.Img src="https://picsum.photos/50/45" variant="top"/>
            <Card.Body>
                <Card.Title as="div">
                    <strong>Basmati Rice</strong>
                </Card.Title>
            </Card.Body>
        </Card>
            </Col>
            <Col>
            <Card className="my-3 p-3 rounded" style={{ width: '14rem', height:'14rem' }}>
            <Card.Img src="https://picsum.photos/50/45" variant="top"/>
            <Card.Body>
                <Card.Title as="div">
                    <strong>Basmati Rice</strong>
                </Card.Title>
            </Card.Body>
        </Card>
            </Col>
        </Row>
        <h1 className="ml-2">Latest Products</h1>
        <Row className="ml-2 mr-2">
        <Col sm={12} md={6} lg={4} xl={3}>
        <Card className="my-3 p-3 rounded">
            <Card.Img src="https://picsum.photos/500/450" variant="top"/>
            <Card.Body>
                <Card.Title as="div">
                    <strong>Basmati Rice</strong>
                </Card.Title>
                <Card.Title as='p'>
                <strong>Price:</strong>Rs20/Kg
                </Card.Title>
                <Button className="my-2 p-1 w-100 wishlistbutn" >Add to Wishlist</Button>
                <Button className="my-2 p-1 w-100" href="/product"   style={{backgroundColor:"#648E06",border:"1px solid #648E06"}} variant="primary">Contact Supplier</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
        <Card className="my-3 p-3 rounded">
            <Card.Img src="https://picsum.photos/500/450" variant="top"/>
            <Card.Body>
                <Card.Title as="div">
                    <strong>Basmati Rice</strong>
                </Card.Title>
                <Card.Title as='p'>
                <strong>Price:</strong>Rs20/Kg
                </Card.Title>
                <Button className="my-2 p-1 w-100 wishlistbutn" >Add to Wishlist</Button>
                <Button className="my-2 p-1 w-100"  style={{backgroundColor:"#648E06",border:"1px solid #648E06"}} variant="primary">Contact Supplier</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
        <Card className="my-3 p-3 rounded">
            <Card.Img src="https://picsum.photos/500/450" variant="top"/>
            <Card.Body>
                <Card.Title as="div">
                    <strong>Basmati Rice</strong>
                </Card.Title>
                <Card.Title as='p'>
                <strong>Price:</strong>Rs20/Kg
                </Card.Title>
                <Button className="my-2 p-1 w-100 wishlistbutn" >Add to Wishlist</Button>
                <Button className="my-2 p-1 w-100"  style={{backgroundColor:"#648E06",border:"1px solid #648E06"}} variant="primary">Contact Supplier</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
        <Card className="my-3 p-3 rounded">
            <Card.Img src="https://picsum.photos/500/450" variant="top"/>
            <Card.Body>
                <Card.Title as="div">
                    <strong>Basmati Rice</strong>
                </Card.Title>
                <Card.Title as='p'>
                <strong>Price:</strong>Rs20/Kg
                </Card.Title>
                <Button className="my-2 p-1 w-100 wishlistbutn" >Add to Wishlist</Button>
                <Button className="my-2 p-1 w-100"  style={{backgroundColor:"#648E06",border:"1px solid #648E06"}} variant="primary">Contact Supplier</Button>
            </Card.Body>
        </Card>
        </Col>
        </Row>
        <Row className="ml-2 mr-2">
        <Col sm={12} md={6} lg={4} xl={3}>
        <Card className="my-3 p-3 rounded">
            <Card.Img src="https://picsum.photos/500/450" variant="top"/>
            <Card.Body>
                <Card.Title as="div">
                    <strong>Basmati Rice</strong>
                </Card.Title>
                <Card.Title as='p'>
                <strong>Price:</strong>Rs20/Kg
                </Card.Title>
                <Button className="my-2 p-1 w-100 wishlistbutn" >Add to Wishlist</Button>
                <Button className="my-2 p-1 w-100" href="/product"  style={{backgroundColor:"#648E06",border:"1px solid #648E06"}} variant="primary">Contact Supplier</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
        <Card className="my-3 p-3 rounded">
            <Card.Img src="https://picsum.photos/500/450" variant="top"/>
            <Card.Body>
                <Card.Title as="div">
                    <strong>Basmati Rice</strong>
                </Card.Title>
                <Card.Title as='p'>
                <strong>Price:</strong>Rs20/Kg
                </Card.Title>
                <Button className="my-2 p-1 w-100 wishlistbutn" >Add to Wishlist</Button>
                <Button className="my-2 p-1 w-100"  style={{backgroundColor:"#648E06",border:"1px solid #648E06"}} variant="primary">Contact Supplier</Button>
            </Card.Body>
        </Card>
        </Col>
            <Col sm={12} md={6} lg={4} xl={3}>
        <Card className="my-3 p-3 rounded">
            <Card.Img src="https://picsum.photos/500/450" variant="top"/>
            <Card.Body>
                <Card.Title as="div">
                    <strong>Basmati Rice</strong>
                </Card.Title>
                <Card.Title as='p'>
                <strong>Price:</strong>Rs20/Kg
                </Card.Title>
                <Button className="my-2 p-1 w-100 wishlistbutn" >Add to Wishlist</Button>
                <Button className="my-2 p-1 w-100"  style={{backgroundColor:"#648E06",border:"1px solid #648E06"}} variant="primary">Contact Supplier</Button>
            </Card.Body>
        </Card>
        </Col>
        <Col sm={12} md={6} lg={4} xl={3}>
        <Card className="my-3 p-3 rounded">
            <Card.Img src="https://picsum.photos/500/450" variant="top"/>
            <Card.Body>
                <Card.Title as="div">
                    <strong>Basmati Rice</strong>
                </Card.Title>
                <Card.Title as='p'>
                <strong>Price:</strong>Rs20/Kg
                </Card.Title>
                <Button className="my-2 p-1 w-100 wishlistbutn" >Add to Wishlist</Button>
                <Button className="my-2 p-1 w-100"  style={{backgroundColor:"#648E06",border:"1px solid #648E06"}} variant="primary">Contact Supplier</Button>
            </Card.Body>
        </Card>
        </Col>
        </Row>
        </>
    ) 
}

export default Product;