import React from 'react';
import {cx, css} from '@emotion/css';
import Burger from './burger';
import ProfileBtn from './profileBtn';
import AccountBtn from './accountBtn';
import PricePlansBtn from './pricePlansBtn';
import { flexCenter, listReset, contentTabsItem, darkBlue } from '../../varsCss';


const ContentTabs = () => {
    return (
        <ul className={css`
        ${flexCenter}
        ${listReset}
        height: 57px;
        @media (max-width: 440px) {
            justify-content: space-between;
        }
        `}>
            <li className={css`
            ${contentTabsItem}
            border-bottom: 3px solid ${darkBlue};
            margin-right: 40px;
            @media (max-width: 440px) {
                width: auto;
                margin-right: 0;
            }
            `}>
                <ProfileBtn />
            </li>
            <li className={css`
            ${contentTabsItem}
            margin-right: 40px;
            @media (max-width: 440px) {
                width: auto;
                margin-right: 0;
            }
            `}>
                <AccountBtn />
            </li>
            <li className={css`
            ${contentTabsItem}
            @media (max-width: 1045px) {
                margin-right: 40px;
            }
            @media (max-width: 440px) {
                width: auto;
                margin-right: 0;
            }
            `}>
                <PricePlansBtn />
            </li>
            <Burger />
        </ul>
)       
}


export default ContentTabs;