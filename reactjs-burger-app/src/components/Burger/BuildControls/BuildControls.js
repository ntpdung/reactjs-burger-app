import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import buildControlsStyle from './BuildControls.css';

const buildControls = (props) => {
    let buildControls = Object.keys(props.labels).map((label, index) => {
        return <BuildControl 
            key={label + index} 
            label={label}
            added={() => props.addedIngredient(label)} />
    });

    return (
        <div className={buildControlsStyle.buildControls}>
            {buildControls}
        </div>
    );
};

export default buildControls;