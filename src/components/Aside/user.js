import React from 'react';
import {cx, css} from '@emotion/css';
import { flexCenter } from '../../varsCss';


const User = () => {
    return (
        <div className={css`
        ${flexCenter}
        flex-direction: column;
        padding: 16px 5px;
        `}>
            <img className={css`
            border-radius: 100px;
            margin-bottom: 16px;
            `} src="img/aside__avatar.png" alt="Фотография Романа Кутепова"></img>
            <h3 className={css`
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
            margin-bottom: 4px;
            `}>Roman Kutepov</h3>
            <span className={css`
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: #9EA0A5;
            `}>Brain Director</span>
        </div>
)       
}

export default User;