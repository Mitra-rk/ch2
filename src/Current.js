import "./App.css";
import axios from "axios";
import { useState } from "react";

export default function Current(props) {
  let [currentDate, setCurrentDate] = useState("");
  let [city, setCity] = useState("");
  let [wind, setWind] = useState("");
  let [humidity, setHumidity] = useState("");
  let [temp, setTemp] = useState("");
  let [condition, setCondition] = useState("");
  let [imageCondition, setImageCondition] = useState("");

  let apiKey = "0t0f733f3454c9aobbda64f6025e69d0";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.city1}&key=${apiKey}`;

  axios.get(apiUrl).then(getInfo);

  function getInfo(response) {
    setCity(response.data.city);
    setWind(Math.round(response.data.wind.speed));
    setHumidity(response.data.temperature.humidity);
    setCondition(response.data.condition.description);
    setTemp(response.data.temperature.current);
    setImageCondition(response.data.condition.icon_url);

    let week = [
      "Sunday",
      "Monday",
      "Tuseday",
      "Wednsday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    let date = new Date(response.data.time * 1000);
    let day = week[date.getDay()];
    let hour = date.getHours();
    let min = date.getMinutes();
    if (hour < 10) {
      hour = `0${hour}`;
    }
    if (min < 10) {
      min = `0${min}`;
    }

    setCurrentDate(` ${day} ${hour}:${min}`);
  }

  return (
    <div className="Current">
      <div class="cityTime">
        <h1 id="city">{city}</h1>
        <p id="day">Last updated at:{currentDate}</p>
        <p id="condition">{condition}</p>
      </div>

      <div class="row">
        <div class="col-7 tempDegree">
          <img id="image" src={imageCondition} alt="" />
          <strong id="temprature">{temp}°C</strong>
        </div>
        <div class="col-5 humidityWind">
          <ul>
            <li id="humid">Humidity:{humidity} %</li>
            <li id="wind">Wind:{wind} Km/h</li>
          </ul>
        </div>
      </div>

      <div id="forecast"></div>
      <div class="coded">
        <a id="linkGithub" href="https://github.com/Mitra-rk/ch2">
          Open-Source code
        </a>
        <span> by Mitra Enayatollahi</span>
      </div>
    </div>
  );
}
