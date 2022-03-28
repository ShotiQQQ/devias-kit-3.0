import React from 'react';
import {cx, css} from '@emotion/css';
import BasicBtn from './basicBtn';


const BasicBottom = () => {
    return (
        <div className={css`
        padding: 24px;
        `}>
            <BasicBtn />
        </div>
    )
}

export default BasicBottom;