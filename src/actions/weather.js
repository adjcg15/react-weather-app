import { anHourPassed } from '../helpers/getTimeDifference';
import { getLocalStorageValue } from '../helpers/localStorage';
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

export const startWeatherUpdate = (coordinates) => {
    return async (dispatch) => {
        const weatherStored = getLocalStorageValue('weather');

        if(!weatherStored.stored) {
            dispatch(
                startFetchingWeatherData(coordinates)
            );
        } else {
            if(anHourPassed(Math.floor(Date.now()/1000) - weatherStored.value.current.dt)) {
                return dispatch(
                    startFetchingWeatherData(coordinates)
                );
            }

            dispatch(
                updateAllWeatherData(weatherStored.value)
            )
        }
    }
}

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

export const updateDay = (id) => ({
    type: types.changeActiveDay,
    payload: id
});