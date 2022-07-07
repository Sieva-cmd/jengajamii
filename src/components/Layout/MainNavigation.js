// import classes from './MainNavigation.module.css'
import {Link} from 'react-router-dom'
import logo from './assets/logo.png'
const MainNavigation = () =>{
    return(
        <header>
            <div>
                <nav>
                    <ul>
                        <li><Link to=''> <img src ={logo} alt="Logo" /></Link></li>
                        <li><Link to=''>JENGA JAMII</Link> </li>
                        <li><Link to='/'> Home</Link> </li>
                        <li><Link to='/about'> ABOUT</Link> </li>
                        <li><Link to='/donations'> DONATIONS</Link> </li>
                        <li><Link to='/contact'> CONTACT US</Link> </li>
                        <li><Link to='/log'> LOG IN </Link> </li>
                        <li><Link to='/sign'> SIGN UP</Link> </li>
                       
                    </ul>
                </nav>
            </div>
        </header>
    )

}
export default MainNavigation;