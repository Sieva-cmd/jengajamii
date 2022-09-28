import "./HomePage.css";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar,Container,Nav,Button } from 'react-bootstrap';
import hands from "./images/hands.jpg";
import blood from "./images/blood.jpg";
import UncontrolledExample from "../components/carousel";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <div className="main">
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-6 col-sm-6 col-lg-6 herocontentConatiner">
            <h5 className="hero"> We believe that We Should</h5>{" "}
            <h1 className="section">
              DO GOOD FOR <br /> OTHERS{" "}
            </h1>{" "}
            <button className="btnhero"> JOIN THE JOURNEY </button>{" "}
          </div>
          <div className="col-md-6 col-sm-6 col-lg-6" style={{ zIndex: "10" }}>
            <div className="blackcolor">  </div>{" "}
            <div className="orangecolor">  </div>{" "}
            <div className="heart"> </div>{" "}
          </div>{" "}
        </div>
        <div className="sectiontwo">
          <div className="row">
            <div className="col-md-5 col-sm-5 col-lg-5">
              <div className="rotatedImage"> </div>{" "}
              <div className="rotatedOrange"> </div>{" "}
            </div>{" "}
            <div className="col-md-6 col-sm-6 col-lg-6 fixedPart" style={{textAlign:"left"}}>
              <h5 style={{ color: "#eb9309",textAlign:"left" }}> About our Foundation </h5>{" "}
              <h2 style={{textAlign:"left"}}> WHAT HAVE WE DONE WITH YOUR HELP </h2>{" "}
              <p style={{textAlign:"left"}}>
                This task is defined for people who are eager to give away their
                portions  items and blood to the people in need.With
                the help of this framework we  can discover a contributor
                for the donation classification and it becomes simpler to
                make the association among give away donor and also the Jenga{" "}
                Jamii specialists without much of a stretch.{" "}
              </p>{" "}
              <h5 style={{textAlign:"left"}}> Join our Action and everyone can help </h5>{" "}
              <Link to="/donate" style={{textAlign:"left"}}><button className="btnRotated"> Donate Now </button></Link> 
            </div>{" "}
          </div>{" "}
        </div>{" "}
      
        <div className="cardsDiv">
          <div className="card" style={{ height: "25rem" }}>
            <div className="card-body">
              <div className="card-group">
                <div className="card cardItemOne">
                  <img className="card-img-top" src={hands} alt="Card cap" />
                  <div className="card-body">
                    <p className="card-text"> DONATE TO SCHOOLS </p>{" "}
                  </div>{" "}
                </div>{" "}
                <hr
                  style={{
                    color: "#eb9309",
                
                  }}
                />
                <div className="card cardItemTwo">
                  <img className="card-img-top" src={hands} alt="Card cap" />
                  <div className="card-body">
                    <p className="card-text"> DONATE TO PRISONS </p>{" "}
                  </div>{" "}
                </div>{" "}
                <hr style={{ color: "#eb9309", height: "1px" }} />{" "}
                <div className="card cardItemThree">
                  <img className="card-img-top" src={hands} alt="Card  cap" />
                  <div className="card-body">
                    <p className="card-text"> DONATE TO MARGINALIZED GROUPS </p>{" "}
                  </div>{" "}
                </div>{" "}
                <hr style={{ color: "#eb9309", height: "1px" }} />{" "}
                <div className="card cardItemFour">
                  <img className="card-img-top" src={hands} alt="Card  cap" />
                  <div className="card-body">
                    <p className="card-text"> DONATE TO CHILDREN HOMES </p>{" "}
                  </div>{" "}
                </div>{" "}
                <hr style={{ color: "#eb9309", height: "1px" }} />
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="thirdSection">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12">
              <div className="million">
                <h1 className="eraMillion"> 250 </h1>{" "}
                <h1 style={{ color: "#eb9309", marginLeft: "2rem" }}> M </h1>{" "}
              </div>
              <h5> people live with dissability </h5>{" "}
              <Link to="/volunteer"><button
                style={{
                  color: "#fff",
                  background: "rgb(127, 180, 50)",
                  border: "1px solid black",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  boxShadow: "0px 0px 5px grey",
                  marginTop:"20px"
                }}
              >
                BECOME A VOLUNTEER{" "}
              </button></Link>
              
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <section className="Blood">
          <div className="row">
            {/* <div className="col-md-2 col-sm-2 col-lg-2"></div> */}
            <div className="col-sm-6 col-md-6 col-lg-6">
              <h1 >Join our Blood Donation Group. Donate Today,<br/> to save a life</h1>
              <Link to="/BloodDform"><button className="Donatebutton"   style={{
                  color: "#fff",
                  background: "rgb(127, 180, 50)",
                  border: "1px solid black",
                  borderRadius: "5px",
                  padding: "10px 20px",
                  boxShadow: "0px 0px 5px grey",
                  marginTop:"50px"
                }}>Donate</button></Link>
            </div>
            <div className="col-sm-6 col-md-6 col-lg-6">
              <img src={ blood} alt="melo" style={{width:"500px", height:"400px"}}/>
            </div>
            {/* <div className="col-md-2 col-sm-2 col-lg-2"></div> */}
          </div>
        </section>
        <div className="testimonials">
          <div className="row">
            <div className="col-md-12 col-sm-12 col-lg-12">
              <h1 style={{ color: "#eb9309" }}> Testimonials </h1>{" "}
              <hr
                style={{
                  color: "#eb9309",
                  height: "4px",
                  width: "10%",
                  marginLeft: "28rem",
                  fontWeight: "bold",
                }}
              />{" "}
              <h5> what peop le say about us </h5> <UncontrolledExample />
            </div>{" "}
          </div>{" "}
        </div>{" "}
        <div className="learn">
          <div className="row">
            <div className="col-md-3 col-sm-3 col-lg-3">
              <div className="act"> LISTEN </div>{" "}
              <div className="act"> LEARN </div>{" "}
              <div className="act"> ACT </div>{" "}
            </div>
            <div className="col-md-8 col-sm-8 col-lg-8">
              <div className="listen">
                <h3 style={{textAlign:"left"}}> LISTEN, ACT, LEARN AND REPEAT </h3>{" "}
                <p style={{textAlign:"left"}}>
                  We learn through doing good to others, though our act of
                  kindnes 
                  to children, to the aged and even the marginalised groups.Most{" "}
                 
                  people on this country are living in extreme poverty and we as{" "}
                 
                  Jenga Jamii are in the rise to meet them and provide the basic{" "}
                  
                  needs.We collect donations from well wishers so that we may{" "}
                  
                  continue with our mission.{" "}
                </p>{" "}
                <div className="sentence">
                  <h5 style={{textAlign:"left"}}> 45 % </h5> <h5> $150k </h5> <h5> 189 </h5>{" "}
                </div>{" "}
                <div className="sentenceTwo" style={{textAlign:"left"}}>
                  <p > kids need help </p> <p> Dollars raised </p>{" "}
                  <p> Volunteers </p>{" "}
                </div>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};
export default Home;
