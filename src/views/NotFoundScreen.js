import React from 'react';
import { ReactComponent as ErrorIcon } from '../img/page-not-found-icon.svg';

export const NotFoundScreen = () => {
    return(
        <div className="not-found full-screen ">
            <ErrorIcon />
            <p>Error 404, page not found</p>
        </div>
    )
}
