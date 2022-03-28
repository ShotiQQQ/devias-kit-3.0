import React from 'react';
import {cx, css} from '@emotion/css';
import { basicBtn, btnReset } from '../../varsCss';




const BasicBtn = () => {
    return (
        <button className={css`
        ${btnReset}
        ${basicBtn}
        `} type="submit">save settings</button>
    )
}

export default BasicBtn;