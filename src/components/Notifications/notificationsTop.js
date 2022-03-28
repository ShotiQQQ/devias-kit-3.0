import React from 'react';
import {cx, css} from '@emotion/css';
import { gray, line, notifTitle } from '../../varsCss';


const NotificationsTop = () => {
    return (
            <div className={css`
            padding: 24px;
            border-bottom: 1px solid ${line};
            `}>
                <h3 className={css`
                ${notifTitle}
                `}>Notifications</h3>
                <span className={css`
                font-weight: 300;
                font-size: 14px;
                line-height: 16px;
                color: ${gray};
                `}>Mange the notifications emailing</span>
            </div>
    )
}

export default NotificationsTop;