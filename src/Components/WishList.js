import React, { Component } from 'react';
import { Row,Col,Card } from 'react-bootstrap';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {removeItem} from "../Redux/action/wishlistAction";

const Wishlist =({items})=>{
    const handleRemove= (id)=>{
        removeItem(id);
    }
    return (
        <>
        {items.map(item =>
            <Row key={item.id}>
                <Col>
                    <div>
                    <Card className="my-3 p-3 rounded">
                    <Card.Img src={item.img} variant="top"/>
                    </Card>
                    <Card.Text>{item.title}</Card.Text>
                    <Card.Text>{item.Location}</Card.Text>
                    <Card.Text><i onClick={handleRemove} class="fas fa-trash-alt"></i></Card.Text>
                    
                    </div>
                </Col>
            </Row>
            )}

        </>
    )
}
const mapStateToProps = (state)=>{
    console.log(state)
    return{
        items: state.addedItems
    }
}
const mapDispatchToProps=(dispatch)=>{
    return{
        removeItem:(id)=>{dispatch(removeItem(id))},
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Wishlist)