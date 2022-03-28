import React from 'react';
import {cx, css} from '@emotion/css';
import {profileBtn, btnReset, darkBlue} from '../../varsCss';


const UploadBtn = () => {
    return (
    <button className={css`
    ${btnReset}
    ${profileBtn}
    color: ${darkBlue}
    `}>upload picture</button>
)       
}

export default UploadBtn;