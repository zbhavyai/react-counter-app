import React, { Component } from 'react';
import './Counter.css'

class Counter extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        };
    }

    componentDidMount() {
        var input = document.getElementById("assign");

        input.addEventListener("keyup", function (event) {
            if (event.key === "Enter") {
                event.preventDefault();
                document.getElementById("assignbutton").click();
            }
        });
    }

    setValue = event => {
        let assignedValue = parseInt(document.getElementById("assign").value, 10);

        // checking for NaN
        if (assignedValue !== assignedValue) {
            assignedValue = 0
        }

        this.setState({
            count: parseInt(assignedValue, 10)
        });
    };


    increment = () => {
        let currentCount = this.state.count

        this.setState({
            count: currentCount + 1
        });
    };

    decrement = () => {
        let currentCount = this.state.count

        this.setState({
            count: currentCount - 1
        });
    };

    render() {
        return (
            <div className="row">
                <div className="container col redborder">
                    <div className="input-group my-3">
                        <input type="number" id="assign" className="form-control" placeholder="Put a number" />
                        <button id="assignbutton" className="input-group-text" onClick={this.setValue}>Assign</button>
                    </div>
                    <div className="btn-group">
                        <button className="btn btn-warning" onClick={this.increment}>Up</button>
                        <button className="btn btn-info" onClick={this.decrement}>Down</button>
                    </div>
                </div>
                <div className="container col">
                    <div className="redborder my-3">
                        <h1 className="left">{this.state.count}</h1>
                    </div>
                </div>
            </div>
        )
    }
}

export default Counter;
