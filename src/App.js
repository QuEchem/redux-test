import React, { Component } from 'react';
import './App.css';
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "./rootReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import Toggle from "./Toggle";

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(),
  )

class App extends Component {
  render(){
    return (
      <Provider store={store}>
        <div className="App">Redux test</div>
        <Toggle />
      </Provider>
    );
  }
}

export default App;

