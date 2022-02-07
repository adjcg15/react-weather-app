import React, { useEffect, useState } from 'react';

export const Clock = () => {
    const date = new Date();
    const [time, setTime] = useState({
        hours: date.getHours(),
        minutes: date.getMinutes()
    });
    

    useEffect(() => {

        let timer = setInterval(() => {
            const date = new Date();
            
            setTime({
                hours: date.getHours(),
                minutes: date.getMinutes()
            });
        }, 1000);

        return () => clearInterval(timer)
    }, []);

    const {hours, minutes} = time;

    return (
        <div className="home__clock">
            <p>{hours < 10 ? `0${hours}` : hours}:{minutes < 10 ? `0${minutes}` : minutes}</p>
        </div>
    )
};
