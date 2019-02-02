import React from 'react';
import Aux from '../../hoc/aux';
import layoutStyle from './Layout.css'

const layout = (props) => (
    <Aux>
        <div className={layoutStyle.header}>
            toolbar, sidedrawer, backdrop
        </div>
        <main className={layoutStyle.content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;