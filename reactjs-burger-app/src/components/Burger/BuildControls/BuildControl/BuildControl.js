import React from 'react';
import buildControlStyle from './BuildControl.css';

const buildControl = (props) => {
    return (
        <div className={buildControlStyle.buildControl}>
            <label>{props.label}</label>
            <div className={`${buildControlStyle.adjustBtn} ${buildControlStyle.lessBtn}`}>Less</div>
            <div className={buildControlStyle.adjustBtn}>More</div>
        </div>
    );
};

export default buildControl;