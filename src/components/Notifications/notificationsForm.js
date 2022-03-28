import React from 'react';
import {cx, css} from '@emotion/css';
import NotificationsMain from './notificationsMain';
import NotificationsBot from './notificationsBot';


const NotificationsForm = () => {
    return (
        <form method="POST">
        <NotificationsMain />
        <NotificationsBot />
        </form>
    )
}

export default NotificationsForm;