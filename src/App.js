import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import {
  BrowserRouter as Router, Switch, Route
} from 'react-router-dom'
import { Link } from "react-router-dom";

import Enord from './components/Enord';
import ViewQuestion from './components/ViewQuestion';
import Question from './components/Add-Question/Question';

function App() {
return (
    <div className="App">   
      {/* <p>Hello</p> */}
      <Router>
        <Header />
        <Switch>
          <Route exact path="/add-question" component={Question  } />
          <Route exact path="/question" component={ViewQuestion } />
          <Route exact path="/" component={Enord} />

          
        </Switch>
      </Router>
    </div>
  );
}

export default App;