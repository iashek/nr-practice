import React from "react";
import ReactDOM from "react-dom/client";

//const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from React!");

// const parent = React.createElement(
//     "div", {id: "parent"}, [
//         React.createElement("div", {id: "child1"}, [
//             React.createElement("h1", {id: "child11"}, "Hello World"), 
//             React.createElement("h1", {id: "child12"}, "I'm at child1 h1 tag")]),
//         React.createElement("div", {id: "child2"}, [
//             React.createElement("h1", {id: "child21"}, "I'm at child2 h1 tag"), 
//             React.createElement("h1", {id: "child22"}, "I'm at child2 h1 tag")]), 
//     ]);

// console.log(parent); // returns object

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);


const heading = React.createElement("h1", {id: "heading"}, "The Reactor Welcomes You!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);