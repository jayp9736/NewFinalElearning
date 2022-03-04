import React,{useEffect,useState} from 'react'
import Sidebar from '../Sidebar'
import axios from "axios"


const ViewStudentScore = () => {
    const [student , setStudent]=useState();
    
    const [isAuth]=useState(localStorage.getItem("IsAuth"));
    var count=1;
    useEffect(()=>{
        var id=localStorage.getItem("quizId");
        async function Add(){
            await axios.get(`https://finalelearning.herokuapp.com/api/v1/StudentScore/${id}`)
            .then(res => {setStudent(res.data.list); console.log(res.data.list)})
        }
       
        Add()
    },[])

    return (
        <div>
    <Sidebar className="div1"/>
    <div className="col-10  col-md-10 user div2">
        {
            isAuth!=null  &&  (
                <div className="loanForm col-12 col-md-10">   
                    <h2 className="mb-5 text-center bg-info " style={{padding:"1rem"}}>Students Detail</h2>
                               
                                <div className="cart-item my-1">
                {
                    student && ( 
                    <div>
                        
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sr</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Score</th>
                              </tr>
                            </thead>
                            <tbody>
                                {student.map((i)=>(
                                   <tr key={count}>
                                        <td>{count++}</td>
                                       
                                        <td>{i.name}</td>
                                        <td>{i.score}</td>
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
export default ViewStudentScore
