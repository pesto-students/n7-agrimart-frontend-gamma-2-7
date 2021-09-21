import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap'
import Rating from '../Components/Rating'


const ProductPage = ({ history, match }) => {
 

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
          {/* <Row>
            <Col md={6}>
              <h2>Reviews</h2>
              {product.reviews.length === 0 && <Message>No Reviews</Message>}
              <ListGroup variant='flush'>
                {product.reviews.map((review) => (
                  <ListGroup.Item key={review._id}>
                    <strong>{review.name}</strong>
                    <Rating value={review.rating} />
                    <p>{review.createdAt.substring(0, 10)}</p>
                    <p>{review.comment}</p>
                  </ListGroup.Item>
                ))}
                <ListGroup.Item>
                <h2>Write a Customer Review</h2>
                  {errorProductReview && (
                    <Message variant='danger'>{errorProductReview}</Message>
                  )}
                  {userInfo ? (
                    <Form onSubmit={submitHandler}>
                      <Form.Group controlId='rating'>
                        <Form.Label>Rating</Form.Label>
                        <Form.Control
                          as='select'
                          value={rating}
                          onChange={(e) => setRating(e.target.value)}
                        >
                          <option value=''>Select...</option>
                          <option value='1'>1 - Poor</option>
                          <option value='2'>2 - Fair</option>
                          <option value='3'>3 - Good</option>
                          <option value='4'>4 - Very Good</option>
                          <option value='5'>5 - Excellent</option>
                        </Form.Control>
                      </Form.Group>
                      <Form.Group controlId='comment'>
                        <Form.Label>Comment</Form.Label>
                        <Form.Control
                          as='textarea'
                          row='3'
                          value={comment}
                          onChange={(e) => setComment(e.target.value)}
                        ></Form.Control>
                      </Form.Group>
                      <Button type='submit' variant='primary'>
                        Submit
                      </Button>
                    </Form>
                  ) : (
                    <Message>
                      Please <Link to='/login'>sign in</Link> to write a review{' '}
                    </Message>
                  )}
                </ListGroup.Item>
              </ListGroup>
              </Col>
          </Row> */}
        </>
    </>
  )
}
export default ProductPage;