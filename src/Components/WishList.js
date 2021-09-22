import React, { Component } from 'react';
import { Row,Col,Card } from 'react-bootstrap';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import {removeItem} from "../Redux/action/wishlistAction";

class Wishlist extends Component {
     handleRemove= (id)=>{
        this.props.removeItem(id);
    }
    render(){
        let addedItems = this.props.items.length ?
        (
            this.props.items.map(item=>{
                return(
                    <Row key={item.id}>
                    <Col>
                        <div>
                        <Card className="my-3 p-3 rounded">
                        <Card.Img src={item.img} variant="top"/>
                        </Card>
                        <Card.Text>{item.title}</Card.Text>
                        <Card.Text>{item.Location}</Card.Text>
                        <Card.Text><i onClick={()=>{this.handleRemove(item.id)}}class="fas fa-trash-alt"></i></Card.Text>
                        
                        </div>
                    </Col>
                </Row>
                )})
                ): (<p>Nothing</p>)
    return (
        <>
            {addedItems}
        </>
    )
}
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