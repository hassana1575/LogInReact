import React, { Component } from 'react'


export default class Login extends Component {
  render() {
    return (
      <form>
        <h3 style={{ color: 'white' }}>Login</h3>

        <div className="mb-3">

          <input
            className='form-control'

            required
            fullWidth
            id="my-input"

            placeholder="test@example.com"
            name="email"
            autoComplete="email" />
        </div>

        <div className="mb-3">
          <input
            className='form-control'
            margin="normal"
            required
            fullWidth
            name="password"
            placeholder="Password"
            type="password"
            id="my-input"
            autoComplete="current-password"
          />
        </div>

        <div className='d-grid'>
          <span className="forgot-password">Don't have an account? <a href="/sign-up">Register</a></span>
        </div>

        <br></br>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary" >
            Submit
          </button>
        </div>

      </form>
    )
  }
}
