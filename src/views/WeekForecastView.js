import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { updateDay } from '../actions/weather';
import { SwitchButton } from '../components/ui/SwitchButton';
import { TemperatureDetails } from '../components/weather/TemperatureDetails';
import { TimeDetails } from '../components/weather/TimeDetails';

import { WeatherCard } from '../components/weather/WeatherCard';
import { WeatherResume } from '../components/weather/WeatherResume';
import { getShortDay } from '../helpers/getFormattedDate';
import { getFormattedDailyData } from '../helpers/weatherFormatters';

export const WeekForecastView = React.memo(() => {
    const dispatch = useDispatch();
    const { dayWeather, weeklyForecast } = useSelector(state => state.weather);
    
    const changeActiveDay = useCallback(function (id) {
        dispatch(
            updateDay(id)
        );
    }, [dispatch]);

    return (
        <div className="weekly dashboard__view">
            <h2 className="weekly__title dashboard__title">Weekly forecast</h2>
            <div className="weekly__general">
                <WeatherCard
                    className="weathercard"
                    {...getFormattedDailyData(dayWeather)}
                >
                    <TimeDetails 
                        timeDetails={{
                            sunrise: dayWeather.sunrise,
                            sunset: dayWeather.sunset
                        }}
                    />

                    <TemperatureDetails 
                        tempDetails={{
                            minT: dayWeather.temp.min,
                            maxT: dayWeather.temp.max
                        }}
                    />
                </WeatherCard>

                <Swiper
                    className="dashboard__swiper"
                    slidesPerView={2}
                    spaceBetween={20}
                    freeMode={true}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    breakpoints={{
                        960: {
                            slidesPerView: 5,
                            spaceBetween: 10,
                        },
                        1130: {
                            slidesPerView: 6,
                            spaceBetween: 0,
                        }
                    }}
                    modules={[FreeMode, Pagination]}
                >
                    {
                        weeklyForecast.map((weatherInfo) => (
                            <SwiperSlide
                                key={ weatherInfo.dt }
                            >
                                <SwitchButton
                                    activeId={ dayWeather.dt }
                                    id={ weatherInfo.dt }
                                    className="weekly resumecard pointer basic-short-transition"
                                    changeActive={ changeActiveDay }
                                >
                                    <WeatherResume 
                                        date= { getShortDay(weatherInfo.dt, 4) }
                                        temp={ weatherInfo.temp.day }
                                        weather={ weatherInfo.weather[0].main }
                                        icon={ weatherInfo.weather[0].icon }
                                    />
                                </SwitchButton>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
});
