import React from 'react';
import Aux from '../../hoc/aux';
import layoutStyle from './Layout.css'

const layout = (props) => (
    <Aux>
        <div>
            toolbar, sidedrawer, backdrop
        </div>
        <main className={layoutStyle.Content}>
            {props.children}
        </main>
    </Aux>
);

export default layout;