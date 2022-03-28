import React from 'react';
import {cx, css} from '@emotion/css';
import ProfileCardTop from './profileCardTop';
import ProfileCardBot from './profileCardBot';

const ProfileCard = () => {
    return (
        <div className={css`
        background-color: #fff;
        max-width: 375px;
        min-width: 260px;
        border-radius: 4px;
        border: 1px solid rgba(63, 63, 68, 0.005);
        box-shadow: 0px 1px 3px rgba(63, 63, 68, 0.15);
        @media (max-width: 780px) {
            margin-right: 0;
        }
        @media (max-width: 690px) {
            margin-bottom: 24px;
        }
        `}>
            <ProfileCardTop />
            <ProfileCardBot />
        </div>
    )
}

export default ProfileCard;