import React, { useCallback } from 'react';

export const SwitchButton = React.memo(({id, changeActive, activeId, className, children}) => {
    const handleClick = useCallback(() => {
        changeActive(id);
    }, [changeActive, id]);
    
    return (
        <button 
            className={ `${ className } ${ id === activeId ? 'active' : ''}` }
            onClick={ handleClick }
        >
            { children }
        </button>
    );
});
