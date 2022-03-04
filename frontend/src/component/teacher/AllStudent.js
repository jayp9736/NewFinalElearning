import React,{useEffect,useState} from 'react'
import Sidebar from '../Sidebar'
import axios from "axios"

const AllStudent = () => {
    const [student , setStudent]=useState()
    const [updateName,setUpdateName]=useState();
    const [updateEmail,setUpdateEmail]=useState();
    const [updateId,setUpdateId]=useState();    
    const [isUpdate,setUpdate]=useState(false);
    const [isAuth]=useState(localStorage.getItem("IsAuth"));
    var count=1;
    useEffect(()=>{
        axios.get('https://finalelearning.herokuapp.com/api/v1/AllStudent')
            .then(res => {setStudent(res.data.student); console.log(res.data.student)})
        
    },[])
    function update(data){
     
      setUpdate(true);
      setUpdateId(data._id);
      setUpdateName(data.name);
      setUpdateEmail(data.email);
    }
    function updateStudent(name, email){
        axios.put(`https://finalelearning.herokuapp.com/api/v1/updateStudent/${updateId}`,{name,email})
        .then(res =>{ console.log(res.data); })
        
       
    }
    function deleteStudent(id){
        axios.delete(`https://finalelearning.herokuapp.com/api/v1/removeStudent/${id}`)
         .then(res => {console.log(res.data.message);  window.location.reload(true);})
        
    }


    return (
        <div>
    <Sidebar className="div1"/>
    <div className="col-10  col-md-10 ">
        {
            isAuth!=null  &&  (
                <div className=" mt-3">   
                    <h2 className="mb-5 text-center bg-primary " style={{padding:"1rem"}}>Students Detail</h2>
                               
                                <div className="cart-item my-1">
                {
                    student && ( 
                    <div>
                        <div>
                        {
                            isUpdate && (
                                <div>
                                    <input type="text" value={updateName} onChange={(e) =>setUpdateName(e.target.value)} name="updateName" className="form-control" required/>
                                    <input type="email" value={updateEmail} onChange={(e) =>setUpdateEmail(e.target.value)} name="updateEmail" className="form-control" required/>
                           
                                    <button onClick={updateStudent(updateName,updateEmail)}>Update</button>
                                </div>
                            )
                        }
                        </div>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Sr</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                              </tr>
                            </thead>
                            <tbody>
                                {student.map((i)=>(
                                   <tr key={count}>
                                        <td>{count++}</td>
                                       
                                        <td>{i.name}</td>
                                        <td>{i.email}</td>
                                       <td><button className="btn btn-info" onClick={()=> update(i)} >Update</button></td>
                                        <td><button className="btn btn-danger" onClick={()=> deleteStudent(i._id)}>Delete</button></td>
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
export default AllStudent
