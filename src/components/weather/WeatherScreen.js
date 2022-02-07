import React from 'react';

import { Navbar } from '../ui/Navbar';
import { WeatherContent } from './WeatherContent';

export const WeatherScreen = () => {
    return (
        <>
            <Navbar />
            <WeatherContent />
        </>
    )
};
