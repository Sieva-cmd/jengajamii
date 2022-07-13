import React from "react";
import './About.css'
import { UilLinkedin } from '@iconscout/react-unicons'
import { UilTwitter } from '@iconscout/react-unicons'
const style = {
  color:'bllue'
}
function About() {
  return(
    <div className="container-fluid">
    <div className="about">
     <div className="row">
     <h4 style={style}>About us</h4>
     <div className="aline"></div>
     </div>
    </div>
    <div className="why">
    <div className="row">
      <div className="col-md-4 col-sm-4 col-lg-4">
        <div className="line"></div>
        <h2>Our Story</h2>
        <p>Why We Started it</p>
      </div>
      <div className="col-md-8 col-sm-8 col-lg-8">
        <p>
        The donations are lifesavers if there ever emerges any
        events of the emergency needs.
        The errand of our organization is to get the donations 
        from the different types of people willing to donate items
        and to manage donations. We came up with Jenga Jammi
        to help the less fortunate with basic needs and connect them
        with donors willing to help them rise. Our main aim goes to children 
        who cannot afford basic needs, people living with disabilities and
        the vulnerable groups.
        </p>
      </div>
    </div>
    </div>
    <div className="team">
      <div className="row">
        <div className="h2">
          <h2>Our Team</h2>
          <div className="hr"></div>
        </div>
        <div className="col-md-2 col-sm-2 col-lg-2"></div>
        <div className="col-md-4 col-lg-4 col-sm-4">
          <div className="mel">
            <img src={require('./images/mel.jpg')} alt="mel"/>
            <h5>Melody Chepkorir </h5>
            <h5>CEO/Founder</h5>
            <UilLinkedin/>
            <UilTwitter/>
          </div>
          </div>
          <div className="col-md-4 col-lg-4 col-sm-4">
          <div className="luc">
            <img src={require('./images/mel.jpg')} alt="luc"/>
            <h5>Sieva Musyoka </h5>
            <h5>CEO/CoFounder</h5>
            <UilLinkedin/>
            <UilTwitter/>            
          </div>
          </div>
          <div className="col-md-2 col-sm-2 col-lg-2"></div>
        </div>
      </div>
      <div className="vmv">
      <h2>Mission, Vission And Value Statement</h2>
        <div className="row">
          <div className="col-md-4 col-sm-4 col-lg-4">
            <div className="mission">
              <h6>1</h6>
              <h3>Mission</h3>
              <p>To work around the globe
              to save lives by providing
              food,Donating money,
              Stationeries to schools and
              care to the  marginenalized
              groups</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-4">
            <div className="vission">
              <h6>2</h6>
              <h3>Vission</h3>
              <p>A world of hope, and social
                justice,where poverty has
                been overcome and all
                people live in dignity and
                security</p>
            </div>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-4">
            <div className="vission">
              <h6>3</h6>
              <h3>Values</h3>
              <p>compassion
                  Equality
                  Integrity
                  Service</p>
            </div>
          </div>
        </div>
      </div>
      <div className="test">
        <h2>Testimonials</h2>
        <div className="uline"></div>
        <div className="row">
          <div className="col-md-4 col-sm-4 col-lg-4">
            <p>"The students and the School
                Board Apprecites you for
                The continued Support that
                You have given us as a
                school ,may God bless you 
                touch more souls"</p>
                <img src={require('./images/luc.jpg')} alt="luc"/>
                <h6>Nekesa Nyokabi</h6>
                <p>Kaaga Girls High School</p>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-4">
            <p>"On behalf of  Nairobi prisons
                  we are proud of what you
                  are doing as an organisation,
                  we really appreciate the fact
                  that you have helped our
                  inmates with so much
                  basic needs"</p>
                <img src={require('./images/luc.jpg')} alt="luc"/>
                <h6>Langata Women Prison</h6>
                  <p>Peter Johnson</p>
          </div>
          <div className="col-md-4 col-sm-4 col-lg-4">
            <p>"With your continued support
              our children have been happy
              and having suffient food,
              saniteries for girls and clothes 
              for all . Continue with the 
              same spirit"</p>
                <img src={require('./images/luc.jpg')} alt="luc"/>
                <h6>
                  Thalitakum Childrens' Home
                </h6>
                <p>Grace Paul</p>
          </div>
        </div>
      </div>
    </div>

    
  )
}
export default About