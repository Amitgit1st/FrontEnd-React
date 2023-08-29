import React from "react";
import CartIcon from "../CART/CartIcon";
import classes from './HeaderCartButton.module.css';

const HeaderCartButton=props=>{
    return (
        <button className={classes.button}>
            <span className={classes.icon}>
                <CartIcon/>
            </span>
            <span>CART</span>
            <span className={classes.badge}>0</span>
        </button>
    )

}
export default HeaderCartButton;