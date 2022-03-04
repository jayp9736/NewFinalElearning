import React, {useState } from 'react'
import axios from "axios"
import { NavLink } from 'react-router-dom';
 
export const Register = ({history}) => {

    const [name, setName] = useState();
    const[email,setEmail]=useState();
    const[password,setPassword]=useState();

     const submitForm = (e) => {
        e.preventDefault();
       
        const config = {
            headers:{
                "Content-Type" : "application/json"
            }
        }
  
        let Data = JSON.stringify({
            name: name,
            email: email,
            password: password
        });
        
        axios.post('https://finalelearning.herokuapp.com/api/v1/register',Data,config) 
            .then(res => {
                        localStorage.setItem("name", res.data.user.name)
                        localStorage.setItem("email", res.data.user.email)
                        localStorage.setItem("role", res.data.user.role)
                        localStorage.setItem("studentId", res.data.user._id)
                        localStorage.setItem("IsAuth",true)
                        alert(res.user.name)
                        console.log(res.user.name)
                }
            )
            .catch(error => {
                alert("Please enter valid details " + error.message )
                console.error('There was an error!', error.message);
            });
            window.location="/";  
     }

    return (
        <>
            <div className="box-area ">
                <h2><center>Sign Up</center></h2>
                <form onSubmit={submitForm}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text" name="name" style={{color:"black"}} placeholder="Enter your username" className="form-control" defaultValue={name} onChange={(e) => setName(e.target.value)} required/>
                    </div>
                    <div className="form-group ">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Enter your email" className="form-control" defaultValue={email} onChange={(e) => setEmail(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Enter your password" className="form-control" defaultValue={password} onChange={(e) => setPassword(e.target.value)} required/>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary" >submit</button> &nbsp;
                    </div>
                    <div>Already have an account? &nbsp;<NavLink to="/login" > Login here</NavLink></div><br></br><br></br>
               </form>
            </div>   
        </>
    )
}
export default Register
