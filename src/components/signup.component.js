// import { TextField } from '@mui/material'
import React, { Component } from 'react'


export default class SignUp extends Component {
  render() {
    return (

      <form>
        <h3 style={{ color: 'white' }} >Register</h3>

        <div className="mb-3">

          <input autoComplete="given-name"
            className='form-control'
            name="firstName"
            required
            fullWidth
            id="my-input"
            placeholder="First Name"
            autoFocus
          />
        </div>

        <div className="mb-3">
          <input
            className='form-control'
            required
            fullWidth
            id="my-input"
            placeholder="Last Name"
            name="lastName"
            autoComplete="family-name"
          />
        </div>

        <div className="mb-3">
          <input
            className='form-control'
            required
            fullWidth
            id="my-input"
            placeholder="test@example.com"
            name="email"
            autoComplete="email"
          />
        </div>

        <div className="mb-3">
          <input
            className='form-control'
            required
            fullWidth
            name="password"
            placeholder='Password'
            type="password"
            id="my-input"
            autoComplete="new-password"
          />
        </div>

        <div className='d-grid'>
          <span className="forgot-password">Already have an account? <a href="/sign-in">Login</a></span>
        </div>

        <br></br>
        
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>

      </form>

    )
  }
}
