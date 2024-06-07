import axios from 'axios';

const API_KEY = "fe2006529be825ab1d6a6a9257fc1571";
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const getWeather = async (city: string) => {
    const response = await axios.get(BASE_URL, {
        params: {
            q: city,
            appid: API_KEY,
            units: 'imperial'
        }
    });
    return response.data;
};
