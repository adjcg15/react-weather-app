import { combineReducers } from 'redux';

import { locationReducer } from './locationReducer';
import { weatherReducer } from './weatherReducer';

export const appReducer = combineReducers({
    location: locationReducer,
    weather: weatherReducer
});