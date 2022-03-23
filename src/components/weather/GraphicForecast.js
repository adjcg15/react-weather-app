import React, { useCallback, useRef, useState } from 'react';
import { Graph } from '../ui/Graph';
import { SwitchButton } from '../ui/SwitchButton';

export const GraphicForecast = React.memo(({completeForecast, title='', graphExtension = 6, orientation="horizontal"}) => {
    const barValues = useRef([{title: 'temperature', units: '°C', type:'temp'}, {title: 'clouds', units: '%', type:'clouds'}, {title: 'rain', units: '%', type:'humidity'}]);

    const [activeViewElement, setActiveViewElement] = useState(barValues.current[0]);

    const updateActiveView = useCallback(function(id) {
        setActiveViewElement(barValues.current.find(view => view.type === id));
    }, []);

    const filteredForecast = completeForecast.slice(0, graphExtension).map(day => ({
        name: day.dt,
        data: day[activeViewElement.type]
    }));

    return (
        <div className="graphforecast content-card">
            <h3 className="graphforecast__title">{ title }</h3>

            <div className="graphforecast__bar">
                {
                    barValues.current.map(value => (
                        <SwitchButton
                            key={ value.type }
                            className="graphforecast__bar-element pointer basic-short-transition"
                            changeActive={ updateActiveView }
                            id={ value.type }
                            activeId={ activeViewElement.type }
                        >
                            { value.title }
                        </SwitchButton>
                    ))
                }
            </div>

            <Graph 
                title="Next hours"
                data={ filteredForecast }
                className="graphforecast__graph"
                units={ activeViewElement.units }
                isVertical={ orientation === 'vertical' }
            />
        </div>
    );
});
