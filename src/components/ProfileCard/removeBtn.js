import React from 'react';
import {cx, css} from '@emotion/css';
import {profileBtn, btnReset} from '../../varsCss';


const RemoveBtn = () => {
    return (
        <button className={css`
        ${btnReset}
        ${profileBtn}
        `}>remove picture</button>
)       
}

export default RemoveBtn;