import { getDay, getHour } from './getFormattedDate';

export const getFormattedCurrentData = (weather) => ({
    time: "Current weather",
    temps: {
        currentTemp: weather.temp,
        feelsLike: weather.feels_like
    },
    weather: {
        main: weather.weather[0].main,
        description: weather.weather[0].description,
        icon: weather.weather[0].icon
    },
    details: {
        clouds: weather.clouds,
        rain: weather.humidity,
        wind: weather.wind_speed
    },
});

export const getFormattedHourlyData = (weather) => ({
    ...getFormattedCurrentData(weather),
    time: getHour(weather.dt),
});

export const getFormattedDailyData = (weather) => ({
    ...getFormattedCurrentData(weather),
    time: getDay(weather.dt),
    temps: {
        currentTemp: weather.temp.day,
        feelsLike: weather.feels_like.day
    },
});