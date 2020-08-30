import React from 'react'
import { Link } from 'react-router-dom'

export default function Login() {
    return (
        <div className="card">
        <h1>Login</h1>
        <div className="input-field">
          <input placeholder="Enter Your Email" name="email" type="email" className="validate"/>
          <input placeholder="Enter Your Password" name="password" type="password" className="validate"/>
          <button class="btn waves-effect waves-light  #03a9f4 light-blue">LogIn
         </button>
         <Link to="/signup">Don't have account?</Link>
        </div>
      </div>
    )
}
