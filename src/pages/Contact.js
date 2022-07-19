import React from "react";
import './Contact.css';
function Contact() {
  return(
    <div className="container" id="contact">
      <div className="row">
        <h3>Want a chat with us? <br /> Send us a Message</h3>
        <p>Use The Contact Form To Inquire About Volunteer Positions Or Regarding Any Questions Or Concerns.</p>
      </div>
      <form>
      <div className="row">
        <div className="col-md-2 col-sm-2 col-lg-2"></div>
          <div className="col-md-8 col-sm-8 col-lg-8">
     
            <input className="contact" type='text'placeholder="Username" />
        
            <input className="contact" type='email' placeholder="Email Adrress" />
            
            <input className="contact" type='message'placeholder="Subject" />
           
            <textarea className="contact" id="contact">message</textarea>
            <div className="button">
            <button type="submit">Send Message</button>
            </div>
          </div>
        <div className="col-md-2 col-sm-2 col-lg-2"></div>
      </div>
      </form>
    </div>
  )
}
export default Contact