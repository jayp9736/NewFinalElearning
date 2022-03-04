import React,{useEffect,useState} from 'react'
import Sidebar from '../Sidebar'
import axios from "axios"

const Score = () => {
    const [list , setList]=useState()
    var count=1;
    useEffect(()=>{
        async function Add(){
            var id=localStorage.getItem("studentId");
            await axios.get(`http://localhost:4001/api/v1/student/QuizScore/${id}`)
            .then(res => { setList(res.data.list)})
            console.log(list);
        }
        Add()
        
    },[])
  
    return (
        <div>
    <Sidebar/>
    <div className="col-10  col-md-10">
    <h2 className="mb-5 text-center bg-primary " style={{padding:"1rem"}}>{localStorage.getItem("name")}'s Score</h2>
        <div>
        {
            list && ( 
                <div>     
                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Sr</th>
                                <th scope="col">Quiz Title</th>
                                <th scope="col">Score</th>
                                <th scope="col">Marks</th>
                            </tr>
                        </thead>
                        <tbody>
                            {list.map((i)=>(
                                <tr key={count}>
                                    <td>{count++}</td>
                                    <td>{i.quizTitle}</td>
                                    <td>{i.score}</td>
                                    <td>{i.total}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>  
                </div> 
            ) 
        }
        </div>
    </div>
</div>

    )
}
export default Score
