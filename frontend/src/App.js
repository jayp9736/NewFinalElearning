import './App.css';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom'
import Login from './component/login';
import Home from './component/home'
import Register from './component/register'
import Profile from './component/profile'

import AllStudent from './component/teacher/AllStudent'
import AllQuiz from './component/teacher/AllQuiz'
import CreateQuiz from './component/teacher/CreateQuiz'
import ViewStudentScore from './component/teacher/ViewStudentScore'

import StudentAllQuiz from './component/student/StudentAllQuiz'
import Test from './component/student/Test'
import Score from './component/student/Score'


function App() {

  return (
    <div>
      
      <Router>
        <Switch>
              <Route exact path="/" component={Home}/>
              <Route path="/login" component={Login}/>
              <Route path="/register" component={Register}/>
              <Route path="/me" component={Profile}/>
            

              <Route path="/AllStudent" component={AllStudent}/>
              <Route path="/AllQuiz" component={AllQuiz}/>
              <Route path="/CreateQuiz" component={CreateQuiz} />
              <Route path="/ViewStudentScore" component={ViewStudentScore} />

              <Route path="/StudentAllQuiz" component={StudentAllQuiz} />
              <Route path="/StudentTest" component={Test} />
              <Route path="/StudentScore" component={Score} />
        </Switch>
      </Router>
    </div> 
  );
}

export default App;


//testing 
//teacher (admin) -> 
//t1@gmail.com 
//teacher1


