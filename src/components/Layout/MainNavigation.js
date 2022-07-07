import classes from './MainNavigation.module.css'
import {Link} from 'react-router-dom'
import logo from './assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar,Container,Nav } from 'react-bootstrap';
const MainNavigation = () =>{
    return(




//     <Navbar bg="light" variant="dark">
//     <Container>
//       <Navbar.Brand href="#home" style={{color:'#eb9309'}}>
//         <img
//           alt=""
//           src={logo}
//           width="40"
//           height="40"
//           className="d-inline-block align-top"
//         />{' '}
//       JENGA JAMII 
//       </Navbar.Brand>
//       <Navbar.Collapse id="responsive-navbar-nav">
//       <Nav className="me-auto">
//             <Nav.Link style={{color:'#eb9309'}} to="/">HOME</Nav.Link>
//             <Nav.Link style={{color:'#000'}} to="/about">ABOUT</Nav.Link>
//             <Nav.Link style={{color:'#000'}} to="/donations">DONATIONS</Nav.Link>
//             <Nav.Link style={{color:'#000'}} to="/contact">CONTACT US</Nav.Link>
//       </Nav>
      
//       <Nav.Link href="#deets">LOG IN</Nav.Link>
//       <Nav.Link eventKey={2} href="#memes">
//         SIGN UP
//       </Nav.Link>
//       </Navbar.Collapse>
//     </Container>
//   </Navbar>
        <header className={classes.header}>
            <div>
                <nav className={classes.nav}>
                <img src ={logo} alt="Logo" className={classes.logo} />
                <h5 className={classes.brand}>JENGA JAMII</h5>
                    <ul>
                        <div className={classes.center} >
                        <li><Link style={{textDecoration: 'none',color:'#eb9309'}} to='/'> HOME</Link> </li>
                        <li><Link style={{textDecoration: 'none',color:'#000'}} to='/about'> ABOUT</Link> </li>
                        <li><Link style={{textDecoration: 'none',color:'#000'}} to='/donations'> DONATIONS</Link> </li>
                        <li><Link style={{textDecoration: 'none',color:'#000'}} to='/contact'> CONTACT US</Link> </li>
                        </div>
                        <div className={classes.right} >
                        <li><Link style={{textDecoration: 'none'}} to='/log'> LOG IN </Link> </li>
                        <li><Link  style={{textDecoration: 'none'}} to='/sign'><button className={classes.btnGreen}>SIGN UP</button></Link> </li>
                        </div>

                        
                       
                       
                    </ul>
                </nav>
            </div>
        </header>
  
    )

}
export default MainNavigation;