import React from 'react';

import { Map } from './Map';
import { CurrentButton } from './CurrentButton';
import { SubmitButton } from './SubmitButton';
import { LocationInfo } from './LocationInfo';
import { useDispatch } from 'react-redux';
import { updateCoordinates, updateLocationData } from '../../actions/location';
import { Navigate } from 'react-router-dom';
import { getLocalStorageValue } from '../../helpers/localStorage';

export const Location = () => {
    const dispatch = useDispatch();

    const { stored: coordinatesStored, value: coordinates } =  getLocalStorageValue('coordinates');
    const {stored: locationStored, value: location} = getLocalStorageValue('location');
    
    if(coordinatesStored && locationStored) {
        dispatch(
            updateCoordinates(coordinates)
        );

        dispatch(
            updateLocationData(location)
        );

        return <Navigate to='/weather' />;
    }

    return (
        <div className="location animate__animated animate__fadeIn animate__faster">
            <div className="location__container container">
                <h2 className="location__title">Where?</h2>
                <p className="location__text">To check the weather you need to know where. Please choose a place where you want to check the weather.</p>
                
                <Map />

                <div className="location__info">
                    <h3 className="location__info-title">
                        Current place
                    </h3>
                    <LocationInfo />
                </div>
            </div>
            
            <div className="location__buttons">
                <div className="location__buttons-content">
                    <CurrentButton />
                    <SubmitButton />
                </div>
            </div>
        </div>
    );
};
