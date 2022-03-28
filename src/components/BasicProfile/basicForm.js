import React from 'react';
import {cx, css} from '@emotion/css';
import BasicMain from './basicMain';
import BasicBottom from './basicBottom';


const BasicForm = () => {
    return (
        <form method="POST">
        <BasicMain />
        <BasicBottom />
        </form>
)       
}

export default BasicForm;