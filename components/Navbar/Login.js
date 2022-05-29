import React,{useState} from 'react';
import Axios from 'axios'
import './Login.css' 

function Login (){

    const [accnoReg, setAccnoReg]=useState('');
    const [passReg, setPassReg]=useState(''); 

    const register =  () => {
        Axios.post('http://localhost:3004/register', {
            accno: accnoReg, password: passReg,
        }).then((response)=>{
            console.log(response);
        });
    };

    return(
        <div className='login'>
            <div className='login-page'>
            <h2>Login</h2>
            <br></br>
                <form className='form-items'>
                <div class="row">
                    <div class="col-25">
                    <label for="acc">Account no:</label>
                    </div>
                    <div class="col-75">
                    <input type="text" id="acc" name="firstname" placeholder="Account number" 
                    onChange={(e)=>{setAccnoReg(e.target.value);
                    }}/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-25">
                    <label for="pass">Password:</label>
                    </div>
                    <div class="col-75">
                    <input type="text" id="pass" name="password" placeholder="Enter password"
                    onChange={(e)=>{setPassReg(e.target.value);
                    }}/>
                    
                    </div>
                </div>
                <br></br>
                <div class="row">
                    <button onClick={register}>Submit</button>
                </div>
                </form>
            </div>
        </div>
    );
}

export default Login;