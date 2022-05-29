import React from 'react';
import { NavLink } from 'react-router-dom';
import './Signup.css'

function refreshPage() {
    setTimeout(()=>{
        window.location.reload(false);
    }, 200);
    console.log('page to reload')
}

function Signup() {
    return(
        <div className='page'>
            <div className='signup-form'>
                <h2>Signup</h2>
                <br></br>
                <form className='form-items'>
                <div class="row">
                    <div class="col-25">
                    <label for="acc">Account no:</label>
                    </div>
                    <div class="col-75">
                    <input type="text" id="acc" name="firstname" placeholder="Account number">
                    </input>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                    <label for="pass">Password:</label>
                    </div>
                    <div class="col-75">
                    <input type="text" id="pass" name="password" placeholder="Create password">
                    </input>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                    <label for="repass">Re-enter Password:</label>
                    </div>
                    <div class="col-75">
                    <input type="text" id="repass" name="repassword" placeholder="Confirm password">
                    </input>
                    </div>
                </div>
                <br></br>
                <div class="row">
                <p>Already have account? <NavLink to={"./Login"} onClick={refreshPage} activeClassName='is-active' >Login</NavLink></p>
                <button>Submit</button>
                </div>
                </form>
            </div>
        </div>
    );
}
export default Signup;