import React from 'react';
import {cx, css} from '@emotion/css';
import { line, basicInput, darkBlue } from '../../varsCss';


const BasicMain = () => {
    return (
        <div className={css`
        padding: 24px 24px 0 24px;
        border-bottom: 1px solid ${line};
        `}>
            <input className={css`
            ${basicInput}
            margin-right: 24px;
            `} required placeholder="First Name" type="text" id="firstName"></input>
            <input className={css`
            ${basicInput}
            `} required placeholder="Last Name" type="text" id="lastName"></input>
            <input className={css`
            ${basicInput}
            margin-right: 24px;
            `} required placeholder="Email" type="email" id="email"></input>
            <input className={css`
            ${basicInput}
            `} required placeholder="Telephone" type="tel" id="tel"></input>
            <input className={css`
            ${basicInput}
            margin-right: 24px;
            `} required placeholder="Country" type="text" id="country"></input>
            <input className={css`
            ${basicInput}
            `} required placeholder="City" type="text" id="city"></input>
        </div>
    )
}

export default BasicMain;