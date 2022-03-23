import React from 'react'
import { useSelector } from 'react-redux';

export const PlaceInfo = React.memo(() => {
    const { current : location } = useSelector(state => state.location);

    return (
        <div className="place">
            <h3 className="place__title">{ location }</h3>
        </div>
    );
});