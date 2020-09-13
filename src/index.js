//jshint esversion:6
import React from "react";
import ReactDOM from "react-dom";
import './App.css';
import App from "./App";
import { createStore } from "redux";
import reducer from './reducers/rootReducer';
import { Provider } from "react-redux";



const store = createStore(reducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById("root")
);







































// const date = new Date();
// const currentTime = date.getHours();

// let greeting;

// const customStyle = {
//   color: ""
// };

// if (currentTime < 12) {
//   greeting = "Good Morning";
//   customStyle.color = "red";
// } else if (currentTime < 18) {
//   greeting = "Good Afternoon";
//   customStyle.color = "green";
// } else {
//   greeting = "Good Night";
//   customStyle.color = "blue";
// }

// ReactDOM.render(
//   <h1 className="heading" style={customStyle} >
//     {greeting}
//   </h1>,
//   document.getElementById("root")
// );
