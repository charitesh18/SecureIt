import React, {useState} from 'react';
import {  Link } from 'react-router-dom';
import './Navbar.css'


function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 200);
    console.log('page to reload')
}

function Navbar() {
    const [isMobile, setisMobile] = useState(false);
    return (
      <div className='navbar'>
     
        <h2 className='logo'>SecureIt</h2>
            <ul className={isMobile? "nav-links-mobile": "nav-links"}
            onClick={() => setisMobile(false)}>
                < Link to="/Home" className='home' activeClassName='is-active' onClick={refreshPage} exact={true}>
                <li>Home</li>
                </ Link> 
                < Link to="/Signup" className='signup' activeClassName='is-active' onClick={refreshPage}>
                <li>
                Signup
                </li>
                </ Link>
                < Link to="/Balance" className='balance' activeClassName='is-active' onClick={refreshPage}>
                <li>
                Balance
                </li>
                </ Link>
                < Link to="/Transfer" className='transfer' activeClassName='is-active' onClick={refreshPage}>
                <li>Transfer</li>
                </ Link>
                 < Link to="/Account" className='account' activeClassName='is-active' onClick={refreshPage}>
                <li >
                    Account
                </li>
                </ Link>
            </ul>
            <button className='mobile-menu-icon' 
            onClick={() => setisMobile(!isMobile)}
            >
                {isMobile ? (<i className='fas fa-times'></i>
                ) : (
                    <i className="fas fa-bars"></i>
                )}
            </button>
      </div>
    );
  }

export default Navbar;