import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import { prependOnceListener } from 'cluster';

const buildControls = (props) => {
    return (
        <div>
            <BuildControl label={props.label} />
        </div>
    );
};

export default buildControls;