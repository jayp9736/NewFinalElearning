
import React, {  useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    useEffect(() => {
        
    }, [])

    const submitForm = e => {
        e.preventDefault();
        axios.post('https://finalelearning.herokuapp.com/api/v1/login/', {email, password}) 
            .then(res => {localStorage.setItem("name", res.data.user.name)
                        localStorage.setItem("email", res.data.user.email)
                        localStorage.setItem("role", res.data.user.role)
                        
                        localStorage.setItem("studentId", res.data.user._id)
                        localStorage.setItem("IsAuth",true)
                  
                        window.location = "/";
                    }
                  
            )
            .catch(error => {
                alert("Please enter valid details " + error.message)
            
                console.error('There was an error!', error);
                window.location = "/login";
            });
     
    }

    return ( 
        <div>
           
                <div className="box-area">
                
                    <h2><center>Login</center></h2>
                    <form onSubmit={submitForm}>
                        <div className="form-group">
                            <label>Username   </label>
                            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} name="email" placeholder="Enter your username " className="form-control" required/>
                         
                            <span className="help-block"></span>
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} name="password" placeholder="Enter your password " className="form-control" required/>
                            <span className="help-block"></span>
                        </div>
                        <br></br>
                        <button id="login_button" type="submit" className="btn btn-primary btn-block btn-lg">
                            LOGIN
                        </button>
                        <br></br><br></br>
                        <p>
                            <font color="white">Don't have an account? &nbsp;</font> 
                            <button className="btn btn-primary btn-sm"><Link to="/register"> Sign up now</Link></button><br></br>
                        </p>
                    </form>
                </div>
       
       </div>
    )
    
}


