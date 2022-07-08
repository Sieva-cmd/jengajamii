import classes from "./HomePage.module.css"
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar,Container,Nav,Button } from 'react-bootstrap';

const Home = () => {
    return (
    <Container>
       <div className={classes.main}> 
        <div className={classes.herosection}>
        
        <div className={classes.partone}>
            <h5 className={classes.hero}>We believe that</h5>
            <h1 className ={classes.section}>DO GOOD FOR <br/> OTHERS </h1>
            <button className={classes.btnhero}>JOIN THE JOURNEY</button>

        </div>
        <div className={classes.parttwo}>
           
            <div className={classes.orangecolor}></div>
            <div className={classes.blackcolor}>
                 {/* <Button>LOG IN</Button>
                 <Button>SIGN UP</Button> */}
                 </div>
            <div className={classes.heart}></div>
           
        </div>
        </div>
       
      
         </div>

    </Container>
        
      
    )

}
export default Home;