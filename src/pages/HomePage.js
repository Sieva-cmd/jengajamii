import  "./HomePage.css"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar,Container,Nav,Button } from 'react-bootstrap';

const Home = () => {
    return (
  

       <div className="container main"> 
       
       <div className="row herosection">
        
        <div className="col-md-6 col-sm-6 col-lg-6 partone">
            <h5 className="hero">We believe that</h5>
            <h1 className ="section">DO GOOD FOR <br/> OTHERS </h1>
            <button className="btnhero">JOIN THE JOURNEY</button>

        </div>
        
     
        <div className="col-md-6 col-sm-6 col-lg-6 parttwo">

            <div className="blackcolor"></div>
            <div className="orangecolor"></div>   
            <div className="heart"></div> 
            </div>    
            
        
        </div>
</div>
       
       
       
      
         
        
     

    
        
      
    )

}
export default Home;