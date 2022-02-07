import React from 'react';
import { useSelector } from 'react-redux';
import { getHour } from '../../helpers/getFormattedDate';

export const WeatherCard = React.memo(({weather, time, temps, info}) => {
    const { current : location } = useSelector(state => state.location);
    const { main, description, icon} = weather;
    const { currentTemp, feelsLike, details } = temps;
    const { clouds, rain, wind, raises } = info;

    return (
        <div className="weathercard animate__animated animate__fadeIn animate__faster">
            <div className="weathercard__general">
                <div className="weathercard__general-header">
                    <h3 className="weathercard__place">{ location }</h3>
                    <p className="weathercarg__general-message">{ time }</p>
                </div>
                
                <div className="weathercard__general-img">
                    <img 
                        className="weathercard__img"
                        src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
                        alt={ description }
                    />
                    
                    <p className="weathercard__weather">{ main }</p>
                    <p className="weathercard__weather-details">{ description }</p>
                </div>
            </div>

            <div className="weathercard__details">
                {
                    details &&
                    <ul className="weathercard__details-temps">
                        <li className="weathercard__details-temp">
                            <p>Min: { Math.round(details.minT) }°C</p>
                        </li>

                        <li className="weathercard__details-temp">
                            <p>Max: { Math.round(details.maxT) }°C</p>
                        </li>
                    </ul>
                }

                {
                    raises &&
                    <ul className="weathercard__details-raises">
                        <li className="weathercard__details-raise">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sunrise" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3C3C3C" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
                                <line x1="3" y1="21" x2="21" y2="21" />
                                <path d="M12 9v-6l3 3m-6 0l3 -3" />
                            </svg>
                            <p>{ getHour(raises.sunrise) }</p>
                        </li>
                        <li className="weathercard__details-raise">
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-sunset" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3C3C3C" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                <path d="M3 17h1m16 0h1m-15.4 -6.4l.7 .7m12.1 -.7l-.7 .7m-9.7 5.7a4 4 0 0 1 8 0" />
                                <line x1="3" y1="21" x2="21" y2="21" />
                                <path d="M12 3v6l3 -3m-6 0l3 3" />
                            </svg>
                            <p>{ getHour(raises.sunset) }</p>
                        </li>
                    </ul>
                }

                <div className="weathercard__details-temp">
                    <p className="weathercard__details-primaryt">{ Math.round(currentTemp) }°C</p>
                    <p className="weathercard__details-feelslike">Feels like: <br/>{ Math.round(feelsLike) }°C</p>
                </div>

                <ul className="weathercard__details-more">
                    <li className="weathercard__details-detail">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-cloud" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3C3C3C" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M7 18a4.6 4.4 0 0 1 0 -9a5 4.5 0 0 1 11 2h1a3.5 3.5 0 0 1 0 7h-12" />
                        </svg>
                        <p>{ clouds }%</p>
                    </li>
                    <li className="weathercard__details-detail">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-droplet" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3C3C3C" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M6.8 11a6 6 0 1 0 10.396 0l-5.197 -8l-5.2 8z" />
                        </svg>
                        <p>{ rain }%</p>
                    </li>
                    <li className="weathercard__details-detail">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-wind" width="80" height="80" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#3C3C3C" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                            <path d="M5 8h8.5a2.5 2.5 0 1 0 -2.34 -3.24" />
                            <path d="M3 12h15.5a2.5 2.5 0 1 1 -2.34 3.24" />
                            <path d="M4 16h5.5a2.5 2.5 0 1 1 -2.34 3.24" />
                        </svg>
                        <p>{ (wind * 3.6).toString().slice(0, 4) }km/h</p>
                    </li>
                </ul>
            </div>
        </div>
    );
});
