import React from 'react';
import { useSelector } from 'react-redux';
import { FreeMode, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { getDay } from '../../helpers/getFormattedDate';
import { WeatherCard } from './WeatherCard';
import { WeatherResume } from './WeatherResume';

export const WeeklyWeather = () => {
    const { dayWeather, weeklyForecast } = useSelector(state => state.weather);

    const weather = {
        main: dayWeather.weather[0].main, description: dayWeather.weather[0].description, icon: dayWeather.weather[0].icon
    }

    const temps = {
        currentTemp: dayWeather.temp.day, feelsLike: dayWeather.feels_like.day,
        details: {
            minT: dayWeather.temp.min,
            maxT: dayWeather.temp.max
        }
    }

    const info = {
        clouds: dayWeather.clouds, rain: dayWeather.humidity, wind: dayWeather.wind_speed,
        raises: {
            sunrise: dayWeather.sunrise,
            sunset: dayWeather.sunset
        }
    }

    return (
        <>
            <WeatherCard
                weather={ weather }
                time={ getDay(dayWeather.dt) }
                temps={ temps }
                info={ info }
            />

            <Swiper
                className="dashboard__swiper"
                slidesPerView={2}
                spaceBetween={20}
                freeMode={true}
                pagination={{
                    dynamicBullets: true,
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
            >
                {
                    weeklyForecast.map((weatherInfo) => (
                        <SwiperSlide
                            key={ weatherInfo.dt }
                        >
                            <WeatherResume 
                                activeId={ dayWeather.dt }
                                id={ weatherInfo.dt }
                                date= { getDay(weatherInfo.dt) }
                                temp={ weatherInfo.temp.day }
                                weather={ weatherInfo.weather[0].main }
                                icon={ weatherInfo.weather[0].icon }
                                type="week"
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </>


    );
};