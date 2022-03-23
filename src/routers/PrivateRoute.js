import React from 'react'
import { useDispatch } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { updateCoordinates, updateLocationData } from '../actions/location';
import { getLocalStorageValue } from '../helpers/localStorage';

export const PrivateRoute = ({children}) => {
    const dispatch = useDispatch();
    const { stored:coordinatesStored, value:coordinates } =  getLocalStorageValue('coordinates');
    const { stored:locationStored, value:location } = getLocalStorageValue('location');
    
    if(!coordinatesStored || !locationStored) {
        localStorage.clear();

        return <Navigate to='/location' />;
    }

    dispatch(
        updateCoordinates(coordinates)
    );

    dispatch(
        updateLocationData(location)
    );

    return children
}