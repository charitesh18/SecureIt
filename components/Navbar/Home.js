import React from 'react';
import { NavLink } from 'react-router-dom';
import './Home.css'

function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 200);
    console.log('page to reload')
}

function Home (){
    return(

    <div className='homepage'>
       <h1>Welcome to SecureIt</h1>
       
       <h2 className='head'>Want to make your transactions safer? </h2>
       <h3>Then use SecureIt - <NavLink to="/Signup" className={'link'} activeClassName='is-active' onClick={refreshPage}>Signup</NavLink></h3>
    </div>
    );
}

export default Home;