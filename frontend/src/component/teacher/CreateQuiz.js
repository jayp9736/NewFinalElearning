import React,{useState} from 'react'
import Sidebar from '../Sidebar'
import axios from 'axios'

const CreateQuiz = () => {
  const[questionTitle, setQuestionTitle]=useState('');
    const [question, setQuestion]=useState('');
    const [answer, setAnswer] = useState('');
    const[op1,setOp1]=useState('');
    const[op2,setOp2]=useState('');
    const[op3,setOp3]=useState('');
    const[op4,setOp4]=useState('');
    const [Test, setTest]=useState([]);
    var count=0;
    function AddQuestions(e){
      e.preventDefault();
        alert(`Question : ${question} \n Answer : ${answer} \n Options : ${op1}, ${op2}, ${op3}, ${op4}`);
       let ob= {
        "question": question,
        "mark": 1,
        "answer": answer,
        "options": [ op1, op2, op3, op4 ]
      }
      setQuestion('');
      setAnswer('');
      setOp1('');
      setOp2('');
      setOp3('');
      setOp4('');
        const updateUsers = [ ...Test, ob ];
        setTest(updateUsers);
    }
    const AddTest = (e) => {
      e.preventDefault();
     
      const config = {
          headers:{
              "Content-Type" : "application/json"
          }
      }

      let Data = JSON.stringify({
            
              "QuizTitle": questionTitle,
             "Questions": Test
         
      });
      axios.post('https://finalelearning.herokuapp.com/api/v1/CreateQuiz',Data,config) 
          .then(res => {
                console.log(res.data)
                 }
          )
          .catch(error => {
              alert("Please enter valid details " + error.message )
              console.error('There was an error!', error.message);
         });
          window.location="/AllQuiz";    
    }
    return (

  <div>
    <Sidebar/>
      <div className="col-10  col-md-10 ">
      <h2 className="mb-5 text-center bg-primary " style={{padding:"1rem"}}>All Quiz</h2>
        <br></br>
        <button onClick={AddTest}>Create Quiz {questionTitle}</button>
        <form className="col-md-7" autoComplete="on" onSubmit={AddQuestions} style={{margin:"0 0 0 2rem"}}>
          <div>
            <ul>
              <li>   
                <label> Quiz Title </label>&nbsp;&nbsp;
                <input type="text" size="53" value={questionTitle} onChange={(e)=> setQuestionTitle(e.target.value)} required/> 
                <br/><br/>
              </li>
              <li>
                <label> Question </label>&nbsp;&nbsp;
                <input type="text" size="53" value={question} onChange={(e)=> setQuestion(e.target.value)} required/> 
                <br/><br/>
              </li>
              <li>
                <div>
                  <input
                    type="radio"
                    id="op1"
                    name="option"
                    value={op1}
                    onChange={(e)=>setAnswer(e.target.value)} 
                  />&nbsp;&nbsp;<input type="text" size="53" name="op1" value={op1}
                    onChange={(e)=>setOp1(e.target.value)} required/> <br/>
                </div>
                <div>
                  <input
                    type="radio"
                    id="op2"
                    name="option"
                    value={op2}
                    onChange={(e)=>setAnswer(e.target.value)} 
                  />&nbsp;&nbsp;<input type="text" size="53" name="op1"  value={op2}
                    onChange={(e)=>setOp2(e.target.value)} required/> <br/>
              </div>
              <div>
                  <input
                    type="radio"
                    id="op1"
                    name="option"
                    value={op3}
                    onChange={(e)=>setAnswer(e.target.value)} 
                  />&nbsp;&nbsp;<input type="text" size="53" name="op1"  value={op3}
                    onChange={(e)=>setOp3(e.target.value)} required/> <br/>
              </div>
              <div>
                  <input
                    type="radio"
                    id="op1"
                    name="option"
                    value={op4}
                    onChange={(e)=>setAnswer(e.target.value)} 
                  />&nbsp;&nbsp;<input type="text" size="53" name="op1"  value={op4}
                    onChange={(e)=>setOp4(e.target.value)} required/> 
              </div>
            
              </li>
              
              <li><br/>
                <div>
                    <button type="submit">
                      Add Question
                    </button>
                </div>
              </li>
            </ul>
          </div>
          <br/>
        </form>
 <div>
 {
  Test!=null && (
    <div className="col-md-7">
      <div>
        <label> All Questions List</label>&nbsp;&nbsp;
         <br/><br/>
      </div>
  <div>
  {
    Test.map((t)=>{
     return  (<ul>
     <li>

      <span>{++count}</span>
      </li>
        <li>
          <span> Question : </span>&nbsp;&nbsp;
          <span>{t.question}</span>
        </li>
        <li>
          <div>
          
            <span> Options :</span>&nbsp;&nbsp;
            <span>{t.options[0]}</span>&nbsp;&nbsp;
            <span>{t.options[1]}</span>&nbsp;&nbsp;
            <span>{t.options[2]}</span>&nbsp;&nbsp;
            <span>{t.options[3]}</span>
            </div>
        </li>
        <li>
        
        <span> Answer : </span>&nbsp;&nbsp;
          <span>{t.answer}</span>
        </li>
        
      </ul>)
 
    })
  }
  </div>
</div>

  )
  }
</div>


  </div>
  </div>
       
    )
}
export default CreateQuiz

// http://localhost:4001/api/v1/CreateQuiz

