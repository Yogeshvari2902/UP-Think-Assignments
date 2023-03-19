import React, { useState } from "react";
import Tree from "./Component/Tree";
const treeData = [
  {
    id: "school1",
    label: "Liverpool",
    children: [
      {
        id: "course1",
        label: "Version 1.2 (1772)",
        children: [
          {
            id: "assignment1",
            label: "What's your favorite color?",
            details: "My favorite colot is Royal blue"
          },
          {
            id: "assignment2",
            label: "Tell me about your favourite movie",
            details: "Shutter Island by Martin Scorsese"
          }
        ]
      },
      {
        id: "course2",
        label: "Version 1.0 (1632)",
        children: [
          {
            id: "assignment1",
            label: "Assignment1",
            details: "This is the details for Assignment 1"
          },
          {
            id: "assignment2",
            label: "Assignment2",
            details: "This is the details for Assignment 2"
          }
        ]
      }
    ]
  },
  {
    id: "school2",
    label: "Joe's Demo School",
    children: [
      {
        id: "course1",
        label: "Course",
        children: [
          {
            id: "assignment1",
            label: "Assignment1",
            details: "This is the details for Assignment 1"
          },
          {
            id: "assignment2",
            label: "Assignment2",
            details: "This is the details for Assignment 2"
          }
        ]
      }
    ]
  },
  {
    id: "school3",
    label: "Model Training Academy",
    children: [
      {
        id: "course1",
        label: "Course",
        children: [
          {
            id: "assignment1",
            label: "Assignment1",
            details: "This is the details for Assignment 1"
          },
          {
            id: "assignment2",
            label: "Assignment2",
            details: "This is the details for Assignment 2"
          }
        ]
      }
    ]
  }
];


 
function App() {
  return (
    <div style={{width: "700px",
      height: "100px",
      position: "absolute",
      top: "20%",
      left: "30%",
      margin:"-50px 0 0 -50px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center",
      gap:"10px"}}>
      <h1>Tree Component Rendering</h1>
       <Tree data={treeData} />
    </div>
  );
}

export default App
