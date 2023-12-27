import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom';

import logo from "../../assests/logo.png"
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
      <div className='header-logo'>
        <Link to="/generateTeam">
          <img src={logo} alt="logo"/>
        </Link>
      </div>
      <div className='header-navigation'>
        <ul className='menu'>
          <li className='nav_item'>
            <NavLink
              to="/generateTeam"
              className={(navClass) => 
                navClass.isActive ? "active__link" : ""
              }
            >Generate a Team</NavLink>
          </li>
          <li className='nav_item'>
            <NavLink
              to="/addEmployee"
              className={(navClass) => 
                navClass.isActive ? "active__link" : ""
              }
            >Calculate Burn out</NavLink>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Header