import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from '../components/home/Home';
import { Location } from '../components/location/Location';
import { ErrorScreen } from '../components/ui/ErrorScreen';
import { WeatherScreen } from '../components/weather/WeatherScreen';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    exact
                    path="/"
                    element={ <Home /> }
                />

                <Route 
                    exact 
                    path="/location"
                    element={ <Location /> }
                />

                <Route 
                    exact
                    path="/weather/*"
                    element={ <WeatherScreen /> }
                />

                <Route
                    path="/*"
                    element={ <ErrorScreen /> }
                />
            </Routes>
        </BrowserRouter>
    )
};