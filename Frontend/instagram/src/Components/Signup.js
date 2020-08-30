import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    return (
        <div className="card">
        <h1>SignUp</h1>
        <div className="input-field">
          <input placeholder="Enter Your Name" name="name" type="text" className="validate"/>
          <input placeholder="Enter Your Email" name="email" type="email" className="validate"/>
          <input placeholder="Enter Your Password" name="password" type="password" className="validate"/>
          <button class="btn waves-effect waves-light  #03a9f4 light-blue">SignUp
         </button>
         <Link to="/">Already have account?</Link>
        </div>
      </div>
    )
}
