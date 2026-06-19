import { useEffect, useState } from "react";

import weatherService from '../services/weather'

const Weather = ({ cityName }) => {
    const [weather, setWeather] = useState(null)

    useEffect(() => {
        weatherService.getStateWeather(cityName)
            .then((returnedWeather) => {
                setWeather(returnedWeather)
            })

    }, [])

    if (weather === null)
        return <>Loading weather data...</>

    return (
        <>
            {weather.current_condition.map(condition =>
                <p>
                    Temperature {condition.temp_C} Celsius
                    <br />
                    <img src={condition.weatherIconUrl[0].value} />
                    <br />
                    Wind {condition.windspeedKmph} Kmph
                </p>
            )}
        </>
    )
}

const Country = ({ country }) => {

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>
                <div>Capital {country.capital}</div>
                <div>Area {country.area}</div>
            </p>
            <h1>Languages</h1>
            <ul>
                {Object.values(country.languages)
                    .map(language =>
                        <li key={language}>{language}</li>
                    )}
            </ul>
            <img src={country.flags.png} alt="Flag image"></img>
            <h1>Weather in {country.capital}</h1>
            <Weather cityName={country.capital} />
        </div>
    )
}

const Countries = ({ countries, onClickCountry, onLoadWeatherData }) => {
    if (countries === null)
        return <></>

    if (countries.length === 1)
        return <Country country={countries[0]} />

    return (
        <ul>
            {countries.map(country =>
                <li key={country.name.common}>{country.name.common}
                    <button onClick={() => onClickCountry(country)}>
                        Show
                    </button>
                </li>
            )}
        </ul>
    )
}

export default Countries