import React from 'react';
import { Spinner } from '../ui/Spinner';

export const LocationInfo = React.memo(({ location, fetching, error }) => {
    const { city, current } = location;
    
    if(fetching) return (
        <div className="locationinfo">
            <h3 className="locationinfo__title">Current location</h3> 
            <div className="locationinfo__loading">
                <Spinner />
                <p>Loading location data...</p> 
            </div>
        </div>
    )

    if(error) return (
        <div className="locationinfo">
            <h3 className="locationinfo__title">Current location</h3> 
            <div className="locationinfo__error">
                <h3>Error</h3>
                <p>There was an error getting the location data, but you can continue and check the weather because place coordinates are stored.</p>
            </div>
        </div>
    )
    
    return (
            <div className="locationinfo">
                <h3 className="locationinfo__title">Current location</h3> 
                {
                    (!city && !current)
                    ? <p className="locationinfo__noneselected">None location selected yet.</p>
                    : <div className="locationinfo__success">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-map-pin" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#f52952" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <circle cx="12" cy="11" r="3" />
                            <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                        </svg>

                        <div className="locationinfo__location">
                            <p className="locationinfo__city">{ city }</p>
                            <p className="locationinfo__current">{ current }</p>
                        </div>
                    </div>
                }
            </div>
        )
});
