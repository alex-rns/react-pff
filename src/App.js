import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';

//components
import Header from './components/Header/Header'
import WelcomePage from "./components/WelcomePage/WelcomePage";
import TestPage from "./components/WelcomePage/TestPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route exact path="/" component={WelcomePage}/>
        <Route exact path="/test" component={TestPage} />



      </div>
    );
  }
}

export default App;
