import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { startWeatherUpdate } from '../../actions/weather';

import { DashboardRouter } from '../../routers/DashboardRouter';
import { ErrorFetchingScreen } from '../ui/ErrorFetchingScreen';
import { Spinner } from '../ui/Spinner';

export const WeatherContent = () => {
    const dispatch = useDispatch();

    const { coordinates } = useSelector(state => state.location);
    const { loading, error } = useSelector(state => state.weather);

    useEffect(() => {
        dispatch(
            startWeatherUpdate(coordinates)
        );
    }, [coordinates, dispatch]);

    if(loading) return (
        <div className="weather-spinner full-screen">
            <Spinner />
        </div>
    );

    if(error) return <ErrorFetchingScreen />
    
    return <DashboardRouter />;
};
