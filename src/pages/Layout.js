import React from "react";
import './Layout.css'
import { Link} from 'react-router-dom'
function Layout() {
  return(
    <div className="layout">
      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/donate'>Donations</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
export default Layout