import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { updateCoordinates, updateLocationData } from '../../actions/location';

export const SubmitButton = React.memo(({ coordinates, enabled, message, location }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = () => {
        if(!enabled) return;

        dispatch(
            updateCoordinates(coordinates)
        )

        dispatch(
            updateLocationData(location)
        )

        localStorage.removeItem('weather');
        navigate('/weather/');
    }

    return (
        <button 
            className={ `locationbutton locationbutton-submit pointer basic-short-transition ${!enabled && 'disabled'}` }
            disabled={ !enabled && 'disabled'}
            onClick={ handleSubmit }
        >
            { message }
        </button>
    );
});
