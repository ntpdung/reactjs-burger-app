import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import buildControlsStyle from './BuildControls.css';

const buildControls = (props) => {
    let buildControls = Object.keys(props.labels).map((label, index) => {
        return <BuildControl 
            key={label + index} 
            label={label}
            add={() => props.addedIngredient(label)} 
            remove={() => props.removeIngredient(label)}/>
    });

    return (
        <div className={buildControlsStyle.buildControls}>
            {buildControls}
        </div>
    );
};

export default buildControls;