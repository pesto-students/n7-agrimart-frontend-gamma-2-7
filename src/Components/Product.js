import React from "react";
import { Component } from "react";
import {Card,Button} from 'react-bootstrap';
import { Row, Col } from 'react-bootstrap'
import { connect } from "react-redux";
import {addToWishlist} from "../Redux/action/wishlistAction"

class Product extends Component{
    handleClick=(id)=>{
        this.props.addToWishlist(id);
        console.log(addToWishlist(id))
        console.log(addToWishlist())
    }
    render(){
        let itemList = this.props.items.map(item=>{
    return (
        <Row className="ml-2 mr-2">
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
                <Button className="my-2 p-1 w-100 wishlistbutn" onClick={()=>{this.handleClick(item.id)}} >Add to Wishlist</Button>
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
                <Button className="my-2 p-1 w-100 wishlistbutn"  onClick={()=>{this.handleClick(item.id)}} >Add to Wishlist</Button>
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
    )
    })
    return (
        <>
        <Row className="ml-2">
            <Col>
            <Card className="my-3 p-4 rounded filtercard" style={{ width: '14rem', height:'14rem' }}>
            <Card.Img className="filterimg" src="https://picsum.photos/50/45" variant="top"/>
            <Card.Body className="filterbody">
                <Card.Title className="filtertitle" as="p">
                    Get Product on rent for farming.
                </Card.Title>
            </Card.Body>
        </Card>
            </Col>
            <Col>
            <Card className="my-3 p-4 rounded filtercard" style={{ width: '14rem', height:'14rem' }}>
            <Card.Img className="filterimg" src="https://picsum.photos/50/45" variant="top"/>
            <Card.Body className="filterbody">
                <Card.Title className="filtertitle" as="p">
                    Get Product on rent for farming.
                </Card.Title>
            </Card.Body>
        </Card>
        </Col>
        <Col>
            <Card className="my-3 p-4 rounded filtercard" style={{ width: '14rem', height:'14rem' }}>
            <Card.Img className="filterimg" src="https://picsum.photos/50/45" variant="top"/>
            <Card.Body className="filterbody">
                <Card.Title className="filtertitle" as="p">
                    Get Product on rent for farming.
                </Card.Title>
            </Card.Body>
        </Card>
            </Col>
            <Col>
            <Card className="my-3 p-4 rounded filtercard" style={{ width: '14rem', height:'14rem' }}>
            <Card.Img className="filterimg" src="https://picsum.photos/50/45" variant="top"/>
            <Card.Body className="filterbody">
                <Card.Title className="filtertitle" as="p">
                    Get Product on rent for farming.
                </Card.Title>
            </Card.Body>
        </Card>
            </Col>
        </Row>
        <h1 className="ml-2">Latest Products</h1>
        {itemList}
        </>

    )
}
}
const mapStateToProps = (state)=>{
    return {
      items: state.items,
    }
  }
const mapDispatchToProps=(dispatch)=>{
    return{
        addToWishlist:(id)=>{dispatch(addToWishlist(id))}
    }
}   

export default connect(mapStateToProps,mapDispatchToProps)(Product)

