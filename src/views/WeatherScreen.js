import React from 'react'
import { Navbar } from '../components/ui/Navbar'
import { WeatherContent } from '../components/weather/WeatherContent'

export const WeatherScreen = () => {
    return (
        <div className="weather-content">
            <Navbar />
            <WeatherContent />
        </div>
    )
}
