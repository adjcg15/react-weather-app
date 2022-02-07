import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';

import { udateDay, updateHour } from '../../actions/weather';

export const WeatherResume = React.memo(({activeId, id, date, temp, weather, icon, type}) => {
    const dispatch = useDispatch();
    const isActive = activeId === id;

    const handleClick = useCallback(() => {
        switch(type) {
            case 'day':
                dispatch(
                    updateHour(id)
                );
                break;
            case 'week':
                dispatch(
                    udateDay(id)
                );
                break;
            default:
                break;
        }
        
    }, [dispatch, id, type]);

    return (
        <div 
            className={`resumecard pointer ${isActive ? 'active' : ''}`}
            onClick={ handleClick }
        >
            <div className="resumecard__resume">
                <p className="resumecard__date">{ date }</p>
                <p className="resumecard__temperature">{ Math.round(temp) }°C</p>
                <p className="resumecard__weather">{ weather }</p>
            </div>

            <img 
                className="resumecard__img"
                src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                alt={ weather }
            />
        </div>
    );
});
