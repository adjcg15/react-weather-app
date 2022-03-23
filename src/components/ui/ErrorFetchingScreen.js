import React from 'react';
import { ReactComponent as ErrorIcon } from '../../img/error-fetching-icon.svg';

export const ErrorFetchingScreen = () => {
    return (
        <div className="fetching-error full-screen">
            <ErrorIcon />
            <p>We couldn't fetch the data. Please try it later.</p>
        </div>
    );
};
