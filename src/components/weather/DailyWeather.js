import React from 'react';
import { useSelector } from 'react-redux';
import {Swiper, SwiperSlide}from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';

import { getDay, getHour } from '../../helpers/getFormattedDate';
import { WeatherCard } from './WeatherCard';
import { WeatherResume } from './WeatherResume';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

export const DailyWeather = () => {
    const { hourWeather, dailyForecast } = useSelector(state => state.weather);

    const weather = {
        main: hourWeather.weather[0].main, description: hourWeather.weather[0].description, icon: hourWeather.weather[0].icon
    }

    const temps = {
        currentTemp: hourWeather.temp, feelsLike: hourWeather.feels_like
    }

    const info = {
        clouds: hourWeather.clouds, rain: hourWeather.humidity, wind: hourWeather.wind_speed,
    }

    return (
        <>
            <WeatherCard
                weather={ weather }
                time={ `${getDay(hourWeather.dt)}, ${getHour(hourWeather.dt)}` }
                temps={ temps }
                info={ info }
            />

            <Swiper
                className="dashboard__swiper"
                slidesPerView={3}
                spaceBetween={20}
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
                            <WeatherResume 
                                activeId={ hourWeather.dt }
                                id={ weatherInfo.dt }
                                date= { getHour(weatherInfo.dt) }
                                temp={ weatherInfo.temp }
                                weather={ weatherInfo.weather[0].main }
                                icon={ weatherInfo.weather[0].icon }
                                type="day"
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>
    );
};