import './Footer.css'
import React from 'react'
// import classes from './MainNavigation.module.css'


function Footer() {
  return(
    <div className='container-fluid'>
    <div className='footer'>
      <div className='row'>
      {/* <img src ={logo} alt="Logo" className={classes.logo} /> */}
      {/* <span><h5 className={classes.brand}>JENGA JAMII</h5></span>  */}
      </div>
      <div className='row'>
        <div className='col-md-3 col-sm-3 col-lg-3'>
          <h5>ABOUT US</h5>
          <ul> <li>Policy prioties</li>
          <li>Mission</li>
          <li>Vission</li>
          <li>Values</li>
          </ul>
        </div>
        <div className='col-md-3 col-sm-3 col-lg-3'>
          <h5>SURPPORT US</h5>
          <ul>
            <li>Donate</li>
            <li>Start Project</li>
            <li>Visit Us</li>
            <li>Call Us</li>
          </ul>
        </div>
        <div className='col-md-3 col-sm-3 col-lg-3'>
          <h5>Qiuck Links</h5>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Donate</li>
            <li>Join VOlunteer</li>
          </ul>
        </div>
        <div className='col-md-3 col-lg-3 col-sm-3' id='sub'>
          <h5>News Letter</h5>
          <form>
            <input type="email" placeholder ="Email"></input>
            <button type='submit'>Subscribe</button>
          </form>
        </div>
      </div>
    </div>
    </div>
  )
  
}
export default Footer