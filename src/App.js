import React from 'react';
import './App.css';
import Person from "./person/person"

function App() {
  // const array1= [5,3,22,55]
  return (
    <div className="App">
      <Person firstName="Jane" lastName="Doe" age={45} hairColor="Black" />
      <Person firstName="John" lastName="Smith" age={88} hairColor="Brown" />
      <Person firstName="Millard" lastName="Fillmore" age={50} hairColor="Brown" />
      <Person firstName="Maria" lastName="Smith" age={62} hairColor="Brown" />
    </div>
  );
}

export default App;