import { useState, useEffect } from "react";
import CurrentWeather from "./CurrentWeather";
import axios from "axios";
import ExtendedWeather from "./ExtendedWeather";
import TodaysHightlights from "./TodaysHightlights";
import Footer from "./Footer";



const App = () => {

  const [location, setLocation] = useState();

  const [currentWeatherInfo, setCurrentWeatherInfo] = useState({});

  const [extendedWeatherInfo, setExtendedWeatherInfo] = useState();

  const [todaysHightlights, setTodaysHightlights] = useState();

  const API_ID = "a8fe3487d2716316b000c6a085ce3465";
  // const API_ID = "22d10d348acc9b870cc8d15e5d426019";
  // const API_ID = "5d66e6f0ff5769ea764ea1ea7d779d5f";


  // GET LOCATION
  useEffect(() => {
    function getUserLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
      } else {
        alert("Geolocation is not supported by this browser.");
      }
    }

    function showPosition(position) {
      setLocation({
        lat: position.coords.latitude,
        lon: position.coords.longitude
      })
      console.log("Latitude: " + position.coords.latitude);
      console.log("Longitude: " + position.coords.longitude);
    }
    getUserLocation();
  }, []);

  // API REQUEST

  // CURRENT WEATHER (https://openweathermap.org/current)
  useEffect(() => {
    if (location) {
      axios.get("https://api.openweathermap.org/data/2.5/weather", {
        params: {
          appid: API_ID,
          lat: location.lat,
          lon: location.lon,
          units: "metric"
        }
      })
        .then(function (response) {
          let currentWeather = response.data;
          setCurrentWeatherInfo({
            image: `http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@4x.png`,
            temp: currentWeather.main.temp,
            main: currentWeather.weather[0].main,
            date: currentWeather.dt,
            name: currentWeather.name,
          });
          setTodaysHightlights({
            windSpeed: currentWeather.wind.speed,
            windDirection: currentWeather.wind.deg,
            humidity: currentWeather.main.humidity,
            visibility: currentWeather.visibility,
            airPressure: currentWeather.main.pressure
          })
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }, [location]);

  // EXTENDED WEATHER
  useEffect(() => {
    if (location) {
      axios.get("https://api.openweathermap.org/data/2.5/onecall", {
        params: {
          appid: API_ID,
          lat: location.lat,
          lon: location.lon,
          units: "metric",
        }
      })
        .then(function (response) {
          console.log(response);
          setExtendedWeatherInfo(response.data.daily);
        })
        .catch(function (error) {
          console.log(error);
        })
    }
  }, [location]);

  useEffect(() => {
    console.log(currentWeatherInfo);
  }, [currentWeatherInfo]);

  useEffect(() => {
    console.log(extendedWeatherInfo);
  }, [extendedWeatherInfo]);

  return (
    <>
      <CurrentWeather
        image={currentWeatherInfo.image}
        temp={currentWeatherInfo.temp}
        main={currentWeatherInfo.main}
        date={currentWeatherInfo.date}
        name={currentWeatherInfo.name}
      />
      <div>
        {extendedWeatherInfo && <ExtendedWeather
          extendedWeatherInfo={extendedWeatherInfo}
        />
        }
        {todaysHightlights && <TodaysHightlights
          windSpeed={todaysHightlights.windSpeed}
          windDirection={todaysHightlights.windDirection}
          humidity={todaysHightlights.humidity}
          visibility={todaysHightlights.visibility}
          airPressure={todaysHightlights.airPressure}
        />
        }
        <Footer />
      </div>
    </>
  );
}

export default App;

