

const CurrentWeather = (props) => {

    let currentDate = new Date(props.date * 1000);
    const DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'];
    let dayOfWeek = DAYS[currentDate.getDay()];

    const MONTHS = ["January", "February", "Mar", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let month = MONTHS[currentDate.getMonth()];

    let dayString = `${dayOfWeek}, ${currentDate.getDate()} ${month}`;

    return (
        <div className="current-weather">
            <img src={props.image} alt={props.description} />
            <div className="current-weather__temp">{props.temp}<span>ºC</span></div>
            <div className="current-weather__main">{props.main}</div>
            <div className="current-weather__date">
                <div className="left-div">Today</div>
                <span className="middle-div">•</span>
                <div className="right-div">{dayString}</div>
            </div>
            <div className="current-weather__name">{props.name}</div>
        </div>
    )
}

export default CurrentWeather;