

const CurrentWeather = (props) => {


    return (
        <div className="current-weather">
            <img src={props.image} alt={props.description} />
            <div className="current-weather__temperature">{props.temp}</div>
            <div>{props.main}</div>
            <div>
                <div>Today</div>
                <div>{props.date}</div>
            </div>
            <div>{props.name}</div>
        </div>
    )
}

export default CurrentWeather;