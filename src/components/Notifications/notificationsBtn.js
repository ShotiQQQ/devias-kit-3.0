import React from 'react';
import {cx, css} from '@emotion/css';
import NotificationsMain from './notificationsMain';
import { btnReset, notifBtn } from '../../varsCss';



const NotificationsBtn = () => {
    return (
        <button className={css`
        ${btnReset}
        ${notifBtn}
        `} type="submit">save</button>
    )
}

export default NotificationsBtn;