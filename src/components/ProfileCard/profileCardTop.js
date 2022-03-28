import React from 'react';
import {cx, css} from '@emotion/css';
import ProfileCardTopLeft from './profileCardTopLeft';
import ProfileCardTopRight from './profileCardTopRight';



const ProfileCardTop = () => {
    return (
    <div className={css`
    display: flex;
    padding: 24px;
    border-bottom: 1px solid #E4E7EB;
    `}>
        <ProfileCardTopLeft />
        <ProfileCardTopRight />
    </div>
)       
}

export default ProfileCardTop;