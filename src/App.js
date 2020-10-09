import React, { Component } from 'react';
import './App.css';
import {createStore} from "redux";

class App extends Component {
  render(){
    return (
      <div className="App">Redux test</div>
    );
  }
}

export default App;

const defaultState = {
  welcome: "Hi",
  otherState: "some stuff"
}

const greetings = (state = defaultState, action) => {
  switch(action.type){
    case "GREET_ME":
      return {...state, welcome: `Hello ${action.result}`}
    case "GREET_WORLD":
      return {...state, welcome: "Hello World"}
    default: 
      return state;
  }
}

const store = createStore(greetings)

const result = "Some random API"
store.dispatch({
  type: "GREET_ME",
  result
})


console.log(store.getState())