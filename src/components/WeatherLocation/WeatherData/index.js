import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUDY,
} from '../../../constants/constants'

const Index = () => (
    <div>
        <WeatherTemperature temperature={28} weatherState={CLOUDY}/>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}/>
    </div>
);

export default Index;
