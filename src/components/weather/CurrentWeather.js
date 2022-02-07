import React from 'react';
import { useSelector } from 'react-redux';
import { WeatherCard } from './WeatherCard';

export const CurrentWeather = () => {
    const { current } = useSelector(state => state.weather);

    const weather = {
        main: current.weather[0].main, description: current.weather[0].description, icon: current.weather[0].icon
    }

    const temps = {
        currentTemp: current.temp, feelsLike: current.feels_like
    }

    const info = {
        clouds: current.clouds, rain: current.humidity, wind: current.wind_speed,
        raises: {
            sunrise: current.sunrise,
            sunset: current.sunset
        }
    }

    return (
        <WeatherCard
            weather={ weather }
            time="Current Weather"
            temps={ temps }
            info={ info }
        />
    );
};
