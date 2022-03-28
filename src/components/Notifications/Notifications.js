import React from 'react';
import {cx, css} from '@emotion/css';
import NotificationsTop from './notificationsTop';
import NotificationsForm from './notificationsForm';

const Notifications = () => {
    return (
        <div className={css`
        max-width: 910px;
        background-color: #fff;
        margin-bottom: 24px;
        box-shadow: 0px 1px 0px rgba(63, 63, 68, 0.05), 0px 1px 3px rgba(63, 63, 68, 0.15);
        border-radius: 4px;
        `}>
            <NotificationsTop />
            <NotificationsForm />
        </div>
    )
}

export default Notifications;