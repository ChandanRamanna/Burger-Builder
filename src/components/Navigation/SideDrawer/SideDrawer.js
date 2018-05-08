import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.css'
import Backdrop from '../../UI/Backdrop/Backdrop'
import Aux from '../../../hoc/Aux/Aux'

const sideDrawer = (props) => {
    
    let alterClass = [classes.SideDrawer, classes.Close]

    if(props.open){
        alterClass = [classes.SideDrawer, classes.Open]
    }

    return(
        <Aux>
        <Backdrop show={props.open} clicked={props.closed}/>
        <div className = {alterClass.join(' ')}>
            <div className = {classes.Logo}>
                <Logo />
            </div>
            <nav>
                <NavigationItems />
            </nav>
        </div>
        </Aux>
    );
}

export default sideDrawer;