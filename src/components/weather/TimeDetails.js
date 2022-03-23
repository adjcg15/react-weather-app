import React from 'react'
import { getHour } from '../../helpers/getFormattedDate';

export const TimeDetails = React.memo(({timeDetails}) => {
    const { sunrise, sunset } = timeDetails;
    
    return (
        <ul className="timedetails">
            <li className="timedetails__data">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sunrise" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3C3C3C" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
                    <line x1="3" y1="21" x2="21" y2="21" />
                    <path d="M12 9v-6l3 3m-6 0l3 -3" />
                </svg>
                <p>{ getHour(sunrise) }</p>
            </li>
            <li className="timedetails__data">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sunset" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3C3C3C" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
                    <line x1="3" y1="21" x2="21" y2="21" />
                    <path d="M12 3v6l3 -3m-6 0l3 3" />
                </svg>
                <p>{ getHour(sunset) }</p>
            </li>
        </ul>
    )
});