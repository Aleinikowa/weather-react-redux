import weatherDataReducer from "./isWeatherData";
import { combineReducers } from 'redux';

const  allReducer = combineReducers({
    isDataWeather: weatherDataReducer
})

export default allReducer;

