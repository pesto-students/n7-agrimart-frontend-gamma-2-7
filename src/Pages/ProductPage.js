import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, } from 'react-bootstrap'
import Rating from '../Components/Rating'
import {addToWishlist} from "../Redux/action/wishlistAction";
import { connect } from 'react-redux';


const ProductPage = ({items}) => {
    const [product,setProduct] = useState(items)
    let filterItem = (prodname) =>{
        const updated = items.filter(item =>{
        return item.title === prodname
    });
    setProduct(updated)
    }
 

  return (
    <>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
        <>
        <Row>
          <Col md={4} className="ml-3">
            <Image src="https://picsum.photos/350/350" alt="" fluid />
          </Col>
          <Col md={3}>
          <ListGroup variant='flush'>
                <ListGroup.Item>
                <h4>Rice</h4>
                </ListGroup.Item>
                <ListGroup.Item><p style={{fontWeight:"900"}}>Price:</p>RS 20/Kg</ListGroup.Item>
                <ListGroup.Item>
                  Description:"Rice is cooked by boiling, or it can be ground into a flour. It is eaten alone and in a great variety of soups, side dishes, and main dishes in Asian, Middle Eastern, and many other cuisines. Other products in which rice is used are breakfast cereals, noodles, and such alcoholic beverages as Japanese sake."
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col md={3} className="ml-2">
              <Card>
              <Card className="prodimage"> 
              <Card.Img variant="center" className="Prdouctimage" src="https://picsum.photos/350/350" />
              </Card> 
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col style={{fontWeight:"900"}}>
                        Account Holder
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      <strong>Ratings</strong>
                    <Rating value={5}/>
                </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                    <Col><strong>Contact Details:</strong></Col>
                    </Row>
                    <Row>
                    <Col>
                    +91-99999999
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                    +91-99999999
                    </Col>
                    </Row>
                    <Row>
                    <Col>
                    AccountHolder@email.com
                    </Col>
                    </Row>
                  </ListGroup.Item>
                  
                </ListGroup>
              </Card>
            </Col>
          </Row>
        </>
    </>
  )
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

export default connect(mapStateToProps,mapDispatchToProps)(ProductPage)
