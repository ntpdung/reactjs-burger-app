import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import buildControlsStyle from './BuildControls.css';

const buildControls = (props) => {
    let buildControls = Object.keys(props.labels).map((label) => {
        return <BuildControl label={label} />
    });

    return (
        <div className={buildControlsStyle.buildControls}>
            {buildControls}
        </div>
    );
};

export default buildControls;