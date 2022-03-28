import React from 'react';
import {cx, css} from '@emotion/css';



const ProfileCardTopRight = () => {
    return (
        <div>
            <img className={css`
            min-width: 110px;
            `} src="img/main__avatar.png"></img>
        </div>
)       
}

export default ProfileCardTopRight;