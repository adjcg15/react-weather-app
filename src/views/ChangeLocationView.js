import React from 'react';
import { LocationContext } from '../components/location/LocationContext';

export const ChangeLocationView = () => {
    return (
        <>
            <h1 className="location__title">Change location</h1>

            <LocationContext 
                type="Change"
            />
        </>
    );
};
