import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export const SubmitButton = () => {
    const navigate = useNavigate();

    const { coordinates } = useSelector(state => state.location);
    const disabled = !coordinates.hasOwnProperty('lng');

    const handleSubmit = () => {
        if(disabled) {
            return;
        }

        navigate('/weather');
    }

    return (
        <button 
            className={ `location__button location__buttons-submit pointer basic-short-transition ${disabled && 'disabled'}` }
            disabled={ disabled && 'disabled'}
            onClick={ handleSubmit }
        >
            Submit location
        </button>
    );
};
