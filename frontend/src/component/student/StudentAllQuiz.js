
import React,{useEffect,useState} from 'react'
import Sidebar from '../Sidebar'
import axios from "axios"

const StudentAllQuiz = () => {
    const [quiz , setQuiz]=useState();
    const [isAuth]=useState(localStorage.getItem("IsAuth"));
    var count=1;
    useEffect(()=>{
        axios.get('https://finalelearning.herokuapp.com/api/v1/AllQuiz')
            .then(res => {setQuiz(res.data.quiz); console.log(res.data)})
            .catch(e=> alert("Something went wrong !! Check your connection"))
        
    },[])
    function View(id){
            localStorage.setItem("list", id)
            window.location="/StudentTest";
    }
    return (
        <div>
        <Sidebar/>
        
        <div className="col-10  col-md-10 user div2">
            {
                isAuth!=null  &&  (
                    <div className="mt-3">   
                        <h2 className="mb-5 text-center bg-primary " style={{padding:"1rem"}}>All Quiz List</h2>
                                   
                        <div className=" my-1">
                    {
                        quiz && ( 
                        <div>
                           
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">No</th>
                                        <th scope="col">Quiz Title</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {quiz.map((i)=>(
                                       <tr key={count}>
                                            <td>{count++}</td>
                                            <td>{i.QuizTitle}</td>
                                           <td><button className="btn btn-info" onClick={()=> View(i._id)} >Give Test</button></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>  
                            </div> 
                        )
                    }
                    </div>
                </div>  
                ) 
            }
        </div>
    </div>
    
    )
}
export default StudentAllQuiz
