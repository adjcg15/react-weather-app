import React from 'react';
import { NavLink } from 'react-router-dom';

import { Clock } from '../components/ui/Clock';
import { getFormattedDate } from '../helpers/getFormattedDate';
import { getGreeting } from '../helpers/getGreeting';

export const HomeView = () => {
    const date = new Date();
    const greeting = getGreeting(date.getHours());

    return (
        <div className="home animate__animated animate__fadeIn animate__faster">
            <div className={ `home__img basic-short-transition ${greeting}` }>
                <div className="home__img-content">
                </div>
            </div>
            <div className="home__container">
                <div className="home__content">
                    <div className="home__top">
                        <h3 className="home__greeting">Good { greeting }</h3>
                        <Clock 
                            className="home__clock"
                        />
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
}
