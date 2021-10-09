import React from 'react'
import { Spinner } from 'react-bootstrap'
const Loader = () => {
  return (
    <Spinner
      animation='border'
      role='status'
      style={{
        color:'#659107',
        width: '100px',
        height: '100px',
        margin: 'auto',
        display: 'block',
      }}
    >
      <span className='sr-only'>Loading...</span>
      <span className='sr-only'>Loading...</span>
    </Spinner>
  )
}

export default Loader;