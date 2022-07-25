import React from "react";
import './Contact.css';
import { UilPhone } from '@iconscout/react-unicons'
import { UilLocationPoint } from '@iconscout/react-unicons'
import { UilEnvelopeAlt } from '@iconscout/react-unicons'
function Contact() {
  return(
    <div className="container" id="contact">
      <div className="row">
        <div className="col-md-4 col-lg-4 col-sm-4"></div>
        <div className="col-md-8 col-sm-8 col-lg-8">
        <h3>Want a chat with us? <br /> Send us a Message</h3>
          <p>Use The Contact Form To Inquire About Volunteer Positions<br/> Or Regarding Any Questions Or Concerns.</p>
          </div>
      </div>
      <form>
      <div className="row">
          <div className="col-md-4 col-sm-4 col-lg-4">
            <h4>our Contacts</h4>
            <p> <UilEnvelopeAlt/> Email Adrees: Jengajamii@gmail.com</p>
            <p> <UilPhone/> Phone NUmber: +22002299</p>
            <p> <UilLocationPoint/> Location:Nairobi along Ngong Road</p>
        </div>
          <div className="col-md-8 col-sm-8 col-lg-8">
     
            <input className="contact" type='text'placeholder="Username" />
        
            <input className="contact" type='email' placeholder="Email Adrress" />
            
            <input className="contact" type='message'placeholder="Subject" />
           
            <textarea className="contact" id="contact">message</textarea>
            <div className="button">
            <button type="submit">Send Message</button>
            </div>
          </div>
        
      </div>
      </form>
    </div>
  )
}
export default Contact