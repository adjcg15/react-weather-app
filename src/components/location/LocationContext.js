import React, { useEffect, useState } from 'react';

import { CurrentButton } from './CurrentButton';
import { LocationInfo } from './LocationInfo';
import { Map } from './Map';
import { SubmitButton } from './SubmitButton';

export const LocationContext = React.memo(({ type = "Submit" }) => {
    const [coordinates, setCoordinates] = useState({
        lat: 0,
        lng: 0
    });

    const [location, setLocation] = useState({
        city: '',
        current: ''
    });

    const [fetching, setFetching] = useState(false);
    const [errorFetching, setErrorFetching] = useState(null);

    useEffect( () => {
        if(coordinates.lat && coordinates.lng) {
            setFetching(true);
            setErrorFetching(null);
            
            fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${coordinates.lat},${coordinates.lng}&key=${process.env.REACT_APP_GEOKEY}&language=en`)
                .then(result => result.json())
                .then(data => {
                    const result = data.results;

                    const locationUpdated = {
                        city: result[result.length - 2].formatted_address || '',
                        current: result[result.length - 3].formatted_address || ''
                    };

                    setLocation(locationUpdated);
                    setFetching(false);
                })
                .catch((error) => {
                    setLocation({
                        city: '',
                        current: ''
                    });
                    setFetching(false);
                    setErrorFetching(error);
                })
        }
    }, [coordinates]);
    
    return (
        <>
            <Map 
                coordinates={ coordinates }
                setCoordinates={ setCoordinates }
            />

            <LocationInfo 
                location={ location }
                fetching={ fetching }
                error={ errorFetching }
            />

            <div className="locationbuttons">
                <div className="locationbuttons__content">
                    <CurrentButton 
                        setCoordinates={ setCoordinates }
                    />
                    <SubmitButton 
                        coordinates={ coordinates }
                        location={ location }
                        enabled={ coordinates.lat && coordinates.lng && !fetching }
                        message={`${type} location`}
                    />
                </div>
            </div>
        </>
    )
});
