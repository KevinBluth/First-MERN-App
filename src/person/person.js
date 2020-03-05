import React from "react";
import StatefulComponent from "../state/StatefulComponent";
const Person = (props) => (
    <div>
        <h1>{props.lastName}, {props.firstName}</h1>
        <p>Age: {props.age}</p>
        <p>Hair Color: {props.hairColor}</p>
        <StatefulComponent firstName={props.firstName} age={props.age} lastName={props.lastName} />
    </div>
)

export default Person