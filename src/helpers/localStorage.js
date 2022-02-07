export const getLocalStorageValue = (key = '') => {
    let stored = true;
    let value = '';
    
    try {
        value = JSON.parse(localStorage.getItem(`${key}`));

        switch(key) {
            case 'coordinates':
                if (typeof value.lat != 'number' || typeof value.lng != 'number') throw new Error();
                break;
            case 'location':
                if(typeof value.city != 'string' || typeof value.current != 'string') throw new Error();
                break;
            case 'weather':
                if (typeof value.current.dt != 'number') throw new Error();
                break;
            default:
                break;
        }
    } catch(error) {
        stored = false;
    }

    return {stored, value};
}