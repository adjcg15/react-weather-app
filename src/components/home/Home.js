import React from 'react';
import { useDispatch } from 'react-redux';
import { Navigate, NavLink } from 'react-router-dom';
import { startFullLocationUpdating } from '../../actions/location';
import { getFormattedDate } from '../../helpers/getFormattedDate';

import { getGreeting } from '../../helpers/getGreeting';
import { getLocalStorageValue } from '../../helpers/localStorage';
import { Clock } from './Clock';

export const Home = () => {
    const date = new Date();
    const greeting = getGreeting(date.getHours());
    const dispatch = useDispatch();

    const { stored, value } =  getLocalStorageValue('coordinates');
    
    if(stored) {
        dispatch(
            startFullLocationUpdating(value)
        );

        return <Navigate to='/weather' />;
    }

    return (
        <div className="home animate__animated animate__fadeIn animate__faster">
            <div className={ `home__img basic-short-transition ${greeting}` }>
            </div>
            <div className="home__container">
                <div className="home__content">
                    <div className="home__top">
                        <h3 className="home__greeting">Good { greeting }</h3>
                        <Clock />
                        <p className="home__date">{ getFormattedDate(date) }</p>
                    </div>

                    <div>
                        <h2 className="home__message">Discover <span>the weather</span> in your city</h2>
                        <NavLink className="home__button basic-short-transition" to="/location">Get started</NavLink>
                    </div>
                </div>
            </div>
        </div>
    );
};
