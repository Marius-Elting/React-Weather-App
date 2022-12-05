// import { useState } from "react";
import './CurrentWeather.css';
import { useState } from 'react';
function CurrentWeather(props) {
    const [state, setState] = useState("none");
    const [Text, setText] = useState("Mehr Anzeigen ▼");
    if (props.weatherData.weather === undefined) {
        return;
    }
    let i = props.weatherData.wind.deg;
    let windDirection;

    if (i >= 349 && i <= 11) {
        windDirection = +i + "° -=- North";
    } else if (i >= 12 && i <= 33) {
        windDirection = +i + "° -=- North-Northeast";
    } else if (i >= 34 && i <= 56) {
        windDirection = +i + "° -=- Northeast";
    } else if (i >= 57 && i <= 78) {
        windDirection = +i + "° -=- East-Northeast";
    } else if (i >= 79 && i <= 101) {
        windDirection = +i + "° -=- East";
    } else if (i >= 102 && i <= 123) {
        windDirection = +i + "° -=- East-Southeast";
    } else if (i >= 124 && i <= 146) {
        windDirection = +i + "° -=- Southeast";
    } else if (i >= 147 && i <= 168) {
        windDirection = +i + "° -=- South-Southeast	";
    } else if (i >= 169 && i <= 191) {
        windDirection = +i + "° -=- South";
    } else if (i >= 192 && i <= 213) {
        windDirection = +i + "° -=- South-Southwest";
    } else if (i >= 214 && i <= 236) {
        windDirection = +i + "° -=- Southwest";
    } else if (i >= 237 && i <= 258) {
        windDirection = +i + "° -=- West-Southwest	";
    } else if (i >= 259 && i <= 281) {
        windDirection = +i + "° -=- West";
    } else if (i >= 282 && i <= 303) {
        windDirection = +i + "° -=- West-Northwest	";
    } else if (i >= 304 && i <= 326) {
        windDirection = +i + "° -=- Northwest";
    } else if (i >= 327 && i <= 348) {
        windDirection = +i + "° -=- North-Northwest	";
    }

    return (
        <section>
            <article>
                <h1>{props.city}</h1>
                <img src={`http://openweathermap.org/img/wn/${props.weatherData.weather[0].icon}@2x.png`} alt={props.weatherData.weather[0].description}></img>
                <h1>{(props.weatherData.main.temp - 274.15).toFixed(2) + "°C"}</h1>
            </article>
            <article className="PresetDiv">
                <p>Momentan herscht in {props.city} {props.weatherData.weather[0].description} bei {(props.weatherData.main.temp - 274.15).toFixed(2) + "°C"}</p>
                <p>{props.weatherData.wind.speed + " m/s " + windDirection}</p>
            </article>
            <button className='mehr Anzeigen' onClick={() => { setState(state === "none" ? "block" : "none"); setText(Text === "Mehr Anzeigen ▼" ? " Weniger Anzeigen ▲" : "Mehr Anzeigen ▼"); }}>  {Text}</button>
            <div style={{ display: state }}>
                <p>Sonnenaufgang: {(new Date(props.weatherData.sys.sunrise * 1000 + props.weatherData.timezone * 1000 - 3600 * 1000)).toLocaleTimeString(props.weatherData.sys.country)}</p>
                <p>Sonnenuntergang: {(new Date(props.weatherData.sys.sunset * 1000 + props.weatherData.timezone * 1000 - 3600 * 1000)).toLocaleTimeString(props.weatherData.sys.country)}</p>
            </div>
        </section>
    );
};

export default CurrentWeather;