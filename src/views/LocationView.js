import React from 'react'
import { LocationContext } from '../components/location/LocationContext';

export const LocationView = () => {
    return (
        <div className="location animate__animated animate__fadeIn animate__faster">
            <div className="location__container container">
                <h2 className="location__title">Where?</h2>
                <p className="location__text">To check the weather you need to know where. Please choose a place where you want to check the weather.</p>
                
                <LocationContext />
            </div>
        </div>
    );
}
