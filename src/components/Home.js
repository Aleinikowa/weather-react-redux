import React,  {useEffect, useState} from 'react';
// import { createStore } from 'redux'
import '../App.css';
import Weather from "./Weather";
import Clock from "./Clock";
import { useDispatch } from "react-redux";
import { setTemp, setName } from '../actions';

function Home() {

    const api = {
        key : '0b602f69d0be15e22106f4493e16424d',
        base : ' https://api.openweathermap.org/data/2.5/'
    }

    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [weatherData, setWeatherData] = useState([]);
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('Minsk');

    const dispatch = useDispatch();

    useEffect(() => {
        getDataWeather()
    }, [query]);

    async function getDataWeather() {
        navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
            // codeLatLng();

        })
        await  fetch(`${api.base}weather?q=${query}&units=metrecc&APPID=${api.key}`)
            .then(res => res.json())
            .then(result => {
                setWeatherData(result)
                // console.log(result)
                // console.log(new Date())
            });
    }

    // function codeLatLng() {}

    const updateSearch = (e)=> {
        setSearch(e.target.value);
    }

    const getSearch = (e)=> {

        e.preventDefault();

        dispatch(setName(weatherData.name));
        dispatch(setTemp(weatherData.main.temp));

        console.log(weatherData.name);
        console.log(weatherData.main.temp);


        setQuery(search);
        setSearch('');
    }


    return (
        <div className="home">
            <form onSubmit={getSearch} className="search-form">
                <input className="search-bar" type="text" value={search} onChange={updateSearch}/>
                <button className="search-button" type="submit">
                    Search
                </button>
            </form>
            { (typeof weatherData.main != 'undefined') ? (
                <Weather title={weatherData.name}
                         temperature={weatherData.main.temp}
                         weatherDescription={weatherData.weather[0].description}
                         timezone={weatherData.timezone}/>
            ) : (
                <div></div>
            )}
            <Clock />
        </div>
    )

}

export default Home;