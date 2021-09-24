import React, { Component } from 'react';
import { Row,Col,Card } from 'react-bootstrap';

import {removeItem} from "../Redux/action/wishlistAction";

const Wishlist =({item})=>{
    const handleRemove= (id)=>{
        removeItem(id);
    }
    return (
        <>
        {/* {items.map(item => */}
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
            {/* )} */}

        </>
    )
}


export default Wishlist;