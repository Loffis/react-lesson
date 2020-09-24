import React from 'react';
import './App.css';



class Money extends React.Component {
    constructor(props) {
    super(props);
    this.state = { counterValue: 10 };
    //this.increaseValue = this.increaseValue.bind(this);
    }

    increaseValue(increase) {
        this.setState({
            counterValue: this.state.counterValue + increase
        });
    }

    doubleValue() {
        this.setState({
            counterValue: this.state.counterValue * 2
        });
    }

    render() {
        return (
            <div>
                <h1>VALUE: {this.state.counterValue}</h1>
                <button onClick={() => this.increaseValue((Math.floor(Math.random() * 10) ))}>+ random</button>
                <button onClick={() => this.increaseValue(1)}>+1</button>
                <button onClick={() => this.doubleValue()}>double</button>
            </div>
        );
    }  
}

export default Money;
