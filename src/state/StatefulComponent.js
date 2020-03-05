import React, { Component } from "react"
// import Person from "./person/person";

class StatefulComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            clickCount: this.props.age
        }
    }
    handleClick= () => {
        this.setState({
            clickCount: this.state.clickCount + 1
        })
    }
    render(){
        return (
            <div>
                <button onClick={this.handleClick}> Birthday Button for {this.props.firstName} {this.props.lastName} {this.state.clickCount} </button>
            </div>
        )
    }
}

export default StatefulComponent;