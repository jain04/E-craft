import React from 'react'
import './Login.css'
import { Link } from 'react-router-dom'

function Login() {
  return (
    <div>
      <div class="login-container">
        <div class="login-form">
            <h2>Login</h2>
            <form action="/submit_login" method="post">
                <div class="input-group">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required/>
                </div>
                <div class="input-group">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required/>
                </div>
                <button type="submit">Login</button>
                <p class="signup-link">Don't have an account? <Link className=' text-red-500 font-bold' to={'/signup'}>SignUp</Link></p>
            </form>
        </div>
    </div>
      
    </div>
  )
}

export default Login
