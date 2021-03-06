import axios from 'axios'

const API_KEY = '62d774531e9c8844ae3cf84e2ad99228'
const ROOT_URL = 'http://api.openweathermap.org/data/2.5/forecast?appid=' + API_KEY

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = ROOT_URL + '&q=' + city + ',gb'
  const request = axios.get(url)

  console.log('Request:::: ', request)

  return {
    type: FETCH_WEATHER,
    payload: request
  }
}