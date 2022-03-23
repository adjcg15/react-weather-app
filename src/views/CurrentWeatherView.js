import React from 'react'
import { useSelector } from 'react-redux';

import { GraphicForecast } from '../components/weather/GraphicForecast';
import { TimeDetails } from '../components/weather/TimeDetails';
import { WeatherCard } from '../components/weather/WeatherCard';
import { getHour, getShortDay } from '../helpers/getFormattedDate';
import { getFormattedCurrentData } from '../helpers/weatherFormatters';

export const CurrentWeatherView = () => {
    const { current, dailyForecast, weeklyForecast } = useSelector(state => state.weather);

    const formattedDailyForecast = dailyForecast.map(day => ({
        dt: getHour(day.dt),
        temp: Math.round(day.temp),
        clouds: day.clouds, 
        humidity: day.humidity
    }));

    const fomattedWeeklyForecast = weeklyForecast.map(day => ({
        dt: getShortDay(day.dt),
        temp: Math.round(day.temp.day),
        clouds: day.clouds, 
        humidity: day.humidity
    }));

    return (
        <div className="current dashboard__view">
            <h2 className="current__title dashboard__title">Current Weather</h2>
            <div className="current__general">
                <WeatherCard
                    className="weathercard"
                    {...getFormattedCurrentData(current)}
                >
                    <TimeDetails 
                        timeDetails={{
                            sunrise: current.sunrise,
                            sunset: current.sunset
                        }}
                    />
                </WeatherCard>

                <div className="current__graphics">
                    <GraphicForecast 
                        completeForecast={ formattedDailyForecast }
                        title="The weather in next hours"
                    />

                    <GraphicForecast 
                        completeForecast={ fomattedWeeklyForecast }
                        title="The weather in next days"
                    />
                </div>
            </div>
        </div>
    );
}
