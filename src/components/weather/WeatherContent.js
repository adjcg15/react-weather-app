import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { updateCoordinates, updateLocationData } from '../../actions/location';
import { startFetchingWeatherData, updateAllWeatherData } from '../../actions/weather';
import { anHourPassed } from '../../helpers/getTimeDifference';
import { getLocalStorageValue } from '../../helpers/localStorage';
import { DashboardRouter } from '../../routers/DashboardRouter';
import { ErrorFetchingScreen } from '../ui/ErrorFetchingScreen';
import { Spinner } from '../ui/Spinner';

export const WeatherContent = () => {
    const dispatch = useDispatch();

    const { coordinates } = useSelector(state => state.location);
    const { loading, error } = useSelector(state => state.weather);

    useEffect(() => {
        const coordinatesStored = getLocalStorageValue('coordinates');
        const locationStored = getLocalStorageValue('location');
        const weatherStored = getLocalStorageValue('weather');

        if(!coordinates.hasOwnProperty('lat')) {
            return dispatch(
                updateCoordinates(coordinatesStored.value)
            );
        }

        if(locationStored.stored) {
            dispatch(
                updateLocationData(locationStored.value)
            )
        }

        if(!weatherStored.stored) {
            return dispatch(
                startFetchingWeatherData(coordinates)
            );
        }

        if(anHourPassed(Math.floor(Date.now()/1000) - weatherStored.value.current.dt)) {
            return dispatch(
                startFetchingWeatherData(coordinates)
            );
        }

        dispatch(
            updateAllWeatherData(weatherStored.value)
        )
    }, [coordinates, dispatch]);

    if(loading) return <Spinner />
    if(error) return <ErrorFetchingScreen />
    return <DashboardRouter />;
};
