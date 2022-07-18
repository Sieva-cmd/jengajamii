import React from 'react'
import { UilEye } from '@iconscout/react-unicons'
import { UilEnvelope } from '@iconscout/react-unicons'
import { UilLockOpenAlt } from '@iconscout/react-unicons'

import './Auth.css'
function Login() {
  return (
    <div className="container" id='login'>
      <div className="header">
        <h1>Login</h1>
          <form>
            <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-3"></div>
            <div className="col-md-6 col-lg-6 col-sm-6">
              <i className="i"><UilEnvelope/></i>
            <input type="email" placeholder="Email" />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3"></div>
            </div>
            <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-3"></div>
            <div className="col-md-6 col-lg-6 col-sm-6">
              <i className="i"><UilLockOpenAlt/></i>
              <input type="password" placeholder="Password" /> 
              <i className="icon">
              <UilEye/>
              </i>
              
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3"></div>
            </div>
 
          <div className="row" id="row">
            <div className="col-md-3 col-lg-3 col-sm-3"></div>
            <div className="col-md-6 col-lg-6 col-sm-6">
            <button type="submit" value="Signup">Login</button>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3"></div>
            </div>
            <p className="acc">Don't Have an Account Signup</p>
          </form>
          </div>
      </div>
  )
}
export default Login