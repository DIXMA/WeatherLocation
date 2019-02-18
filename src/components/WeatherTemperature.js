import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types'

import {
    SUN,
    SNOW,
} from './constants/constants'
const icons = {
    [SUN]: 'day-sunny',
    [SNOW]: 'day-snow',
};

const getWeatherIcon = (weatherState) => {
    const icon = icons[weatherState];
    if (icon)
        return <WeatherIcons name={icon} size="2x"/>
    else
        return <WeatherIcons name="day-sunny" size="2x"/>
};

const WeatherTemperature = ({temperature, weatherState}) => (
    <div>
        {getWeatherIcon(weatherState)}
        <WeatherIcons name="cloud" size="2x" />
        <span>{`${temperature} C°`}</span>
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};

export default WeatherTemperature;