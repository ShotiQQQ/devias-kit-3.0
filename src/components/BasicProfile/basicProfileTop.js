import React from 'react';
import {cx, css} from '@emotion/css';
import { line, gray } from '../../varsCss';


const BasicProfileTop = () => {
    return (
    <div className={css`
    padding: 24px;
    border-bottom: 1px solid ${line};
    `}>
        <h3 className={css`
        display: inline;
        margin-right: 16px;
        color: #3A3B3F;
        font-weight: 500;
        font-size: 16px;
        line-height: 20px;
        @media (max-width: 1130px) {
            display: block;
            margin-bottom: 6px;
        }
        `}>Basic Profile</h3>
        <span className={css`
        font-weight: 300;
        font-size: 14px;
        line-height: 16px;
        color: ${gray};
        `}>The information can be edited from yuor profile page</span>
    </div>
)       
}

export default BasicProfileTop;