import React from "react";
// import logo from '../components/Layout/assets/logo.png'
// import classes from './Auth.css'
import { UilEye } from '@iconscout/react-unicons'
import { UilEyeSlash } from '@iconscout/react-unicons'
import { UilEnvelope } from '@iconscout/react-unicons'
import { UilLockOpenAlt } from '@iconscout/react-unicons'
import { UilUsersAlt } from '@iconscout/react-unicons'
import './Auth.css'
function Singup() {
  return (
    <div className="container">
      <div className="header">
        <h1>Sign Up</h1>
          <form>
          <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-3"></div>
            <div className="col-md-6 col-lg-6 col-sm-6">
              <i className="i"><UilUsersAlt/></i>
            <input type="text" placeholder="Username" />
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3"></div>
            </div>
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
            <div className="row">
            <div className="col-md-3 col-lg-3 col-sm-3"></div>
            <div className="col-md-6 col-lg-6 col-sm-6">
            <i className="i"><UilLockOpenAlt/></i>
              <input type="password" placeholder="Confirm password" />
              <i className="icon">
              <UilEyeSlash/>
              </i>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3"></div>
          </div>
          <div className="row" id="row">
            <div className="col-md-3 col-lg-3 col-sm-3"></div>
            <div className="col-md-6 col-lg-6 col-sm-6">
            <button type="submit" value="Signup">Signup</button>
            </div>
            <div className="col-md-3 col-lg-3 col-sm-3"></div>
            </div>
            <p className="acc">Already Have an Account Login</p>
          </form>
          </div>
      </div>
  )
}
export default Singup