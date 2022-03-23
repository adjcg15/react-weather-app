import React, { useCallback, useRef, useState } from 'react';
import { Autocomplete, GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';

import mapStyles from '../../helpers/mapStyles';
import { Spinner } from '../ui/Spinner';

const libraries = ['places'];

const mapContainerStyle = {
    width: '100%',
    height: '100%',
    borderRadius: '5px'
};

const options = {
    styles: mapStyles,
    disableDefaultUI: true,
    zoomControl: true,
    language: 'en'
}

const center = {
    lat: 23,
    lng: -102.5
}

export const Map = React.memo(({ coordinates, setCoordinates }) => {
    const [autocomplete, setAutocomplete] = useState(null);
    const [search, setSearch] = useState('');
    const mapRef = useRef(null);

    const { isLoaded, loadError } = useJsApiLoader({
        googleMapsApiKey: process.env.REACT_APP_GEOKEY,
        libraries
    });

    const onMapLoad = useCallback((map) => {
        mapRef.current = map;
    }, []);
    
    const handleMapClick = useCallback((e) => {
        setSearch('');

        setCoordinates({
            lat: e.latLng.lat(),
            lng: e.latLng.lng()
        });

    }, [setCoordinates]);

    const handleInputChange = useCallback((e) => {
        setSearch(e.target.value);
    }, []);

    const handleAutocompleteLoad = useCallback((autocomplete) => {
        setAutocomplete(autocomplete);
    }, []);

    const onPlaceChanged = useCallback(() => {
        const returnInfo = autocomplete.getPlace();
        // console.log(returnInfo);

        setSearch('');
        
        if(returnInfo.geometry) {
            setCoordinates({
                lat: returnInfo.geometry.location.lat(),
                lng: returnInfo.geometry.location.lng()
            })
        }
    }, [autocomplete, setCoordinates]);

    if(loadError) {
        return <div>Map cannot be loaded right now, sorry</div>
    }

    return (
        <div className="map">
            {
                isLoaded 
                    ? 
                    (
                        <GoogleMap
                            mapContainerStyle={ mapContainerStyle }
                            zoom={ 4 }
                            center={ (coordinates.lat && coordinates.lng) ? coordinates : center }
                            options={ options }
                            onClick={ handleMapClick }
                            onLoad={ onMapLoad }
                        >
                            <Autocomplete
                                onLoad={ handleAutocompleteLoad }
                                onPlaceChanged={ onPlaceChanged }
                                options={{
                                    fields: [
                                        'address_components',
                                        'formatted_address',
                                        'geometry',
                                        'name',
                                    ],
                                    types: ['(regions)']
                                }}
                            >
                                <input
                                    value={ search }
                                    onChange={ handleInputChange }
                                    type="text"
                                    placeholder="Search for a place"
                                    style={{
                                        display: 'box',
                                        border: 'none',
                                        width: '80%',
                                        height: '32px',
                                        padding: '5px 12px',
                                        borderRadius: '3px',
                                        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.2)',
                                        fontSize: '14px',
                                        outline: 'none',
                                        position: 'relative',
                                        margin: '5px 0 0 5px'
                                    }}
                                />
                            </Autocomplete>
                            {
                                (coordinates.lat && coordinates.lng) && 
                                <Marker position={ coordinates } />
                            }
                        </GoogleMap>
                    ) 
                    : <Spinner />
            }
        </div>
    )
});
