import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Swiper, SwiperSlide}from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

import { getFormattedHourlyData } from '../helpers/weatherFormatters';
import { getHour } from '../helpers/getFormattedDate';
import { WeatherCard } from '../components/weather/WeatherCard';
import { WeatherResume } from '../components/weather/WeatherResume';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { updateHour } from '../actions/weather';
import { SwitchButton } from '../components/ui/SwitchButton';

export const DayForecastView = () => {
    const dispatch = useDispatch();
    const { hourWeather, dailyForecast } = useSelector(state => state.weather);

    const changeActiveHour = useCallback(function (id) {
        dispatch(
            updateHour(id)
        );
    }, [dispatch]);

    return (
        <div className="daily dashboard__view">
            <h2 className="daily__title dashboard__title">Daily forecast</h2>
            <div className="daily__general">
                <WeatherCard
                    className="weathercard"
                    {...getFormattedHourlyData(hourWeather)}
                />

                <Swiper
                    className="dashboard__swiper"
                    slidesPerView={3}
                    spaceBetween={20}
                    breakpoints={{
                        510: {
                            slidesPerView: 4,
                            spaceBetween: 10
                        },
                        720: {
                            spaceBetween: 20
                        },
                        820: {
                            slidesPerView: 5,
                            spaceBetween: 10
                        },
                        910: {
                            spaceBetween: 15
                        },
                        960: {
                            slidesPerView: 7,
                            spaceBetween: 25
                        },
                        1120: {
                            slidesPerView: 9
                        }
                    }}
                    freeMode={true}
                    pagination={{
                        dynamicBullets: true,
                        clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                >
                    {
                        dailyForecast.map((weatherInfo, index) => index < 24 && (
                            <SwiperSlide
                                key={ weatherInfo.dt }
                            >
                                <SwitchButton
                                    activeId={ hourWeather.dt }
                                    id={ weatherInfo.dt }
                                    className="resumecard pointer basic-short-transition"
                                    changeActive={ changeActiveHour }
                                >
                                    <WeatherResume 
                                        date= { getHour(weatherInfo.dt) }
                                        temp={ weatherInfo.temp }
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
};