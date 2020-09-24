import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';



class Cities extends React.Component {
    constructor(props) {
    super();
    this.state = {  
        cityArray: ["Ingelstad", "Stenslanda", "Tävelsås", "Jät", "Uråsa"]
                };
    this.handleSubmit = this.handleSubmit.bind(this);

    }

    handleSubmit(event) {
        event.preventDefault();
        let arr = [...this.state.cityArray];
        console.log(event.target.inputCity.value);
        arr.push(event.target.inputCity.value);
        this.setState({ cityArray: arr});
    }

    render() {
        return (
            <div>
                <ul>
                    {this.state.cityArray.map((city) => (
                        <li>{city}</li>
                    ))}
                </ul>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        City to add: 
                        <input name="inputCity" type="text" placeholder="Enter a city" value={this.state.inputCity} onChange={this.handleChange}/>
                    </label>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        );
    }  
}

export default Cities;

