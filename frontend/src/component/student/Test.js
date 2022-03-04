import React,{useEffect,useState} from 'react'
import Sidebar from '../Sidebar'
import axios from 'axios'

const GiveTest = () => {
    const [Test, setTest]=useState('');
    const [score, setScore]=useState(0);

    var count=0;
    useEffect(()=>{
        
        async function fetchMyAPI() {
           var id=localStorage.getItem("list");
           await axios.get(`http://localhost:4001/api/v1/student/Quiz/${id}`)
                .then(res =>{   setTest(res.data.quiz); console.log(Test);  })
                .catch(e=> alert("Something went wrong !! "))  
        }
        fetchMyAPI()
    },[])
   
    const AddScore = (e) => {
      e.preventDefault();
     
      const config = {
          headers:{
              "Content-Type" : "application/json"
          }
      }

          let Data = JSON.stringify({
            "totalMarks":count,
            "score":score,
            "quiz":Test._id,
            "student":localStorage.getItem("studentId")
        });
      axios.post('http://localhost:4001/api/v1/AddScore',Data,config) 
          .then(res => {
                console.log(res.data)
                 }
          )
          .catch(error => {
              console.error('There was an error!', error.message);
              // window.location="/register";
          });
          window.location="/StudentAllQuiz";
   
          
   }
    function check(option, answer){
        console.log(option+ " "+ answer);
        if(option ===answer){
            setScore(score+1);
            console.log(score);
        }
    }

    return (

        <div className="">
<Sidebar/>
<form onSubmit={AddScore}>
<div className="col-10  col-md-10">
            {
                Test!=null  &&  (
                    <div className="mt-3">   
                        <h2 className="mb-5 text-center bg-primary " style={{padding:"1rem"}}>{Test.QuizTitle} </h2>
                                   
                        <div className=" my-1">
                    {
                        Test.Questions && ( 
                        <div>
                           {
                               Test.Questions.map((q)=>{
                                    return (<div key={q._id}>
                                        <div>
                                            <span>{++count}</span> &nbsp; &nbsp;
                                            <span>{q.question}</span>
                                        </div>

                                         <div>{
                                            q.options.map((op)=>{
                                              
                                               return ( <span >
                                                    <input type="radio" id="answer" name={q.question}  value={op} onChange={(e)=>{check(op,q.answer)}} />
                                                    <label>{op}</label>&nbsp;&nbsp;&nbsp;

                                                </span>)
                                            })
                                        } 
                                        </div><br></br>
                                    </div>)

                               })
                           }
                            
                        </div> 
                        )
                    }
                    </div><br></br>
                    <button type="submit">End Test</button>
                </div>  
                ) 
            }
         
        </div>
     
        </form>
        </div>
       
    )
}
export default GiveTest


