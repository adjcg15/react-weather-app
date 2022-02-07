import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { ChangeLocation } from '../components/location/ChangeLocation';

import { CurrentWeather } from '../components/weather/CurrentWeather';
import { DailyWeather } from '../components/weather/DailyWeather';
import { WeeklyWeather } from '../components/weather/WeeklyWeather';
import { getFormattedDate } from '../helpers/getFormattedDate';

export const DashboardRouter = React.memo(() => {
    return (
        <div className="dashboard container">
            <p className="dashboard__date">{ getFormattedDate(new Date()) }</p>
            <Routes>
                <Route 
                    exact
                    path="/"
                    element={ <CurrentWeather /> }
                />

                <Route 
                    exact
                    path="daily"
                    element={ <DailyWeather /> }
                />

                <Route 
                    exact
                    path="weekly"
                    element={ <WeeklyWeather /> }
                />

                <Route 
                    exact
                    path="change"
                    element={ <ChangeLocation /> }
                />

                <Route 
                    path="/*"
                    element={ <Navigate to="/weather/" /> }
                />
            </Routes>
        </div>
    )
});
