import React from 'react'

export const TemperatureDetails = React.memo(({tempDetails}) => {
    const { minT, maxT } = tempDetails;

    return (
        <ul className="tempdetails">
            <li className="tempdetails__temp">
                <p>Min: { Math.round(minT) }°C</p>
            </li>

            <li className="tempdetails__temp">
                <p>Max: { Math.round(maxT) }°C</p>
            </li>
        </ul>
    )
});