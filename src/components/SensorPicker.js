/** @jsx jsx */
import { jsx } from "theme-ui";
import "../style.css";

const SensorPicker = props => {
    return (
        <div className="sensorPicker">
            {props.sensors.map((sensor) => <div key={sensor} onClick={() => props.setSensorInFocus(sensor)}
                sx={{ bg: sensor === props.sensorInFocus ? "var( --primary) !important" : "backgroundSecondary" }}
            className="card"><h4>{sensor}</h4></div>)}
        </div>
    );
};

export default SensorPicker;
