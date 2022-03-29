const ExtendedWeatherItem = (props) => {

    let currentDate = new Date(props.date * 1000);
    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    let dayOfWeek = DAYS[currentDate.getDay()];

    const MONTHS = ["January", "February", "Mar", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = MONTHS[currentDate.getMonth()];

    let imageUrl = `http://openweathermap.org/img/wn/${props.image}@4x.png`

    let dayString = `${dayOfWeek}, ${currentDate.getDate()} ${month}`;

    return (
        <div className="extended-weather-item">
            <div>{props.tomorrow ? "Tomorrow" : dayString}</div>
            <img src={imageUrl} alt="desc" />
            <div className="extended-weather-item__temp">
                <div>{props.maxTemp} ºC</div>
                <div>{props.minTemp} ºC</div>
            </div>
        </div>
    )
}

export default ExtendedWeatherItem;