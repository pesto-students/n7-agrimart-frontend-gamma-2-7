import React, { useState, useEffect } from 'react'
import { Form, Button,DropdownButton,Dropdown,InputGroup } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../Redux/action/productAction'

const SearchBar = () => {
  const dispatch = useDispatch();
  const [keyword, setKeyword] = useState('');

  // const categories = useSelector((state) => state.category.items)

  // useEffect(() => {
  //   dispatch(fetchProducts({queryString:keyword, limit:8}));
  // });

  




  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      dispatch(fetchProducts({queryString:keyword, limit:8}, `Results for ${keyword}`));
    }
  }

  return (
    <Form className="mt-3" onSubmit={submitHandler}>
      <InputGroup className="mb-3">
        {/* <DropdownButton
          variant="outline-secondary"
          title="Categories"
          // id="input-group-dropdown-1"
          className="searchCatbtn"
        >
          {categories && categories.map(item =><Dropdown.Item key ={item.id} >{item.name}</Dropdown.Item>)}
        </DropdownButton> */}
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='searchbar'
      ></Form.Control>
      <Button type='submit' className='search'>
        Search
      </Button>
      </InputGroup>
    </Form>
  )
}

export default SearchBar;