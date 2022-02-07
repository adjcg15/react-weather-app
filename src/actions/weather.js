import { types } from '../types/types';

export const updateAllWeatherData = (data) => {
    localStorage.setItem('weather', JSON.stringify(data));

    return {
        type: types.updateAllWeatherData,
        payload: data
    }
};

const startFetch = () => ({
    type: types.fetchingWeather
});

const errorFetching = (error) => ({
    type: types.errotFetching,
    payload: error
});

export const startFetchingWeatherData = (coordinates) => {
    return async (dispatch) => {
        const { lat, lng } = coordinates;
    
        dispatch(startFetch());

        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lng}&exclude=minutely,alerts&units=metric&appid=${process.env.REACT_APP_WEATHERKEY}`);

            const data = await response.json();
            
            dispatch(
                updateAllWeatherData(data)
            );

        } catch(error) {
            dispatch(
                errorFetching(error)
            );
        }
    }
}

export const updateHour = (id) => ({
    type: types.changeActiveHour,
    payload: id
});

export const udateDay = (id) => ({
    type: types.changeActiveDay,
    payload: id
});
// const updateCurrentWeather = (current = {}) => ({
//     type: types.updateCurrentWeather,
//     payload: current
// });

// const updateDailyForecast = (forecast = []) => ({
//     type: types.updateDailyForecast,
//     payload: forecast
// });

// const updateHourWeather = (weather = {}) => ({
//     type: types.updateHourWeather,
//     payload: weather
// });

// const updateWeeklyForecast = (forecast = []) => ({
//     type: types.updateWeeklyForecast,
//     payload: forecast
// });

// const updateDayWeather = (weather = {}) => ({
//     type: types.updateDayWeather,
//     payload: weather
// });