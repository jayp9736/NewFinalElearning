import React,{useState} from 'react'
import Sidebar from './Sidebar'

const Profile = () => {
   
const [name]=useState(localStorage.getItem("name"));
const [email]=useState(localStorage.getItem("email"));
const [isAuth]=useState(localStorage.getItem("IsAuth"));
    return (
<div>
    <Sidebar/>
    <div className="col-10  col-md-10">
        {
            isAuth!=null  && (
                
                <div class=" container bg-primary"  style={{"margin-top":"4rem"}}>
                    <div class="row" style={{"margin-top":"5rem"}}>
                        <div class="col-sm-2"></div>
                        <h3 class="col-sm-4">Name</h3>
                        <h3 class="col-sm-4">{name}</h3>
                    </div>
                    <div class="row" style={{"margin-top":"3rem","margin-bottom":"10rem"}}>
                        <div class="col-sm-2"></div>    
                        <h3 class="col-sm-4">Email</h3>
                        <h3 class="col-sm-4">{email}</h3>
                    </div>
                </div>
              
            ) 
        }
    </div>
</div>

    )
}
export default Profile
