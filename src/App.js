import React from 'react';
import './App.css';
import Person from "./person/person"
import StatefulComponent from "./state/StatefulComponent";

function App() {
  // const array1= [5,3,22,55]
  return (
    <div className="App">
      <Person firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <Person firstName="Smith" lastName="John" age={88} hairColor="Brown" />
    </div>
  );
}

export default App;
