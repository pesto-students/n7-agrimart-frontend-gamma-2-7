import React, { useState } from 'react'
import { Form, Button,DropdownButton,Dropdown,InputGroup } from 'react-bootstrap'

const SearchBar = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }

  return (
    <Form className="mt-2"  onSubmit={submitHandler}>
        <InputGroup className="mb-3">
            <DropdownButton
            variant="outline-secondary"
            title="Categories"
            // id="input-group-dropdown-1"
            className="searchCatbtn"
            >
      <Dropdown.Item href="#">Vegetables</Dropdown.Item>
      <Dropdown.Item href="#">Fruits</Dropdown.Item>
      <Dropdown.Item href="#">Rent</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="#"></Dropdown.Item>
    </DropdownButton>
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