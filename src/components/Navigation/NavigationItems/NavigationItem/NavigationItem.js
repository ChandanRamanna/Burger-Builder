import React from 'react';

import classes from './NavigationItem.css'

const navigationitem = (props) => (

    <li className= {classes.NavigationItem}>
        <a href = {props.links} className={props.active ? classes.active : null}>{props.children}</a>
    </li>

);

export default navigationitem;