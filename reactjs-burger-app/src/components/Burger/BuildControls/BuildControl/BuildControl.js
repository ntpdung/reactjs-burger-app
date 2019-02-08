import React from 'react';
import buildControlStyle from './BuildControl.css';

const buildControl = (props) => {
    return (
        <div className={buildControlStyle.buildControl}>
            <label>{props.label}</label>
            <button className={`${buildControlStyle.adjustBtn} ${buildControlStyle.lessBtn}`} onClick={props.remove} disabled={props.isDisabled}>Less</button>
            <button className={`${buildControlStyle.adjustBtn}`} onClick={props.add}>More</button>
        </div>
    );
};

export default buildControl;