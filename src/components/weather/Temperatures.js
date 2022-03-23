import React from 'react'

export const Temperatures = React.memo(({temps}) => {
    const { currentTemp, feelsLike } = temps;

    return (
        <div className="temperatures">
            <p className="temperatures__primary">{ Math.round(currentTemp) }°C</p>
            <p className="temperatures__feelslike">Feels like: <br/>{ Math.round(feelsLike) }°C</p>
        </div>
    )
});