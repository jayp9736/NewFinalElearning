import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import axios from "axios"
const Sidebar = () => {

    const [name]=useState(localStorage.getItem("name"));
    const [isAuth]=useState(localStorage.getItem("IsAuth"));
    const [role]=useState(localStorage.getItem("role"));

    const logoutHandler = () => {

        axios.get('https://finalelearning.herokuapp.com/api/v1/logout')
        .then(res => {
            window.localStorage.clear();
            window.location.reload(true);
        })
        .catch(error => {
            console.error('There was an error!', error);
        });
      
    }
  
  
    return (
    <div>

        <div  className="header text-right ">
            <div>
                {
                isAuth !=null ? (
                    <div className="">
                        <div className="column">
                        {
                            name!=null  && (
                                <Link to="/me"><button className="btn btn-primary left">Hello {name}</button> </Link>
                            )
                        }
                                <Link to="/" className="" onClick={logoutHandler}><button className="btn btn-info">Logout</button> </Link><br></br>
                        </div>
                    </div>
                    ) : (
                    <div>
                        <Link to="/login" ><button className="btn btn-info left">Login</button></Link>
                    </div>
                    )
                }
            </div>
       </div>
        <div className=" col-md-2">
            <div className="nagivation-wrapper">
              <nav id="nagivation">
                <ul className=" components">
                    {
                        role  === 'teacher' ? (
                        <div>
                            <li>
                                <Link to="/me">&nbsp;&nbsp;  Profile</Link>
                            </li>

                            <li>
                                <Link to="/AllStudent" >&nbsp;&nbsp; All Students</Link>
            
                            </li>
                            <li>
                                <Link to="/AllQuiz">&nbsp;&nbsp; Students score</Link>
                            </li>
                            <li>
                                <Link to="/CreateQuiz">&nbsp;&nbsp; Create Quiz</Link>
                            </li>
                        </div>
                        ) : role  === 'student' ? (
                            <div>
                                <li>
                                    <Link to="/me">&nbsp;&nbsp;  Profile</Link>
                                </li>

                                <li>
                                    <Link to="/StudentAllQuiz">&nbsp;&nbsp;  All Quiz</Link>
                                </li>
                                <li>
                                    <Link to="/StudentScore">&nbsp;&nbsp;  Score</Link>
                                </li>
                            </div>
                        ) : (
                            <li>
                                <Link to="/dashboard">&nbsp;&nbsp;  Dashboard</Link>
                            </li>
                        )
                    }
                </ul>
              </nav>
            <div>
        </div>
           </div>
        </div>
    
    </div>
    )
}

export default Sidebar
