import React from "react";
import moment from 'moment';

const Weather = ({ title,temperature, weatherDescription,mainBg }) => {

    const tempC = Math.round(temperature) - 273;

    return (
        <div className="weather-block">
            <div>
                <h1 className="temp">{tempC}&deg;C</h1>
            </div>
            <div>
                <h2 className="title">{title}</h2>
                <p className="day">{moment().format('dddd')}, {moment().format('LL')}</p>
            </div>
            <div>
                <p className="desc">{weatherDescription}</p>
            </div>
        </div>
    )
}

export default Weather;