import React, { useEffect, useState } from 'react';
import '../assets/img/styles/App.css';
import Weather from './Weather';
import Clock from './Clock';
import Page404 from "./Page404";
import { useDispatch } from "react-redux";
import { addHistory } from '../actions';
import { Dimmer, Loader } from 'semantic-ui-react';

function Home() {

    const api = {
        key: '0b602f69d0be15e22106f4493e16424d',
        base: 'https://api.openweathermap.org/data/2.5/'
    }

    const [weatherData, setWeatherData] = useState([]);
    const [background, setBackground] = useState('common');
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('Minsk');
    const dispatch = useDispatch();

    useEffect(() => {
        getDataWeather();
    }, [query]);

    async function getDataWeather() {
        const response = await fetch(`${api.base}weather?q=${query}&units=metrecc&APPID=${api.key}`)

        if (response.ok) {
            const result = await response.json();
            console.log(result);
            setWeatherData(result);
            setBackground(weatherData.weather[0].main);
            dispatch(addHistory(result.id, result.name, result.main.temp, result.weather[0].description));
        } else {
            console.log(response.statusText);
            return <Page404 />
        }
    }

    const updateSearch = (e)=> {
        setSearch(e.target.value);
    }

    const getSearch = (e)=> {
        e.preventDefault();
        setQuery(search);
        setSearch('');
    }

    return (
        <div className="home">
            <div className="weather">
                { (typeof weatherData.main != 'undefined') ? (
                    <Weather
                        title={weatherData.name}
                        temperature={weatherData.main.temp}
                        weatherDescription={weatherData.weather[0].description}
                        icon={weatherData.weather[0].main}/>
                ) : (
                    <div>
                        <Dimmer active>
                            <Loader>Loading..</Loader>
                        </Dimmer>
                    </div>
                )}
            </div>
            <div className="sidebar">
                <form onSubmit={getSearch} className="search-form">
                    <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                    <button className="search-button" type="submit">
                        Search
                    </button>
                </form>
                <Clock />
            </div>
        </div>
    )
}

export default Home;