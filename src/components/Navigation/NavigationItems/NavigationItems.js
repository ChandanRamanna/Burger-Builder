import React from 'react';

import classes from './NavigationItems.css'
import NavigationItem from './NavigationItem/NavigationItem'

const navigarionitems = (props) => (
    <ul className= {classes.NavigationItems}>
        <NavigationItem link='/' active={true} >Burger Builder</NavigationItem>
        <NavigationItem link='/'>CheckOut</NavigationItem>
    </ul>
);

export default navigarionitems;