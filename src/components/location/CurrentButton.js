import React, { useCallback } from 'react';
import Swal from 'sweetalert2';

export const CurrentButton = React.memo(({ setCoordinates }) => {
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
            setCoordinates({
                lat: location.coords.latitude,
                lng: location.coords.longitude
            });
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
    }, [setCoordinates]);

    return (
        <button 
            className="locationbutton locationbutton-current pointer basic-short-transition"
            onClick={ getUserLocation }
        >
            Current location
        </button>
    );
});
