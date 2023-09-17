import * as dotenv from 'dotenv';
import fetch from 'node-fetch';
import promptSync from 'prompt-sync';

dotenv.config();

interface Weather {
    name: string;
    cod: number;
    message: string;
    main: {
        temp: number;
    };
}

async function main(): Promise<void> {
    const location = getUserLocation();
    const weather = await getWeather(location);

    outputWeather(weather);
}

function getUserLocation(): string {
    const prompt = promptSync();
    const location = prompt('Where are you? ');

    return location;
}

async function getWeather(location: string): Promise<Weather> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${process.env.APP_ID}`;
    const response = await fetch(url);

    return await response.json();
}

function outputWeather(weather: Weather): void {
    if ([401, 404].includes(Number(weather.cod))) {
        console.log(`Location not found: ${weather.message}`);
        return;
    }

    const temp = Math.round(kelvinToFahrenheit(weather.main.temp));
    console.log(`${weather.name} weather:`);
    console.log(`${temp} degress Fahrenheit`);
}

function kelvinToFahrenheit(kelvin: number): number {
    return ((kelvin - 273.15) * 9) / 5 + 32;
}

main();
