import React from 'react'

export const ForecastDetails = React.memo(({details}) => {
    const { clouds, rain, wind } = details;

    return (
        <ul className="forecastdetails">
            <li className="forecastdetails__detail">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3C3C3C" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
                </svg>
                <p>{ clouds }%</p>
            </li>
            <li className="forecastdetails__detail">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-droplet" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3C3C3C" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" />
                </svg>
                <p>{ rain }%</p>
            </li>
            <li className="forecastdetails__detail">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wind" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3C3C3C" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
                    <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
                    <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
                </svg>
                <p>{ (wind * 3.6).toString().slice(0, 4) }km/h</p>
            </li>
        </ul>
    )
});