import React,{Fragment} from "react";
import classes from './Header.module.css';
import dishImage from '../../ASSETS/MEALS.jpg'
import HeaderCartButton from "./HeaderCartButton";

const Header=props=>{
    return <Fragment>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}> 
            <img src={dishImage} alt="mealsImage"/>
        </div>
    </Fragment>

}
export default Header;