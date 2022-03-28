import React from 'react';
import {cx, css} from '@emotion/css';
import Burger from './burger';
const tabsBtn = css`color: #3A3B3F;
font-weight: 500;
font-size: 16px;
line-height: 20px;`
import { btnReset } from '../../varsCss';


const ProfileBtn = () => {
    return (
        <button className={css`
        ${tabsBtn}
        ${btnReset}
        `}>Profile</button>
)       
}

export default ProfileBtn;