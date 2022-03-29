import ExtendedWeatherItem from "./ExtendedWeatherItem";

const ExtendedWeather = (props) => {

    return (
        <div className="extended-weather">
            {props.extendedWeatherInfo.map((day, index) => {
                if (index !== 0 && index !== 7 && index !== 6) {
                    return <ExtendedWeatherItem
                        key={day.dt}
                        tomorrow={index === 1}
                        date={day.dt}
                        image={day.weather[0].icon}
                        maxTemp={day.temp.max}
                        minTemp={day.temp.min}
                        units={props.units}
                    />
                }
            })}
        </div>
    )
}

export default ExtendedWeather;