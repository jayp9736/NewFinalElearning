import React,{useEffect,useState} from 'react'
import Sidebar from '../Sidebar'

const AllQuiz = (data) => {
    
    const [isAuth]=useState(localStorage.getItem("IsAuth"));
    const [role]=useState(localStorage.getItem("role"));
    useEffect(()=>{
        console.log(data);
    })
    return (
        <div>
            <Sidebar/>
            <div className="col-12 col-md-10">
                { 
                    isAuth  && role ==='teacher' ? (
                        <div class="card mt-3">
                            <h3>All users</h3>
                        </div>
                                    
                 ) : <div className="bg-warning">You are not authorized</div>
                                        
                }
            </div>
        </div>
    )
}
export default AllQuiz
