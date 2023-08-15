import axios from 'axios'
import { API_KEY } from './constants'

export const getWeatherInfo = async (city) =>{
    const API_URL = 'http://api.openweathermap.org/data/2.5/weather'
    try{
        let response = await axios.get(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`,{responseType:"json"})
        return response.data
    } catch(error){
        console.log("Error : "+ error.message)
        return error.response
    }
}

export const getWeeklyForecast = async (lat,lon) => {
    const key = '8d2a110b6ad468ae1a0e459757cf659d'
    const WEEKDATA_URL = 'http://api.openweathermap.org/data/2.5/forecast'
    try{
        let response = await axios.get(`${WEEKDATA_URL}?lat=${lat}&lon=${lon}&appid=${key}&units=metric`,{responseType:"json"})
        return response.data
    } catch(error){
        console.log("Error : "+ error.message)
        return error.response
    }
}

//For future use 

export const getPastWeekForecast = async (lat,lon) => {
    const key = '8d2a110b6ad468ae1a0e459757cf659d'
    const WEEKDATA_URL = 'http://api.openweathermap.org/data/2.5/history/city'    
    try{
        let response = await axios.get(`${WEEKDATA_URL}?lat=${lat}&lon=${lon}&type=hour&appid=${key}&units=metric`,{responseType:"json"})
        return response.data
    } catch(error){
        console.log("Error : "+ error.message)
        return error.response
    }
}