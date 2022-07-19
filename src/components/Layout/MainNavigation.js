import classes from './MainNavigation.module.css'
import {Link} from 'react-router-dom'
import logo from './assets/logo.png'
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Navbar,Container,Nav } from 'react-bootstrap';
const MainNavigation = () =>{
    return(

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
                        <li><Link style={{textDecoration: 'none'}} to='/login'> LOG IN </Link> </li>
                        <li><Link  style={{textDecoration: 'none'}} to='/sign'><button className={classes.btnGreen}>SIGN UP</button></Link> </li>
                        </div>
                    </ul>
                </nav>
            </div>
        </header>
  
    )

}
export default MainNavigation;

