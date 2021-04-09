import React from "react";
import moment from 'moment';

const Weather = ({ title,temperature, weatherDescription }) => {

    const tempC = Math.round(temperature) - 273;

    return (
        <div>
            <h1>{title}</h1>
            <p>{tempC}&deg;C</p>
            <p>{weatherDescription}</p>
            <p>{moment().format('dddd')}</p>
            <p>{moment().format('LL')}</p>
        </div>
    )
}

export default Weather;