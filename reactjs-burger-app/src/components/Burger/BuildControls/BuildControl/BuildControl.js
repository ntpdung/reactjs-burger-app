import React from 'react';
import buildControlStyle from './BuildControl.css';

const buildControl = (props) => {
    return (
        <div className={buildControlStyle.buildControl}>
            <label>{props.label}</label>
            <div>Less</div>
            <div>More</div>
        </div>
    );
};

export default buildControl;