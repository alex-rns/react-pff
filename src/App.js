import React from 'react';
import { Route } from 'react-router-dom'
import './App.css';

//components
import Header from './components/Header/Header'
import HomePage from "./components/Pages/HomePage/HomePage";
import TestPage from "./components/Pages/HomePage/TestPage";

class App extends React.Component {
  render() {
    return (
      <div className="App">

        <Header/>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/test" component={TestPage} />



      </div>
    );
  }
}

export default App;
