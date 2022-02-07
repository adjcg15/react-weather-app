import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';

import { startFullLocationUpdating } from '../../actions/location';

export const CurrentButton = () => {
    const dispatch = useDispatch();

    const getUserLocation = useCallback(() => {
        
        if(!navigator.geolocation) {
            return Swal.fire({
                icon: 'error',
                title: 'Geolocation error',
                text: 'The geolocation isn\'t supported in this navigator. Please use another one or change the settings.',
                showCloseButton: true,
                showConfirmButton: false
            });
        }

        const success = (location) => {
            dispatch(
                startFullLocationUpdating({
                    lat: location.coords.latitude,
                    lng: location.coords.longitude
                })
            );
        }

        const error = () => {
            Swal.fire({
                icon: 'error',
                title: 'Failed to get',
                text: 'An error occurred while getting the current location. Check that the website has the permissions to obtain your location.',
                showCloseButton: true,
                showConfirmButton: false
            });
        }

        navigator.geolocation.getCurrentPosition(success, error);
    }, [dispatch]);

    return (
        <button 
            className="location__button location__buttons-current pointer basic-short-transition"
            onClick={ getUserLocation }
        >
            Current location
        </button>
    );
};
