import React from 'react';
import {Media} from 'reactstrap';

const Preview = (props) => {
    return(
        <div className="flex-container">
            <div className="inner-container">
            <Media object src={'assets/images/Preview.svg'}
        alt="Weather App Icon" className="preview" />
            </div>
            

        </div>
        
    )
}
export default Preview;