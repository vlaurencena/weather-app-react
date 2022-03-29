import { useState, useEffect } from "react";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";



const App = () => {

  const [location, setLocation] = useState({
    lat: 35,
    lon: 139
  });

  const [currentWeatherInfo, setCurrentWeatherInfo] = useState({});

  const API_ID = "5d66e6f0ff5769ea764ea1ea7d779d5f";

  useEffect(() => {
    axios.get("https://api.openweathermap.org/data/2.5/weather?", {
      params: {
        appid: API_ID,
        lat: location.lat,
        lon: location.lon,
        units: "metric"
      }
    })
      .then(function (response) {
        // CURRENT
        console.log(response.data);
        let currentWeather = response.data;
        console.log(currentWeather)
        setCurrentWeatherInfo({
          image: `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`,
          temp: currentWeather.main.temp,
          main: currentWeather.weather[0].main,
          date: currentWeather.dt,
          name: currentWeather.name,
        })
      })
      .catch(function (response) {
        return;
      })
  }, []);

  useEffect(() => {
    currentWeatherInfo && console.log(currentWeatherInfo);
  }, [currentWeatherInfo]);



  return (
    <div className="">
      <CurrentWeather
        image={currentWeatherInfo.image}
        temp={currentWeatherInfo.temp}
        main={currentWeatherInfo.main}
        date={currentWeatherInfo.date}
        name={currentWeatherInfo.name}
      />
    </div>
  );
}

export default App;

