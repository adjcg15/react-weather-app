/*
    {
        coordinates: {
            lat: 81.912919212,
            lng: -12.8278912012
        },
        city: 'Veracruz, México.',
        current: 'Xalapa, Ver., México
    }
*/

import { types } from '../types/types';

const initialState = {
    coordinates: {},
    city: '',
    current: ''
}

export const locationReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.updateLocationData:
            return {
                ...state, 
                city: action.payload.city,
                current: action.payload.current,
            }
        case types.updateCoordinates:
            return {
                ...state,
                coordinates: action.payload
            }
        default:
            return state;
    }
}