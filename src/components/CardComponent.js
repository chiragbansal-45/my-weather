import React from 'react';
import { Media } from 'reactstrap';

const WeatherInfo = (props) => {
    return(
        <div className="container"> 
            <div className="row">
                <div className="col"></div>
                <div className="flex-container">
                    <div className="inner-container">
                        <div className="image">
                        <Media object src={`assets/images/${props.data.description}.svg`} alt="image not found" ></Media>

                        </div>
                        <div className="data">
                            <h2> {props.data.temprature} °C</h2>
                            <h3>  {props.data.description} </h3>
                            <h5> {new Date().toLocaleDateString()}</h5>
                            <h5> {new Date().toLocaleTimeString()}</h5>
                        </div>
                    </div>
                    
                </div>
                <div className="col"></div>
            </div>
        </div>
    );
}

export default WeatherInfo;