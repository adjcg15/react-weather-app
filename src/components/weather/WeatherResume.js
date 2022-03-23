import React from 'react';

export const WeatherResume = React.memo(({date, temp, weather, icon}) => {

    return (
        <>
            <div className="resume">
                <p className="resume__date">{ date }</p>
                <p className="resume__temperature">{ Math.round(temp) }°C</p>
                <p className="resume__weather">{ weather }</p>
            </div>

            <img 
                className="resume__img"
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={ weather }
            />
        </>
    );
});
