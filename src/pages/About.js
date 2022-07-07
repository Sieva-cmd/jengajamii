import React from "react";
import './About.css'
import Layout from './Layout'
function About() {
  return(
    <div className="container">
      <Layout/>
    <div className="about">
     <div className="row">
     <h4>About us</h4>
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
        <div className="col-md-6 col-lg-6 col-sm-6">
          <div className="mel">
            <img src={require('./images/mel.jpg')} alt="mel"/>
            <h5>Melody Chepkorir </h5>
            <h5>CEO/Founder</h5>
          </div>
          </div>
          <div className="col-md-6 col-lg-6 col-sm-6">
          <div className="luc">
            <img src={require('./images/mel.jpg')} alt="luc"/>
            <h5>Sieva Musyoka </h5>
            <h5>CEO/CoFounder</h5>
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default About