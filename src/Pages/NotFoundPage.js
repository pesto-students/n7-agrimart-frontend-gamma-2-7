import React from 'react'
import './NotFoundPage.css';
import { LinkContainer } from "react-router-bootstrap"

export default function NotFoundPage() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="error-template">
            <h1>
              Oops!</h1>
            <h2>
              404 Not Found</h2>
            <div className="error-details">
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className="error-actions">
              <LinkContainer className="btn btn-primary btn-lg" to='/'>
                <div>
                <span className="glyphicon glyphicon-home"></span>
                Take Me Home
                </div>
              </LinkContainer>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}