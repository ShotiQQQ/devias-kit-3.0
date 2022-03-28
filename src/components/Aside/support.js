import React from 'react';
import {cx, css} from '@emotion/css';
import { btnReset, asideItemLink } from '../../varsCss';


const Support = () => {
    return (
        <div className={css`
        display: flex;
        flex-shrink: 0;
        flex-direction: column;
        padding-left: 20px;
        `}>
            <span className={css`
            font-weight: 500;
            font-size: 13px;
            line-height: 15px;
            color: rgba(0, 0, 0, 0.328974);
            margin-bottom: 19px;
            `}>Support</span>
            <a className={css`           
            ${asideItemLink}
            background-image: url("img/aside__support.svg");
            cursor: pointer;
            `}>Support</a>
        </div>
)       
}

export default Support;