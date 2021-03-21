import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import "bootstrap/dist/css/bootstrap.min.css"
import './App.css'

import Navbar from './components/Navbar.components'
import ExercisesList from './components/Exercises-List.component'
import EditExercise from './components/Edit-Exercise.component'
import CreateExercise from './components/Create-Exercise.component'
import CreateUser from './components/Create-User.component'




function App() {
  return (
    <Router>
      <div className="App container">
       <Navbar />
       <Route path='/' exact component={ExercisesList}/>
       <Route path="/edit/:id" component={EditExercise}/>
       <Route path="/create" component={CreateExercise}/>
       <Route path="/user" component={CreateUser}/>
       
      </div>
    </Router>
  );
}

export default App;
