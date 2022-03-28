import { css, cx } from '@emotion/css'

const violetBlue = '#3F51B5';
const darkBlue = '#1665D8';
const periwinkle = '#CDD1EA';
const gray = '#66788A';
const line = '#E4E7EB';


const flexCenter = `
display: flex;
align-items: center;`;

const listReset = `
margin: 0;
padding: 0;
list-style: none;
`;

const btnReset = `
padding: 0;
border: none;
background-color: transparent;
cursor: pointer;`;

const burgerClose = `
width: 100%;
height: 3px;
background-color: #3A3B3F;
position: absolute;
`
;

const marginAsideItem = `
margin-bottom: 30px;
`;

const asideItemLink = `
font-weight: 500;
font-size: 14px;
line-height: 20px;
color: ${gray};
background-position: left center;
background-repeat: no-repeat;
background-size: 19px 17px;
padding-left: 26px;
`;

const contentTabsItem = `
display: flex;
align-items: center;
justify-content: center;
height: 100%;
width: 81px;
`;

const tabsBurgerLine = `
width: 100%;
height: 3px;
background-color: #3A3B3F;
margin-bottom: 5px;
`;

const profileAdressTime = `
font-weight: 400;
font-size: 14px;
line-height: 20px;
color: #9EA0A5;
    @media (max-width: 1375px) {
        font-size: 12px;
    }
`;

const profileBtn = `
font-weight: 500;
font-size: 14px;
line-height: 16px;
text-transform: uppercase;
color: #425A70;
letter-spacing: 1px;`;

const basicInput = `
width: 328px;
height: 56px;
padding: 16px;
border-radius: 4px;
margin-bottom: 24px;
border: 1px solid rgba(0, 0, 0, 0.32);
&:focus {
    outline: 2px solid ${darkBlue};
    }
@media (max-width: 1045px) {
    margin-right: 0;
}
@media (max-width: 780px) {
    width: 100%;
}
@media (max-width: 440px) {
    max-width: 100%;
}
`;

const basicBtn = css`padding: 12px 16px;
text-transform: uppercase;
background-color: ${darkBlue};
border-radius: 4px;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: #fff;
letter-spacing: 1.25px;
transition: background-color .3s ease;
&:hover {
    background-color: #109ef0;
}
&:active {
    background-color: ${darkBlue};
}
`;

const notifTitle = `
display: inline;
margin-right: 16px;
color: #3A3B3F;
font-weight: 500;
font-size: 16px;
line-height: 20px;
@media (max-width: 1130px){
    display: block;
    margin-bottom: 6px;
}
@media (max-width: 440px) {
    margin-bottom: 12px;
}
`;

const notifInput = `
margin-right: 9px;
`

const notifLabel = `
color: rgba(0, 0, 0, 0.6);
font-weight: 400;
font-size: 16px;
line-height: 24px;
`;

const notifBtn = `padding: 12px 42px;
text-transform: uppercase;
background-color: #fff;
border-radius: 4px;
font-weight: 500;
font-size: 14px;
line-height: 16px;
color: ${darkBlue};
letter-spacing: 1.25px;
border: 1px solid rgba(0, 0, 0, 0.12);
transition: background-color .3s ease, color .3s ease;
&:hover {
    background-color: #109ef0;
    color: #fff;
}
&:active {
    background-color: #fff;
    color: ${darkBlue};
}`;

export {violetBlue, darkBlue, periwinkle, gray, flexCenter, listReset, btnReset, burgerClose, marginAsideItem, asideItemLink, contentTabsItem, tabsBurgerLine, profileAdressTime, profileBtn, line, basicInput, basicBtn, notifTitle, notifInput, notifLabel, notifBtn};