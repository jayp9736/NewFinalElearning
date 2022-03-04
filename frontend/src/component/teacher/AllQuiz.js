import React,{useEffect,useState} from 'react'
import Sidebar from '../Sidebar'
import axios from "axios"

const AllQuiz = () => {
    var count=0;
    const [isAuth]=useState(localStorage.getItem("IsAuth"));
    const [role]=useState(localStorage.getItem("role"));
    const [list,setList]=useState();
    useEffect(()=>{
      
        async function Add(){
            await axios.get("http://localhost:4001/api/v1/AllQuiz")
            .then(res => { setList(res.data.quiz)})
            console.log(list);
        }
        Add()
        
    },[])

    function View(id){
        localStorage.setItem("quizId",id);
        window.location="/ViewStudentScore";
    }
    return (
        <div>
            <Sidebar/>
            <div className="col-12 col-md-10">
                { 
                    isAuth  && role ==='teacher' && list ? (
                        <div class="mt-3">
                            <h2 className="mb-5 text-center bg-primary " style={{padding:"1rem"}}>All Quiz</h2>
                            <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Quiz Title</th>
                                    <th scope="col"></th>
                              </tr>
                            </thead>
                            <tbody>
                                {list.map((i)=>(
                                   <tr key={count}>
                                        <td>{++count}</td>
                                        <td>{i.QuizTitle}</td>
                                       <td><button className="btn btn-info" onClick={()=> View(i._id)} >Check Student Score</button></td>
                                      </tr>
                                ))}
                            </tbody>
                        </table> 
                        </div>                 
                    ) : <div className="bg-warning">You are not authorized</div>                     
                }
                </div>
        </div>
    )
}
export default AllQuiz
