import React from 'react';
import {cx, css} from '@emotion/css';
import UploadBtn from './uploadBtn';
import RemoveBtn from './removeBtn';


const ProfileCardBot = () => {
    return (
    <div className={css`
    display: flex;
    justify-content: space-between;
    padding: 22px 40px;
    @media (max-width: 1375px) {
        padding: 12px 20px;
    }
    @media (max-width: 780px) {
        padding: 24px 40px;
    }
    @media (max-width: 440px){
        padding: 16px 30px;
    }
    `}>
        <UploadBtn />
        <RemoveBtn />
    </div>
)       
}

export default ProfileCardBot;