import React from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import { Row, Col, Image, ListGroup, Card, Container, } from 'react-bootstrap'
import Rating from '../Components/Rating'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Product from '../Components/Product';
import { addToWishlist } from "../Redux/action/wishlistAction";
import { connect } from 'react-redux';
import avatarImg from '../assests/profile of farmer.jpg';
import { Redirect } from "react-router-dom";

const ProductPage = (props) => {
  const { match } = props
  
  const product = (useSelector((state) => state.product?.products?.filter(item => item.id === match.params.id)[0]));
  if (!product) {
    return <Redirect to="/" />
  }

  const {area, city, state} = product.productOwner.address;
  console.log(product, 'product page')

  return (
    <>
    <Header />
    <main >
    <Container>
      <Link className='btn btn-light my-3' to='/'>
        Go Back
      </Link>
      <Row>
        <Col lg="8">
        <Row>
        <Col className="">
            <Image src={product.images[0]} alt="" fluid />
          </Col>
          <Col >
            <ListGroup variant='flush'>
                <h4>{product.title}</h4>
                {product.minimumOrderQuantity &&
                  <p style={{ fontWeight: "600" }}>{`Minimum Order Quantity : ${product.minimumOrderQuantity}`}</p>
                }
              <p style={{ fontWeight: "600" }}>{`Price : ${product.price}`}</p>
                <p>
                  {`${product.description}
                With our expertise and trustworthiness, we have secured a respectable position for ourselves in this domain. 
                Different The beautiful jar they’re packaged in The scent of the bath salts How baths are great for relieving stress The benefits of the ingredients for the skin`}
                </p>
            </ListGroup>
          </Col>
        </Row>
        </Col>
        <Col lg="4">
          <Row>
            <Col >
              <Card style={{borderRadius:'12px', padding:'20px'}}>
              <Card.Img src={product.productOwner.avatar} className="seller-image" alt={avatarImg} />
                  {/* <Card.Img variant="center" className="Prdouctimage" src={avatarImg} /> */}

                <div className="text-left pt-2">
                  <p className="text-center" style={{ fontWeight: "900" }}>
                    {product.productOwner.name}
                  </p>
                  <p className="seller-address"  >
                    <i className="fas fa-map-marker me-2 " />
                    <span>  {`${area}, ${city}, ${state}`} </span></p>

                  <div>
                  <strong >Ratings</strong>
                  <Rating value={Math.floor(Math.random() * 6) + 1} />
                  </div> 

                  <div  className="pt-2">
                  <strong className="pb-2">Contact Details:</strong>
                  {product.productOwner.phones.map((item, i) => (
                    <p className="seller-address">
                    <i className="fas fa-mobile me-3 " />
                    <a href={`tel:${product.productOwner.phones[i]}`}>
                    {product.productOwner.phones[i]}
                    </a>
                    </p>
                  ))}
               
                  <p className="seller-address">
                  <i className="fab fa-whatsapp me-3" />
                  <span>    
                  <a href={`https://wa.me/91${product.productOwner.whatsAppNo}&text=Hello!`}>
                  {product.productOwner.whatsAppNo}
                    </a>
                  </span>
                   
                  </p>

                  <p className="seller-address">
                  <a href={`mailto:${product.productOwner.email}`}>
                  <i className="far fa-envelope me-3 " />
                  {product.productOwner.email}
                    </a>
                   
                  </p>
                  </div>
                </div>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
      <Product />
    </main>
    <Footer />
  </>
  )
}
const mapStateToProps = (state) => {
  return {
    items: state.items,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    addToWishlist: (id) => { dispatch(addToWishlist(id)) }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductPage)
