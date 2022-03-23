import React from 'react'
import { Navigate } from 'react-router-dom';

import { getLocalStorageValue } from '../helpers/localStorage';

export const PublicRoute = ({children}) => {
    const { stored: coordinatesStored } =  getLocalStorageValue('coordinates');
    const { stored: locationStored } = getLocalStorageValue('location');
    
    if(coordinatesStored && locationStored) {
        return <Navigate to='/weather/' />;
    }

    return children
}
