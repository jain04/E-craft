import React from 'react'
import './Signup.css'
import { Link } from 'react-router-dom'

function Signup() {
  return (
    <div class="container">
    <div class="signup-form">
        <h2>Sign Up</h2>
        <form action="/submit_signup" method="post">
            <div class="input-group">
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class="input-group">
                <label for="email">Email</label>
                <input type="email" id="email" name="email" required/>
            </div>
            <div class="input-group">
                <label for="password">Password</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="input-group">
                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" required/>
            </div>
            <button type="submit">Sign Up</button>
        </form>
        <div>
          <p className='na'>Have a Account <Link className='noAccount' to={'/login'}>Login</Link></p>
        </div>
    </div>
</div>
  )
}

export default Signup
