import React, { Component } from 'react'
import axios from 'axios';

export default class Page1 extends Component {
    constructor(props) {
    super(props);
    this.state = {
      city: '',
      weather: null
    };
  }

  handleChange = (e) => {
    this.setState({ city: e.target.value });
  };

  getWeather = () => {
    const apiKey = 'd2941c7bae1c1b052f7da9d32a033b01'; // Replace with your OpenWeatherMap API key
    axios
      .get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=${apiKey}&units=metric`)
      .then((res) => {
        this.setState({ weather: res.data });
      });
  };
  render() {
    return (
      <div>
        <h1>Weather App</h1>
        <input type="text"placeholder="Enter city" onChange={this.handleChange}/>
        <button onClick={this.getWeather}>Get Weather</button>
        {this.state.weather &&(
            <div>
            <h2>{this.state.weather.name}</h2>
            <p>Temperature: {this.state.weather.main.temp}C</p>
            <p>{this.state.weather.weather[0].description}</p>
            </div>
        )}
        </div>
    )
  }
}