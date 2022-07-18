import "./HomePage.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar,Container,Nav,Button } from 'react-bootstrap';
import hands from "./images/hands.jpg";
import UncontrolledExample from "../components/carousel";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="main">
        <div className="herosection">
          <div className="row">
            <div className="col-md-6 col-sm-6 col-lg-6 partone">
              <h5 className="hero">We believe that</h5>
              <h1 className="section">
                DO GOOD FOR <br /> OTHERS{" "}
              </h1>
              <button className="btnhero">JOIN THE JOURNEY</button>
            </div>

            <div className="col-md-6 col-sm-6 col-lg-6 parttwo">
              <div className="blackcolor"></div>
              <div className="orangecolor"></div>
              <div className="heart"></div>
            </div>
          </div>
        </div>

        <div className="sectiontwo">
          <div className="row">
            <div className="col-md-5 col-sm-5 col-lg-5">
              <div className="rotatedImage"></div>
              <div className="rotatedOrange"></div>
            </div>
            <div className="col-md-5 col-sm-5 col-lg-5 fixedPart">
              <h5 style={{ color: "#eb9309" }}>About our Foundation</h5>
              <h1>WHAT HAVE WE DONE WITH YOUR HELP</h1>
              <p>
                This task is defined for people who are eager to give away their
                portions of <br /> items and blood to the people in need. With
                the help of this framework we <br /> can discover a contributor
                for the donation classification and it becomes
                <br /> simpler to make the association among give away/donor and
                also the Jenga
                <br /> Jamii specialists without much of a stretch.{" "}
              </p>
              <h5>Join our Action and everyone can help</h5>
              <button className="btnRotated">Donate Now</button>
            </div>
          </div>
        </div>
        <div className="cardsDiv">
          <div className="card" style={{ height: "25rem" }}>
            <div className="card-body">
              <div className="card-group">
                <div className="card cardItemOne">
                  <img className="card-img-top" src={hands} alt="Card cap" />
                  <div className="card-body">
                    <p class="card-text">DONATE TO SCHOOLS</p>
                  </div>
                </div>
                <hr style={{ color: "#eb9309", height: "1px" }} />
                <div className="card cardItemTwo">
                  <img className="card-img-top" src={hands} alt="Card cap" />
                  <div className="card-body">
                    <p className="card-text">DONATE TO PRISONS</p>
                  </div>
                </div>
                <hr style={{ color: "#eb9309", height: "1px" }} />
                <div className="card cardItemThree">
                  <img className="card-img-top" src={hands} alt="Card  cap" />
                  <div className="card-body">
                    <p className="card-text">DONATE TO MARGINALIZED GROUPS</p>
                  </div>
                </div>
                <hr style={{ color: "#eb9309", height: "1px" }} />
                <div className="card cardItemFour">
                  <img className="card-img-top" src={hands} alt="Card  cap" />
                  <div className="card-body">
                    <p className="card-text">DONATE TO CHILDREN HOMES</p>
                  </div>
                </div>
                <hr style={{ color: "#eb9309", height: "1px" }} />
              </div>
            </div>
          </div>
        </div>
        <div className="thirdSection">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12">
              <h1>250 M </h1>
              <h5>people live with dissability</h5>
              <button
                style={{
                  color: "#fff",
                  background: "#000",
                  border: "1px solid black",
                  borderRadius: "2px",
                }}
              >
                BECOME A VOLUNTEER
              </button>
            </div>
          </div>
        </div>
        <div className="testimonials">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12">
              <h1 style={{ color: "#eb9309" }}>Testimonials</h1>
              <hr
                style={{
                  color: "#eb9309",
                  height: "4px",
                  width: "10%",
                  marginLeft: "28rem",
                  fontWeight: "bold",
                }}
              />
              <h5>what people say about us</h5>
              <UncontrolledExample />
            </div>
          </div>
        </div>
        <div className="learn">
          <div className="row">
            <div className="col-md-3 col-sm-3 col-lg-3">
              <div className="act">LISTEN</div>
              <div className="act">LEARN</div>
              <div className="act">ACT</div>
            </div>

            <div className="col-md-8 col-sm-8 col-lg-8">
              <div className="listen">
                <h3>LISTEN, ACT, LEARN AND REPEAT</h3>
                <p>
                  We learn through doing good to others ,though our act of
                  kindnes <br />
                  to children,to the aged and even the marginalised groups. Most{" "}
                  <br />
                  people on this country are living in extreme poverty and we as{" "}
                  <br />
                  Jenga Jamii are in the rise to meet them and provide the basic{" "}
                  <br />
                  needs . We collect donations from well wishers so that we may{" "}
                  <br />
                  continue with our mission.
                </p>
                <div className="sentence">
                  <h5>45%</h5>
                  <h5>$150k</h5>
                  <h5>189</h5>
                </div>
                <div className="sentenceTwo">
                  <p>kids need help</p>
                  <p>Dollars raised</p>
                  <p>Volunteers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
