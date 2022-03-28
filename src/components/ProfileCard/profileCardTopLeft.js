import React from 'react';
import {cx, css} from '@emotion/css';
import { profileAdressTime } from '../../varsCss';



const ProfileCardTopLeft = () => {
    return (
        <div className={css`
        margin-right: auto;
        @media (max-width: 780px) {
            margin-right: auto;
        }
        @media (max-width: 440px) {
            margin-right: 18px;
        }
        `}>
            <h2 className={css`
            font-weight: 500;
            font-size: 24px;
            line-height: 28px;
            color: #212529;
            margin-bottom: 10px;
            @media (max-width: 1375px) {
                font-size: 20px;
            }
            `}>Adrian Stefan</h2>
            <span className={css`
            ${profileAdressTime}
            `}>Rm. Valcea, Romania</span>
            <br></br>
            <span className={css`
            ${profileAdressTime}
            `}>4:32PM (GMT-4)</span>
        </div>
)       
}

export default ProfileCardTopLeft;