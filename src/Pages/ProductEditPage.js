import React, { useState, } from 'react'
import { Link } from 'react-router-dom'
import { Form, Button,DropdownButton,Dropdown } from 'react-bootstrap'
import Loader from '../Components/Loader'



const ProductEditPage = ({ match, history }) => {
  const productId = match.params.id

  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [image, setImage] = useState('')
  const [brand, setBrand] = useState('')
  const [category, setCategory] = useState('')
  const [countInStock, setCountInStock] = useState(0)
  const [description, setDescription] = useState('')
  const [uploading, setUploading] = useState(false)
  const [checked,setChecked] = useState("Sell")



  const uploadFileHandler = async (e) => {
    const file = e.target.files[0]
    const formData = new FormData()
    formData.append('image', file)
    setUploading(true)
  }


  const radioChange = (e) => {
    setChecked(e.target.value)
  }

  return (
    <>
      <Link to='/' className='btn btn-light my-3'>
        Go Back
      </Link>
      <h1 className="ml-2">Sell/Rent Product</h1>
      <div className="Sellmain">
      <div>
         <DropdownButton className="Sellbar"  title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </div>
      <div>
         <DropdownButton className="Sellbar"   title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </div>
      <div>
         <DropdownButton className="Sellbar"   title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
      </div>
      </div>
       <div>     
      <Form.Group controlId='description'>
              <Form.Label>Description</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <div className="ml-2">
                <input className="ml-2" type="radio" checked={checked === "Sell"} value="Sell" name="gender" onChange={radioChange} /> Sell
                <input className="ml-4" type="radio" checked={checked === "Rent"} value="Rent" onChange={radioChange} /> Rent
            </div>
            {(checked==='Sell') ?
            <div className="sellinput">
            <Form.Control className="sell" placeholder="price" />
            <div>
            <DropdownButton className="Sellba"   title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            </div>
            <Form.Control className="sell" placeholder="Quantity" />
            <DropdownButton className="Sellba"   title="Dropdown button">
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </DropdownButton>
            </div>
             : <><div className="sellinput">
             <Form.Control className="sell" placeholder="price" />
             <div>
             <DropdownButton className="Sellba"   title="Dropdown button">
             <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
             <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
             <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
             </DropdownButton>
             </div>
             </div></>}
            <Form.Group controlId='image'>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type='text'
                placeholder='Enter image url'
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              </Form.Group>
              <Form.Group>
              <Form.File
                id='image-file'
                label='Choose File'
                custom
                onChange={uploadFileHandler}
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Button className="submitbtn" type='submit' variant='primary'>
              Update
            </Button>
        </div>    

    </>
  )
}


export default ProductEditPage