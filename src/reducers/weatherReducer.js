/*
{
    current: {},
    hourly: [],
    daily: []
}
*/

import { types } from '../types/types';

const initialState = {
    loading: true,
    error: null,
    current: {},
    dailyForecast: [],
    hourWeather: {},
    weeklyForecast: [],
    dayWeather: {}
}

export const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.fetchingWeather:
            return {
                ...state,
                loading: true,
            }
        case types.errotFetching:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case types.updateAllWeatherData:
            return {
                ...state,
                loading: false,
                error: null,
                current: action.payload.current,
                dailyForecast: action.payload.hourly,
                hourWeather: action.payload.hourly[0],
                weeklyForecast: action.payload.daily,
                dayWeather: action.payload.daily[0]
            }
        case types.changeActiveHour:
            return {
                ...state,
                hourWeather: state.dailyForecast.find(hour => hour.dt === action.payload)
            }
        case types.changeActiveDay:
            return {
                ...state,
                dayWeather: state.weeklyForecast.find(hour => hour.dt === action.payload)
            }
        default:
            return state;
    }
}