import { types } from '../types/types';

export const updateCoordinates = (coordinates) => {
    localStorage.setItem('coordinates', JSON.stringify(coordinates));

    return {
        type: types.updateCoordinates,
        payload: coordinates
    }
};

export const updateLocationData = (data) => {
    localStorage.setItem('location', JSON.stringify(data));
    
    return {
        type: types.updateLocationData,
        payload: data
    }
};