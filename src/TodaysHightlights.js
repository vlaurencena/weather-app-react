import { useEffect, useState } from "react";
import windDirectionIcon from "./media/wind-direction-icon.png";

const TodaysHightlights = (props) => {

    // WIND DIRECTION (http://snowfence.umn.edu/Components/winddirectionanddegrees.htm)
    let windDirection = "";

    console.log(props.windDirection);

    if (props.windDirection > 348.75 || props.windDirection <= 11.25) {
        windDirection = "N";
    } else if (props.windDirection > 11.25 && props.windDirection <= 33.57) {
        windDirection = "NNE";
    } else if (props.windDirection > 33.57 && props.windDirection <= 56.25) {
        windDirection = "NE";
    } else if (props.windDirection > 56.25 && props.windDirection <= 78.75) {
        windDirection = "ENE";
    } else if (props.windDirection > 78.75 && props.windDirection <= 101.25) {
        windDirection = "E";
    } else if (props.windDirection > 101.25 && props.windDirection <= 123.75) {
        windDirection = "ESE";
    } else if (props.windDirection > 123.75 && props.windDirection <= 146.25) {
        windDirection = "SE";
    } else if (props.windDirection > 146.25 && props.windDirection <= 168.75) {
        windDirection = "SSE";
    } else if (props.windDirection > 168.75 && props.windDirection <= 191.257) {
        windDirection = "S";
    } else if (props.windDirection > 191.25 && props.windDirection <= 213.75) {
        windDirection = "SSW";
    } else if (props.windDirection > 213.75 && props.windDirection <= 236.25) {
        windDirection = "SW";
    } else if (props.windDirection > 236.25 && props.windDirection <= 258.75) {
        windDirection = "WSW";
    } else if (props.windDirection > 258.75 && props.windDirection <= 281.25) {
        windDirection = "W";
    } else if (props.windDirection > 281.25 && props.windDirection <= 303.75) {
        windDirection = "WNW";
    } else if (props.windDirection > 303.75 && props.windDirection <= 326.25) {
        windDirection = "NW";
    } else if (props.windDirection > 326.25 && props.windDirection <= 348.75) {
        windDirection = "NNW";
    } else {
        windDirection = "N/A";
    }

    let rotation = {
        transform: `rotate(${-45 + props.windDirection}deg)`
    };

    let percentage = {
        width: `${props.humidity}%`
    }
    return (
        <div className="todays-highlights">
            <div>Today’s Hightlights </div>
            <div className="todays-highlights__item">
                <div className="title">Wind status</div>
                <div className="data">{props.windSpeed}m/s</div>
                <div className="wind-direction">
                    <img style={rotation} className="wind-direction__icon" src={windDirectionIcon} alt="Wind Direction" />
                    <div>{windDirection}</div>
                </div>
            </div>
            <div className="todays-highlights__item">
                <div className="title">Humidity</div>
                <div className="data">{props.humidity}%</div>
                <div className="humidity-graphic">
                    <div className="humidity-graphic__reference">
                        <div>0</div>
                        <div>50</div>
                        <div>100</div>
                    </div>
                    <div className="humidity-graphic__bar-container">
                        <div style={percentage}>
                        </div>
                    </div>
                    <div className="humidity-graphic__percentage-symbol">%</div>
                </div>
            </div>
            <div className="todays-highlights__item">
                <div className="title">Visibility</div>
                <div className="data">{props.visibility / 1000} kms</div>
            </div>
            <div className="todays-highlights__item">
                <div className="title">Air Pressure</div>
                <div className="data">{props.airPressure} mb</div>
            </div>
        </div >
    )
}

export default TodaysHightlights;