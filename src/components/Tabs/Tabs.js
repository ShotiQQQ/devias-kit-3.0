import React from 'react';
import {cx, css} from '@emotion/css';
import ContentTabs from './contentTabs';
import LineTabs from './lineTabs';


const Tabs = () => {
    return (
    <div className={css`
    grid-area: tabs;
    `}>
        <ContentTabs />
        <LineTabs />
    </div>
)       
}

export default Tabs;