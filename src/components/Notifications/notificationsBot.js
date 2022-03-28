import React from 'react';
import {cx, css} from '@emotion/css';
import NotificationsMain from './notificationsMain';
import NotificationsBtn from './notificationsBtn';


const NotificationsBot = () => {
    return (
        <div className={css`
        padding: 24px;
        `}>
            <NotificationsBtn />
        </div>
    )
}

export default NotificationsBot;