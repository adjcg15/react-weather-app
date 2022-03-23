import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { getFormattedDate } from '../helpers/getFormattedDate';
import { ChangeLocationView } from '../views/ChangeLocationView';
import { CurrentWeatherView } from '../views/CurrentWeatherView';
import { DayForecastView } from '../views/DayForecastView';
import { WeekForecastView } from '../views/WeekForecastView';

export const DashboardRouter = React.memo(() => {
    return (
        <div className="dashboard">
            <div className="dashboard__content container">
                <p className="dashboard__date">{ getFormattedDate(new Date()) }</p>

                <Routes>
                    <Route 
                        exact
                        path="/"
                        element={ <CurrentWeatherView /> }
                    />

                    <Route 
                        exact
                        path="daily"
                        element={ <DayForecastView /> }
                    />

                    <Route 
                        exact
                        path="weekly"
                        element={ <WeekForecastView /> }
                    />

                    <Route 
                        exact
                        path="change"
                        element={ <ChangeLocationView /> }
                    />

                    <Route 
                        path="/*"
                        element={ <Navigate to="/weather/" /> }
                    />
                </Routes>
            </div>
        </div>
    )
});
