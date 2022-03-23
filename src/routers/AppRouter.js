import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { HomeView } from '../views/HomeView';
import { LocationView } from '../views/LocationView';
import { NotFoundScreen } from '../views/NotFoundScreen';
import { WeatherScreen } from '../views/WeatherScreen';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route 
                    exact
                    path="/"
                    element={ 
                        <PublicRoute>
                            <HomeView />
                        </PublicRoute>
                    }
                />

                <Route 
                    exact 
                    path="/location"
                    element={ 
                        <PublicRoute>
                            <LocationView />
                        </PublicRoute>
                    }
                />

                <Route 
                    exact
                    path="/weather/*"
                    element={
                        <PrivateRoute>
                            <WeatherScreen />
                        </PrivateRoute>
                    }
                />

                <Route
                    path="/*"
                    element={ <NotFoundScreen /> }
                />
            </Routes>
        </BrowserRouter>
    )
};