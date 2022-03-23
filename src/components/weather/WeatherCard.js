import React from 'react';

import { PlaceInfo } from '../location/PlaceInfo';
import { ForecastDetails } from './ForecastDetails';
import { Temperatures } from './Temperatures';
import { WeatherInfo } from './WeatherInfo';

export const WeatherCard = React.memo(({children, className, weather, time, temps, details}) => {
    
    return (
        <div className={`content-card ${className}`}>
            <div className='weathercard__content'>
                <div className="weathercard__general">
                    <PlaceInfo />
                    
                    <WeatherInfo
                        info={ {time, ...weather} }
                    />
                </div>

                <div className="weathercard__details">
                    { children }

                    <Temperatures 
                        temps={ temps }
                    />

                    <ForecastDetails 
                        details={ details }
                    />
                </div>
            </div>
        </div>
    );
});
