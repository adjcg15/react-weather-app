import { types } from '../types/types';

export const startFullLocationUpdating = (coordinates) => {
    const { lat, lng } = coordinates;

    return async(dispatch) => {
        dispatch(
            updateCoordinates(coordinates)
        );

        try {
            const response = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${process.env.REACT_APP_GEOKEY}&language=en`);
            const data = await response.json();
    
            const result = data.results;
    
            const dataUpdated = {
                city: result[result.length - 2].formatted_address || '',
                current: result[result.length - 3].formatted_address || ''
            };
    
            dispatch(
                updateLocationData(dataUpdated)
            );

            localStorage.setItem('location')
        } catch(e) {
            console.log(e);
        }
        
    }
}

export const updateCoordinates = (coordinates) => {
    localStorage.setItem('coordinates', JSON.stringify(coordinates));

    return {
        type: types.updateCoordinates,
        payload: coordinates
    }
};

export const updateLocationData = (data) => {
    localStorage.setItem('location', JSON.stringify(data));
    
    return {
        type: types.updateLocationData,
        payload: data
    }
};