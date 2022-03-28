import React from 'react';
import {cx, css} from '@emotion/css';
import { line, notifInput, notifTitle, notifLabel } from '../../varsCss';


const NotificationsMain = () => {
    return (
        <div className={css`
        display: flex;
        padding: 24px;
        border-bottom: 1px solid ${line};
        @media (max-width: 440px) {
            flex-direction: column;
        }
        `}>
        <div className={css`
        display: flex;
        flex-direction: column;
        max-width: 195px;
        margin-right: 85px;
        @media (max-width: 1130px) {
            margin-right: 50px;
        }
        @media (max-width: 440px) {
            margin-right: 0;
            margin-bottom: 24px;
        }
        `}>
        <h3 className={css`
        ${notifTitle}
        margin-bottom: 24px;
        @media (max-width: 440px) {
            margin-bottom: 12px;
        }
        `}>Notifications</h3>
            <label className={css`
            ${notifLabel}
            `}><input className={css`
            ${notifInput}
            margin-bottom: 16px;
            `} type="checkbox"></input>Email</label>
            <label className={css`
            ${notifLabel}
            `}><input className={css`
            ${notifInput}
            margin-bottom: 16px;
            `} type="checkbox"></input>Push notifications</label>
            <label className={css`
            ${notifLabel}
            `}><input className={css`
            ${notifInput}
            margin-bottom: 16px;
            `} type="checkbox"></input>Text Messages</label>
            <label className={css`
            ${notifLabel}
            `}><input className={css`
            ${notifInput}
            `} type="checkbox"></input>Phone Calls</label>
        </div>

        <div className={css`
        display: flex;
        flex-direction: column;
        max-width: 155px;
        `}>
        <h3 className={css`
        ${notifTitle}
        margin-bottom: 24px;
        @media (max-width: 440px) {
            margin-bottom: 12px;
        }
        `}>Messages</h3>
            <label className={css`
            ${notifLabel}
            `}><input className={css`
            ${notifInput}
            margin-bottom: 16px;
            `} type="checkbox"></input>Email</label>
            <label className={css`
            ${notifLabel}
            `}><input className={css`
            ${notifInput}
            margin-bottom: 16px;
            `} type="checkbox"></input>Push notifications</label>
            <label className={css`
            ${notifLabel}
            `}><input className={css`
            ${notifInput}
            `} type="checkbox"></input>Phone Calls</label>
        </div>
    </div>
    )
}

export default NotificationsMain;