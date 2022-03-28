import React from 'react';
import {cx, css} from '@emotion/css';
import { listReset, marginAsideItem, asideItemLink } from '../../varsCss';


const Navbar = () => {
    return (
        <nav className={css`
        padding: 27px 16px;
        `}>
            <ul className={css`
            ${listReset}
            display: flex;
            flex-direction: column;
            `}>
                <li className={css`
                ${marginAsideItem}
                `}><a className={css`
                ${asideItemLink}
                background-image: url("img/aside__dashboard.svg");
                `} href="#">Dashboard</a></li>
                <li className={css`
                ${marginAsideItem}
                `}><a className={css`
                ${asideItemLink}
                background-image: url("img/aside__users.svg");
                `} href="#">Users</a></li>
                <li className={css`
                ${marginAsideItem}
                `}><a className={css`
                ${asideItemLink}
                background-image: url("img/aside__products.svg");
                `} href="#">Products</a></li>
                <li className={css`
                ${marginAsideItem}
                `}><a className={css`
                ${asideItemLink}
                background-image: url("img/aside__auth.svg");
                `} href="#">Authentication</a></li>
                <li className={css`
                ${marginAsideItem}
                `}><a className={css`
                ${asideItemLink}
                background-image: url("img/aside__typography.svg");
                `} href="#">Typography</a></li>
                <li><a className={css`
                ${asideItemLink}
                background-image: url("img/aside__icons.svg");
                `} href="#">Icons & Images</a></li>
            </ul>
        </nav>
)       
}

export default Navbar;