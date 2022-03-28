import React from 'react';
import {cx, css} from '@emotion/css';
import { flexCenter, listReset } from '../../varsCss';
const headerButton = css`width: 19px;height: 19px;background-position: center center;background-repeat: no-repeat;`;
const buttonReset = css`padding: 0;
border: none;
background-color: transparent;
cursor: pointer;`


const Control = () => {
    return (
            <ul className={css`
            ${flexCenter}
            ${listReset}
            `}>
                <li className={css`
                ${flexCenter}
                margin-right: 20px;
                `}><button className={cx(buttonReset, headerButton, css`background-image: url("img/header__notifications.svg")`)}></button></li>
                <li className={css`
                ${flexCenter}
                `}><button className={cx(buttonReset, headerButton, css`background-image: url("img/header__exit.svg")`)}></button></li>
            </ul>)       
}

export default Control;