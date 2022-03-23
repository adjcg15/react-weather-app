import React from 'react'

export const WeatherInfo = React.memo(({info}) => {
    const { time, main, description, icon } = info;

    return (
        <div className="weatherdesc">
            <p className="weatherdesc__time">{ time }</p>
            <img 
                className="weatherdesc__img"
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={ description }
            />
            
            <p className="weatherdesc__main">{ main }</p>
            <p className="weatherdesc__description">{ description }</p>
        </div>
    )
});